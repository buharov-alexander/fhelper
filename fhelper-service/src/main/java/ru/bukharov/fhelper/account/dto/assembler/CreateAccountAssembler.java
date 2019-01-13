package ru.bukharov.fhelper.account.dto.assembler;

import ru.bukharov.fhelper.account.domain.AccountEntity;
import ru.bukharov.fhelper.account.dto.CreateAccountDTO;
import ru.bukharov.fhelper.common.rest.dto.DtoAssembler;

public class CreateAccountAssembler extends DtoAssembler<AccountEntity, CreateAccountDTO> {

    @Override
    public CreateAccountDTO convertToDto(AccountEntity accountEntity) {
        return CreateAccountDTO.builder()
                .name(accountEntity.getName())
                .type(accountEntity.getType())
                .valuta(accountEntity.getValuta())
                .build();
    }

    @Override
    public AccountEntity convertToEntity(CreateAccountDTO accountDTO) {
        return AccountEntity.builder()
                .name(accountDTO.getName())
                .type(accountDTO.getType())
                .valuta(accountDTO.getValuta())
                .build();
    }
}
