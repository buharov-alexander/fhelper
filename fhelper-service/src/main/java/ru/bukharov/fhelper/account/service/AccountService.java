package ru.bukharov.fhelper.account.service;

import java.util.List;
import ru.bukharov.fhelper.account.domain.AccountEntity;

public interface AccountService {
    List<AccountEntity> getAccounts();

    AccountEntity createAccounts(AccountEntity accountEntity);
}
