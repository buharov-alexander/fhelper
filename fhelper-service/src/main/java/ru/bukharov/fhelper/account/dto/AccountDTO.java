package ru.bukharov.fhelper.account.dto;

import lombok.Builder;
import lombok.Data;
import ru.bukharov.fhelper.account.domain.AccountEntity;
import ru.bukharov.fhelper.account.domain.AccountTypeEnum;
import ru.bukharov.fhelper.account.domain.ValutaEnum;
import ru.bukharov.fhelper.common.rest.dto.DtoAssembler;

@Data
@Builder
public class AccountDTO {
    private Long id;
    private String name;
    private AccountTypeEnum type;
    private ValutaEnum valuta;
    private Double balance;

    public static class AccountDtoAssembler extends DtoAssembler<AccountEntity, AccountDTO> {

        @Override
        public AccountDTO convertToDto(AccountEntity accountEntity) {
            return new AccountDTOBuilder()
                    .id(accountEntity.getId())
                    .name(accountEntity.getName())
                    .type(accountEntity.getType())
                    .valuta(accountEntity.getValuta())
                    .build();
        }

        @Override
        public AccountEntity convertToEntity(AccountDTO accountDTO) {
            return AccountEntity.builder()
                    .id(accountDTO.getId())
                    .name(accountDTO.getName())
                    .type(accountDTO.getType())
                    .valuta(accountDTO.getValuta())
                    .build();
        }
    }
}
