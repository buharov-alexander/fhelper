package ru.bukharov.fhelper.account.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.bukharov.fhelper.account.domain.AccountEntity;
import ru.bukharov.fhelper.account.domain.AccountTypeEnum;
import ru.bukharov.fhelper.account.domain.ValutaEnum;

@Data
@Builder
@NoArgsConstructor(access = AccessLevel.PACKAGE)
@AllArgsConstructor(access = AccessLevel.PACKAGE)
public class AccountViewDTO {
    private Long id;
    private String name;
    private AccountTypeEnum type;
    private ValutaEnum valuta;
    private AccountStateViewDTO state;
}
