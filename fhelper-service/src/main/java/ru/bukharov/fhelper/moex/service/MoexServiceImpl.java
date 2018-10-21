package ru.bukharov.fhelper.moex.service;

import java.io.IOException;
import java.net.URL;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;
import ru.bukharov.fhelper.common.io.UrlService;
import ru.bukharov.fhelper.common.marshalling.JsonMarshaller;
import ru.bukharov.fhelper.common.marshalling.Marshaller;
import ru.bukharov.fhelper.moex.dto.Securities;

@Service
public class MoexServiceImpl implements MoexService {

    private static final String MOEX_INDEX = "https://iss.moex.com//iss/engines/stock/markets/index/securities/";
    private static final String JSON = ".json";

    private final Logger log = LoggerFactory.getLogger(MoexServiceImpl.class);

    private final UrlService urlService;
    private final Marshaller marshaller;

    public MoexServiceImpl(UrlService urlService, JsonMarshaller marshaller) {
        this.urlService = urlService;
        this.marshaller = marshaller;
    }

    @Override
    public Securities getIndexDaily() {
        try {
            URL url = UriComponentsBuilder.fromHttpUrl(MOEX_INDEX + JSON)
                    .build()
                    .toUri()
                    .toURL();
            return marshaller.unmarshal(urlService.readUrl(url), Securities.class);
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            return null;
        }
    }
}
