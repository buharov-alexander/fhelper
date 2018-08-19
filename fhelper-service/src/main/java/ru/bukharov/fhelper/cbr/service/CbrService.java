package ru.bukharov.fhelper.cbr.service;

import ru.bukharov.fhelper.cbr.dto.CbrDailyRates;
import ru.bukharov.fhelper.cbr.dto.CbrDynamicRates;

import java.util.Date;
import java.util.List;

public interface CbrService {
    CbrDailyRates getDailyRates(Date date);

    CbrDailyRates getDailyRates(Date date, List<String> valutaCodes);

    CbrDynamicRates getDynamicRates(String valutaCode, Date rangeFrom, Date rangeTo);
}
