package ru.bukharov.fhelper.account.service;

import javax.transaction.Transactional;
import javax.validation.ValidationException;
import java.util.List;
import java.util.Optional;
import org.apache.commons.collections4.IteratorUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.bukharov.fhelper.account.dao.AccountDao;
import ru.bukharov.fhelper.account.dao.AccountStateDao;
import ru.bukharov.fhelper.account.domain.AccountEntity;
import ru.bukharov.fhelper.account.domain.AccountStateEntity;
import ru.bukharov.fhelper.user.domain.UserEntity;
import ru.bukharov.fhelper.user.service.UserService;

@Service
public class AccountServiceImpl implements AccountService {

    private final AccountDao accountDao;
    private final AccountStateDao accountStateDao;
    private final UserService userService;

    @Autowired
    public AccountServiceImpl(AccountDao accountDao, AccountStateDao accountStateDao, UserService userService) {
        this.accountDao = accountDao;
        this.accountStateDao = accountStateDao;
        this.userService = userService;
    }

    @Override
    public List<AccountEntity> getAccounts() {
        return IteratorUtils.toList(accountDao.findAll().iterator());
    }

    @Override
    public AccountEntity getAccount(Long id) {
        Optional<AccountEntity> optional = accountDao.findById(id);
        if (!optional.isPresent()) {
            throw new ValidationException(String.format("Account %s is not found", id));
        }
        return optional.get();
    }

    @Override
    @Transactional
    public AccountEntity createAccounts(AccountEntity accountEntity) {
        //TODO add validation
        UserEntity currentLoggedInUser = userService.getCurrentLoggedInUser();
        accountEntity.setUserId(currentLoggedInUser.getId());
        return accountDao.save(accountEntity);
    }

    @Override
    public List<AccountStateEntity> getAccountStates(Long accountId) {
        // validate accountId
        getAccount(accountId);
        return accountStateDao.findByAccountId(accountId);
    }

}
