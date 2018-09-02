package ru.bukharov.fhelper.user.dto.assembler;

import ru.bukharov.fhelper.common.rest.dto.DtoAssembler;
import ru.bukharov.fhelper.user.domain.UserEntity;
import ru.bukharov.fhelper.user.dto.UserViewDTO;

public class UserViewDtoAssembler extends DtoAssembler<UserEntity, UserViewDTO> {

    @Override
    public UserViewDTO convertToDto(UserEntity userEntity) {
        return UserViewDTO.builder()
                .id(userEntity.getId())
                .username(userEntity.getUsername())
                .email(userEntity.getEmail())
                .build();
    }

    @Override
    public UserEntity convertToEntity(UserViewDTO userViewDTO) {
        return UserEntity.builder()
                .id(userViewDTO.getId())
                .username(userViewDTO.getUsername())
                .email(userViewDTO.getEmail())
                .build();
    }
}
