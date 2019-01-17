package ru.bukharov.fhelper.account.service;

import java.util.List;
import ru.bukharov.fhelper.account.domain.AccountEntity;
import ru.bukharov.fhelper.account.domain.AccountStateEntity;
import ru.bukharov.fhelper.account.dto.CreateAccountStateDTO;

public interface AccountService {
    List<AccountEntity> getAccounts();

    AccountEntity getAccount(Long id);

    AccountEntity createAccount(AccountEntity accountEntity);

    List<AccountStateEntity> getAccountStates(Long accountId);

    AccountStateEntity createAccountStates(AccountStateEntity accountStateEntity);
}
