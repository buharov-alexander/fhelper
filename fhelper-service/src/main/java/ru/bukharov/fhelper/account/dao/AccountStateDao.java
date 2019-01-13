package ru.bukharov.fhelper.account.dao;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import ru.bukharov.fhelper.account.domain.AccountEntity;
import ru.bukharov.fhelper.account.domain.AccountStateEntity;

public interface AccountStateDao extends CrudRepository<AccountStateEntity, Long> {

    List<AccountStateEntity> findByAccountId(Long accountId);
}
