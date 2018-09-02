package ru.bukharov.fhelper.account.dto.assembler;

import ru.bukharov.fhelper.account.domain.AccountEntity;
import ru.bukharov.fhelper.account.dto.AccountViewDTO;
import ru.bukharov.fhelper.common.rest.dto.DtoAssembler;

public class AccountViewDtoAssembler extends DtoAssembler<AccountEntity, AccountViewDTO> {

    @Override
    public AccountViewDTO convertToDto(AccountEntity accountEntity) {
        return AccountViewDTO.builder()
                .id(accountEntity.getId())
                .name(accountEntity.getName())
                .type(accountEntity.getType())
                .valuta(accountEntity.getValuta())
                .build();
    }

    @Override
    public AccountEntity convertToEntity(AccountViewDTO accountDTO) {
        return AccountEntity.builder()
                .id(accountDTO.getId())
                .name(accountDTO.getName())
                .type(accountDTO.getType())
                .valuta(accountDTO.getValuta())
                .build();
    }
}