package ru.bukharov.fhelper.cbr.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;
import ru.bukharov.fhelper.cbr.dto.CbrDailyRate;
import ru.bukharov.fhelper.cbr.dto.CbrDailyRates;
import ru.bukharov.fhelper.cbr.dto.CbrDynamicRates;
import ru.bukharov.fhelper.common.io.UrlService;
import ru.bukharov.fhelper.common.marshalling.XmlProvider;

import java.io.IOException;
import java.net.URL;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CbrServiceImpl implements CbrService {
    private static final String CBR_URL = "http://www.cbr.ru/scripts/";
    private static final String XML_DAILY = "XML_daily_eng.asp";
    private static final String XML_DYNAMIC = "XML_dynamic.asp";
    private static final String DATE_REQ = "date_req";
    private static final String RANGE_FROM = "date_req1";
    private static final String RANGE_TO = "date_req2";
    private static final String VALUTA_CODE = "VAL_NM_RQ";

    private Logger log = LoggerFactory.getLogger(CbrServiceImpl.class);

    @Autowired
    private UrlService urlService;
    @Autowired
    private XmlProvider xmlProvider;
    private DateFormat cbrDateFormat = new SimpleDateFormat("dd.MM.yyyy");


    @Override
    public CbrDailyRates getDailyRates(Date date) {
        return getDailyRates(date);
    }

    @Override
    public CbrDailyRates getDailyRates(Date date, List<String> valutaCodes) {
        try {
            date = date != null ? date : new Date();
            URL url = UriComponentsBuilder.fromHttpUrl(CBR_URL + XML_DAILY)
                    .queryParam(DATE_REQ, cbrDateFormat.format(date))
                    .build()
                    .toUri()
                    .toURL();

            CbrDailyRates cbrDailyRates = xmlProvider.unmarshal(urlService.readUrl(url), CbrDailyRates.class);
            filterValutas(cbrDailyRates, valutaCodes);
            return cbrDailyRates;
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            return null;
        }
    }

    @Override
    public CbrDynamicRates getDynamicRates(String valutaCode, Date rangeFrom, Date rangeTo) {
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

    private void filterValutas(CbrDailyRates cbrDailyRates, List<String> valutaCodes) {
        if (valutaCodes != null) {
            List<CbrDailyRate> rates = cbrDailyRates.getRates().stream()
                    .filter(rate -> valutaCodes.contains(rate.getId()))
                    .collect(Collectors.toList());
            cbrDailyRates.setRates(rates);
        }
    }
}
