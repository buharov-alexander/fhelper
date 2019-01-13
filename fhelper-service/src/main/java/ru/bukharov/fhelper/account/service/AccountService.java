package ru.bukharov.fhelper.account.service;

import java.util.List;
import ru.bukharov.fhelper.account.domain.AccountEntity;
import ru.bukharov.fhelper.account.domain.AccountStateEntity;

public interface AccountService {
    List<AccountEntity> getAccounts();

    AccountEntity getAccount(Long id);

    AccountEntity createAccounts(AccountEntity accountEntity);

    List<AccountStateEntity> getAccountStates(Long accountId);
}
