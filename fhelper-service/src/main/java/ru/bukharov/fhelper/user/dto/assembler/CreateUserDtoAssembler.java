package ru.bukharov.fhelper.user.dto.assembler;

import ru.bukharov.fhelper.common.rest.dto.DtoAssembler;
import ru.bukharov.fhelper.user.domain.UserEntity;
import ru.bukharov.fhelper.user.dto.CreateUserDTO;

public class CreateUserDtoAssembler extends DtoAssembler<UserEntity, CreateUserDTO> {

    @Override
    public CreateUserDTO convertToDto(UserEntity userEntity) {
        return CreateUserDTO.builder()
                .username(userEntity.getUsername())
                .password(userEntity.getPassword())
                .email(userEntity.getEmail())
                .build();
    }

    @Override
    public UserEntity convertToEntity(CreateUserDTO createUserDTO) {
        return UserEntity.builder()
                .username(createUserDTO.getUsername())
                .password(createUserDTO.getPassword())
                .email(createUserDTO.getEmail())
                .build();
    }
}
