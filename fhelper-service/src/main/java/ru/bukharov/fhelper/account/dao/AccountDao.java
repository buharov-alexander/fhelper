package ru.bukharov.fhelper.account.dao;

import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import ru.bukharov.fhelper.account.domain.AccountEntity;

public interface AccountDao extends CrudRepository<AccountEntity, Long> {

    @Override
    @Query("select account from AccountEntity account where account.id = ?1 and account.owner = ?#{principal.username}")
    Optional<AccountEntity> findById(Long id);

    @Override
    @Query("select account from AccountEntity account where account.owner = ?#{principal.username}")
    Iterable<AccountEntity> findAll();
}
