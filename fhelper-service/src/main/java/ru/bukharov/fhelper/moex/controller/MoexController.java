package ru.bukharov.fhelper.moex.controller;

import java.text.ParseException;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.bukharov.fhelper.moex.dto.IndexEnum;
import ru.bukharov.fhelper.moex.dto.IndexViewDTO;
import ru.bukharov.fhelper.moex.dto.MarketData;
import ru.bukharov.fhelper.moex.dto.Securities;
import ru.bukharov.fhelper.moex.service.MoexService;
import ru.bukharov.fhelper.moex.service.MoexServiceImpl;

@RestController
@RequestMapping("/moex")
public class MoexController {

    private final Logger log = LoggerFactory.getLogger(MoexServiceImpl.class);
    private final MoexService moexService;

    @Autowired
    public MoexController(MoexService moexService) {
        this.moexService = moexService;
    }

    @GetMapping(path = "/{index}/daily", produces = {MediaType.APPLICATION_JSON_VALUE})
    public IndexViewDTO getIndexDaily(@PathVariable IndexEnum index) {
        Securities securities = moexService.getIndexDaily(index);
        return createIndexViewDTO(securities);
    }

    private IndexViewDTO createIndexViewDTO(Securities securities) {
        try {
            Map<String, Object> marketDataMap = securities.getMarketdata().toMap();
            return IndexViewDTO.builder()
                    .name(marketDataMap.get(MarketData.NAME).toString())
                    .date(MarketData.getDataFormat().parse(marketDataMap.get(MarketData.DATE).toString()))
                    .value(Double.valueOf(marketDataMap.get(MarketData.VALUE).toString()))
                    .build();
        } catch (ParseException e) {
            log.error(e.getMessage(), e);
            throw new RuntimeException(e.getMessage(), e);
        }
    }
}
