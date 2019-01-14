package ru.bukharov.fhelper.user.service;

import javax.transaction.Transactional;
import java.util.Collections;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.bukharov.fhelper.user.dao.UserDAO;
import ru.bukharov.fhelper.user.domain.UserEntity;

@Service
public class UserServiceImpl implements UserService {

    private UserDAO userDAO;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserDAO userDAO, PasswordEncoder passwordEncoder) {
        this.userDAO = userDAO;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public String getCurrentLoggedInUsername() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth.getName();
    }

    @Override
    public UserEntity getCurrentLoggedInUser() {
        return userDAO.findByUsername(getCurrentLoggedInUsername());
    }

    @Override
    @Transactional
    public UserEntity createUser(UserEntity userEntity) {
        //TODO add validation

        userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
        userEntity.setEnabled(true);
        return userDAO.save(userEntity);
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userDAO.findByUsername(username);
        if (Objects.nonNull(user)) {
            return buildUser(user);
        }
        throw new UsernameNotFoundException("No user present with username: " + username);
    }

    // Converts our domain object to spring security objects
    private org.springframework.security.core.userdetails.User buildUser(UserEntity user) {
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                user.isEnabled(),
                true,
                true,
                true,
                Collections.emptyList());

    }
}
