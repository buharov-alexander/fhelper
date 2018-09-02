package ru.bukharov.fhelper.user.service;

import ru.bukharov.fhelper.user.domain.UserEntity;

public interface UserService {
    UserEntity getCurrentLoggedInUser();

    UserEntity createUser(UserEntity userEntity);
}
