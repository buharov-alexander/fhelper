package ru.bukharov.fhelper.cbr.service;

import java.util.Date;
import java.util.List;
import ru.bukharov.fhelper.cbr.dto.CbrDailyRates;
import ru.bukharov.fhelper.cbr.dto.CbrDynamicRates;
import ru.bukharov.fhelper.cbr.dto.ValutaCode;

public interface CbrService {
    CbrDailyRates getDailyRates(Date date);

    CbrDailyRates getDailyRates(Date date, List<ValutaCode> valutaCodes);

    CbrDynamicRates getDynamicRates(ValutaCode valutaCode, Date rangeFrom, Date rangeTo);
}
