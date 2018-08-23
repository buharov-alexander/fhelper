package ru.bukharov.fhelper.cbr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.bukharov.fhelper.cbr.dto.CbrDailyRates;
import ru.bukharov.fhelper.cbr.dto.CbrDynamicRates;
import ru.bukharov.fhelper.cbr.service.CbrService;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/cbr")
public class CbrController {

    private static final String DATE_FORMAT = "dd.MM.yyyy";
    @Autowired
    private CbrService cbrService;

    @GetMapping(path = "/rates/daily", produces = {MediaType.APPLICATION_JSON_VALUE})
    public CbrDailyRates getDailyRates(@DateTimeFormat(pattern = DATE_FORMAT)
                                       @RequestParam(name = "date", required = false) Date date,
                                       @RequestParam(name = "valutaCodes", required = false) List<String> valutaCodes) {
        return cbrService.getDailyRates(date, valutaCodes);
    }

    @GetMapping(path = "/rates/dynamic", produces = {MediaType.APPLICATION_JSON_VALUE})
    public CbrDynamicRates getDynamicRates(@DateTimeFormat(pattern = DATE_FORMAT) @RequestParam("rangeFrom") Date rangeFrom,
                                           @DateTimeFormat(pattern = DATE_FORMAT) @RequestParam("rangeTo") Date rangeTo,
                                           @RequestParam("valutaCode") String valutaCode) {
        return cbrService.getDynamicRates(valutaCode, rangeFrom, rangeTo);
    }
}
