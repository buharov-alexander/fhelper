package ru.bukharov.fhelper.user.service;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.bukharov.fhelper.user.dao.UserDAO;
import ru.bukharov.fhelper.user.domain.UserEntity;

@Service
public class UserServiceImpl implements UserService {

    private UserDAO userDAO;

    @Autowired
    public UserServiceImpl(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    @Override
    public UserEntity getCurrentLoggedInUser() {
        return userDAO.findAll().iterator().next();
    }

    @Override
    @Transactional
    public UserEntity createUser(UserEntity userEntity) {
        //TODO add validation
        userEntity.setEnabled(true);
        return userDAO.save(userEntity);
    }
}
