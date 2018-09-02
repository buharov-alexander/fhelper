package ru.bukharov.fhelper.cbr.service;

import java.util.Date;
import java.util.List;
import ru.bukharov.fhelper.cbr.dto.CbrDailyRates;
import ru.bukharov.fhelper.cbr.dto.CbrDynamicRates;

public interface CbrService {
    CbrDailyRates getDailyRates(Date date);

    CbrDailyRates getDailyRates(Date date, List<String> valutaCodes);

    CbrDynamicRates getDynamicRates(String valutaCode, Date rangeFrom, Date rangeTo);
}
