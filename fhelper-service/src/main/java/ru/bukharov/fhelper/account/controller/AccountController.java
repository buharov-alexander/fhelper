package ru.bukharov.fhelper.account.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.bukharov.fhelper.account.domain.AccountEntity;
import ru.bukharov.fhelper.account.dto.AccountViewDTO;
import ru.bukharov.fhelper.account.dto.CreateAccountDTO;
import ru.bukharov.fhelper.account.dto.assembler.AccountViewDtoAssembler;
import ru.bukharov.fhelper.account.dto.assembler.CreateAccountDtoAssembler;
import ru.bukharov.fhelper.account.service.AccountService;

@RestController
@RequestMapping("/account")
public class AccountController {

    private final AccountService accountService;
    private final AccountViewDtoAssembler accountViewDtoAssembler;
    private final CreateAccountDtoAssembler createAccountDtoAssembler;

    @Autowired
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
        this.accountViewDtoAssembler = new AccountViewDtoAssembler();
        this.createAccountDtoAssembler = new CreateAccountDtoAssembler();
    }

    @GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<AccountViewDTO> getAccounts() {
        List<AccountEntity> accountEntities = accountService.getAccounts();
        return accountViewDtoAssembler.convertToDtoList(accountEntities);
    }

    @PostMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    public AccountViewDTO createAccount(CreateAccountDTO accountDTO) {
        AccountEntity accountEntity = createAccountDtoAssembler.convertToEntity(accountDTO);
        accountEntity = accountService.createAccounts(accountEntity);
        return accountViewDtoAssembler.convertToDto(accountEntity);
    }
}
