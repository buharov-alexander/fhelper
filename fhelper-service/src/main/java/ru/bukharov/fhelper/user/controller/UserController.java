package ru.bukharov.fhelper.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.bukharov.fhelper.user.domain.UserEntity;
import ru.bukharov.fhelper.user.dto.CreateUserDTO;
import ru.bukharov.fhelper.user.dto.UserViewDTO;
import ru.bukharov.fhelper.user.dto.assembler.CreateUserDtoAssembler;
import ru.bukharov.fhelper.user.dto.assembler.UserViewDtoAssembler;
import ru.bukharov.fhelper.user.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;
    private final UserViewDtoAssembler userViewDtoAssembler;
    private final CreateUserDtoAssembler createUserDtoAssembler;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
        this.userViewDtoAssembler = new UserViewDtoAssembler();
        this.createUserDtoAssembler = new CreateUserDtoAssembler();
    }

    @GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    public String getCurrentLoggedInUsername() {
        return userService.getCurrentLoggedInUser().getUsername();
    }

    @PostMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    public UserViewDTO createUser(CreateUserDTO userDTO) {
        UserEntity userEntity = userService.createUser(createUserDtoAssembler.convertToEntity(userDTO));
        return userViewDtoAssembler.convertToDto(userEntity);
    }
}
