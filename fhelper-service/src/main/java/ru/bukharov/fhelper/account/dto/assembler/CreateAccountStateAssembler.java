package ru.bukharov.fhelper.account.dto.assembler;

import ru.bukharov.fhelper.account.domain.AccountStateEntity;
import ru.bukharov.fhelper.account.dto.CreateAccountStateDTO;
import ru.bukharov.fhelper.common.rest.dto.DtoAssembler;

public class CreateAccountStateAssembler extends DtoAssembler<AccountStateEntity, CreateAccountStateDTO> {

    @Override
    public CreateAccountStateDTO convertToDto(AccountStateEntity accountStateEntity) {
        return CreateAccountStateDTO.builder()
                .date(accountStateEntity.getDate())
                .balance(accountStateEntity.getBalance())
                .build();
    }

    @Override
    public AccountStateEntity convertToEntity(CreateAccountStateDTO accountStateDTO) {
        return AccountStateEntity.builder()
                .date(accountStateDTO.getDate())
                .balance(accountStateDTO.getBalance())
                .build();
    }
}
