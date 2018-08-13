package ru.bukharov.fhelper.cbr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.bukharov.fhelper.cbr.dto.CbrValCurs;
import ru.bukharov.fhelper.cbr.service.CbrService;

@RestController
@RequestMapping("/cbr")
public class CbrController {

    @Autowired
    private CbrService cbrService;

    @GetMapping(path = "/rates/daily", produces = {MediaType.TEXT_XML_VALUE})
    public CbrValCurs getDailyRates() {
        return cbrService.getDailyRates();
    }

}
