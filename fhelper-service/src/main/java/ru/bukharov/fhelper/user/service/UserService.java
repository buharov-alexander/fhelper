package ru.bukharov.fhelper.user.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import ru.bukharov.fhelper.user.domain.UserEntity;

public interface UserService extends UserDetailsService {
    UserEntity getCurrentLoggedInUser();

    UserEntity createUser(UserEntity userEntity);
}
