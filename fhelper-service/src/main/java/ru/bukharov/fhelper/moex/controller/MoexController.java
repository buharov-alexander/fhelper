package ru.bukharov.fhelper.moex.controller;

import java.text.ParseException;
import java.util.List;
import java.util.stream.Collectors;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.bukharov.fhelper.moex.dto.IndexEnum;
import ru.bukharov.fhelper.moex.dto.IndexViewDTO;
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

    @GetMapping(path = "/index/daily", produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<IndexViewDTO> getIndexDaily(
            @RequestParam(name = "valutaCodes", required = false) List<IndexEnum> indexes) {
        try {
            Securities securities = moexService.getIndexDaily();
            List<String> indexesStr = indexes.stream().map(IndexEnum::toString).collect(Collectors.toList());

            return securities.getMarketdata().toIndexViewDtoList().stream()
                    .filter(indexViewDTO -> indexesStr.isEmpty() || indexesStr.contains(indexViewDTO.getName()))
                    .collect(Collectors.toList());
        } catch (ParseException e) {
            log.error(e.getMessage(), e);
            throw new InternalError(e.getMessage(), e);
        }
    }
}
