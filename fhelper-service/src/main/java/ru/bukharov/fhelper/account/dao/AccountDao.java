package ru.bukharov.fhelper.account.dao;

import org.springframework.data.repository.CrudRepository;
import ru.bukharov.fhelper.account.domain.AccountEntity;

public interface AccountDao extends CrudRepository<AccountEntity, Long> {
}
