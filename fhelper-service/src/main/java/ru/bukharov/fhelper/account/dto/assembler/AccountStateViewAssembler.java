package ru.bukharov.fhelper.account.dto.assembler;

import ru.bukharov.fhelper.account.domain.AccountStateEntity;
import ru.bukharov.fhelper.account.dto.AccountStateViewDTO;
import ru.bukharov.fhelper.common.rest.dto.DtoAssembler;

public class AccountStateViewAssembler extends DtoAssembler<AccountStateEntity, AccountStateViewDTO> {

    @Override
    public AccountStateViewDTO convertToDto(AccountStateEntity accountStateEntity) {
        return AccountStateViewDTO.builder()
                .id(accountStateEntity.getId())
                .date(accountStateEntity.getDate())
                .balance(accountStateEntity.getBalance())
                .build();
    }

    @Override
    public AccountStateEntity convertToEntity(AccountStateViewDTO accountStateViewDTO) {
        return AccountStateEntity.builder()
                .id(accountStateViewDTO.getId())
                .date(accountStateViewDTO.getDate())
                .balance(accountStateViewDTO.getBalance())
                .build();
    }
}