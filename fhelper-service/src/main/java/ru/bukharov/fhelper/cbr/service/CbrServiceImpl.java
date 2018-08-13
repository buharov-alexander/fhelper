package ru.bukharov.fhelper.cbr.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.bukharov.fhelper.cbr.dto.CbrValCurs;
import ru.bukharov.fhelper.common.io.UrlService;
import ru.bukharov.fhelper.common.marshalling.XmlProvider;

import java.io.IOException;
import java.net.URL;

@Service
public class CbrServiceImpl implements CbrService {
    private static final String CBR_URL = "http://www.cbr.ru/scripts/";
    private static final String XML_DAILY = "XML_daily_eng.asp";

    private Logger log = LoggerFactory.getLogger(CbrServiceImpl.class);

    @Autowired
    private UrlService urlService;
    @Autowired
    private XmlProvider xmlProvider;

    @Override
    public CbrValCurs getDailyRates() {
        try {
            URL url = new URL(CBR_URL + XML_DAILY);
            return xmlProvider.unmarshal(urlService.readUrl(url), CbrValCurs.class);
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            return null;
        }
    }
}
