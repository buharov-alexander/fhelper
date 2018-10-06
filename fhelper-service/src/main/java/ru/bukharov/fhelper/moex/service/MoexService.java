package ru.bukharov.fhelper.moex.service;

import ru.bukharov.fhelper.moex.dto.IndexEnum;
import ru.bukharov.fhelper.moex.dto.Securities;

public interface MoexService {
    Securities getIndexDaily(IndexEnum index);
}
