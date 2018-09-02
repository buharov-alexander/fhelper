package ru.bukharov.fhelper.user.dao;

import org.springframework.data.repository.CrudRepository;
import ru.bukharov.fhelper.user.domain.UserEntity;

public interface UserDAO extends CrudRepository<UserEntity, Long> {

    UserEntity findByUsername(String username);
}