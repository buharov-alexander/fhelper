package ru.bukharov.fhelper.cbr.service;

import java.io.IOException;
import java.net.URL;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import org.apache.commons.collections4.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;
import ru.bukharov.fhelper.cbr.dto.CbrDailyRate;
import ru.bukharov.fhelper.cbr.dto.CbrDailyRates;
import ru.bukharov.fhelper.cbr.dto.CbrDynamicRates;
import ru.bukharov.fhelper.cbr.dto.ValutaCode;
import ru.bukharov.fhelper.common.io.UrlService;
import ru.bukharov.fhelper.common.marshalling.XmlProvider;

@Service
public class CbrServiceImpl implements CbrService {
    private static final String CBR_URL = "http://www.cbr.ru/scripts/";
    private static final String XML_DAILY = "XML_daily_eng.asp";
    private static final String XML_DYNAMIC = "XML_dynamic.asp";
    private static final String DATE_REQ = "date_req";
    private static final String RANGE_FROM = "date_req1";
    private static final String RANGE_TO = "date_req2";
    private static final String VALUTA_CODE = "VAL_NM_RQ";

    private final Logger log = LoggerFactory.getLogger(CbrServiceImpl.class);

    private final UrlService urlService;
    private final XmlProvider xmlProvider;
    private final DateFormat cbrDateFormat = new SimpleDateFormat("dd.MM.yyyy");

    @Autowired
    public CbrServiceImpl(UrlService urlService, XmlProvider xmlProvider) {
        this.urlService = urlService;
        this.xmlProvider = xmlProvider;
    }

    @Override
    public CbrDailyRates getDailyRates(Date date) {
        return getDailyRates(date, null);
    }

    @Override
    public CbrDailyRates getDailyRates(Date date, List<ValutaCode> valutaCodes) {
        try {
            date = date != null ? date : new Date();
            URL url = UriComponentsBuilder.fromHttpUrl(CBR_URL + XML_DAILY)
                    .queryParam(DATE_REQ, cbrDateFormat.format(date))
                    .build()
                    .toUri()
                    .toURL();

            CbrDailyRates cbrDailyRates = xmlProvider.unmarshal(urlService.readUrl(url), CbrDailyRates.class);
            filterValuta(cbrDailyRates, valutaCodes);
            return cbrDailyRates;
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            return null;
        }
    }

    @Override
    public CbrDynamicRates getDynamicRates(ValutaCode valutaCode, Date rangeFrom, Date rangeTo) {
        if (Objects.isNull(valutaCode)) {
            throw new IllegalArgumentException("The valutaCode is not specified");
        }

        try {
            URL url = UriComponentsBuilder.fromHttpUrl(CBR_URL + XML_DYNAMIC)
                    .queryParam(RANGE_FROM, cbrDateFormat.format(rangeFrom))
                    .queryParam(RANGE_TO, cbrDateFormat.format(rangeTo))
                    .queryParam(VALUTA_CODE, valutaCode)
                    .build()
                    .toUri()
                    .toURL();

            return xmlProvider.unmarshal(urlService.readUrl(url), CbrDynamicRates.class);
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            return null;
        }
    }

    private void filterValuta(CbrDailyRates cbrDailyRates, List<ValutaCode> valutaCodes) {
        if (CollectionUtils.isNotEmpty(valutaCodes)) {
            List<String> valutaCodesStr = valutaCodes.stream()
                .map(ValutaCode::getCode)
                .collect(Collectors.toList());

            List<CbrDailyRate> rates = cbrDailyRates.getRates().stream()
                    .filter(rate -> valutaCodesStr.contains(rate.getId()))
                    .collect(Collectors.toList());
            cbrDailyRates.setRates(rates);
        }
    }
}
