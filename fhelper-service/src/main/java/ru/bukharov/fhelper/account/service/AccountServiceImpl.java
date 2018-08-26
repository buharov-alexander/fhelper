package ru.bukharov.fhelper.account.service;

import java.util.List;
import org.apache.commons.collections4.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.bukharov.fhelper.account.dao.AccountDao;
import ru.bukharov.fhelper.account.domain.AccountEntity;

@Service
public class AccountServiceImpl implements AccountService {

    private final AccountDao accountDao;

    @Autowired
    public AccountServiceImpl(AccountDao accountDao) {
        this.accountDao = accountDao;
    }

    @Override
    public List<AccountEntity> getAccounts() {
        return IteratorUtils.toList(accountDao.findAll().iterator());
    }

    @Override
    public AccountEntity createAccounts(AccountEntity accountEntity) {
        return accountDao.save(accountEntity);
    }

}
