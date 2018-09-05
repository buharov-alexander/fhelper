package ru.bukharov.fhelper.account.service;

import javax.transaction.Transactional;
import java.util.List;
import org.apache.commons.collections4.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.bukharov.fhelper.account.dao.AccountDao;
import ru.bukharov.fhelper.account.domain.AccountEntity;
import ru.bukharov.fhelper.user.domain.UserEntity;
import ru.bukharov.fhelper.user.service.UserService;

@Service
public class AccountServiceImpl implements AccountService {

    private final AccountDao accountDao;
    private final UserService userService;

    @Autowired
    public AccountServiceImpl(AccountDao accountDao, UserService userService) {
        this.accountDao = accountDao;
        this.userService = userService;
    }

    @Override
    public List<AccountEntity> getAccounts() {
        return IteratorUtils.toList(accountDao.findAll().iterator());
    }

    @Override
    @Transactional
    public AccountEntity createAccounts(AccountEntity accountEntity) {
        //TODO add validation
        UserEntity currentLoggedInUser = userService.getCurrentLoggedInUser();
        accountEntity.setUserId(currentLoggedInUser.getId());
        return accountDao.save(accountEntity);
    }

}
