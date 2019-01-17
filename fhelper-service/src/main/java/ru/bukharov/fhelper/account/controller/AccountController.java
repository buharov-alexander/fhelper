package ru.bukharov.fhelper.account.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.bukharov.fhelper.account.domain.AccountEntity;
import ru.bukharov.fhelper.account.domain.AccountStateEntity;
import ru.bukharov.fhelper.account.dto.AccountStateViewDTO;
import ru.bukharov.fhelper.account.dto.AccountViewDTO;
import ru.bukharov.fhelper.account.dto.CreateAccountDTO;
import ru.bukharov.fhelper.account.dto.CreateAccountStateDTO;
import ru.bukharov.fhelper.account.dto.assembler.AccountStateViewAssembler;
import ru.bukharov.fhelper.account.dto.assembler.AccountViewAssembler;
import ru.bukharov.fhelper.account.dto.assembler.CreateAccountAssembler;
import ru.bukharov.fhelper.account.dto.assembler.CreateAccountStateAssembler;
import ru.bukharov.fhelper.account.service.AccountService;

@RestController
@RequestMapping("/account")
public class AccountController {

    private final AccountService accountService;
    private final AccountViewAssembler accountViewAssembler;
    private final CreateAccountAssembler createAccountAssembler;
    private final AccountStateViewAssembler accountStateViewAssembler;
    private final CreateAccountStateAssembler createAccountStateAssembler;

    @Autowired
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
        this.accountViewAssembler = new AccountViewAssembler();
        this.createAccountAssembler = new CreateAccountAssembler();
        this.accountStateViewAssembler = new AccountStateViewAssembler();
        this.createAccountStateAssembler = new CreateAccountStateAssembler();
    }

    @GetMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<AccountViewDTO> getAccounts() {
        List<AccountEntity> accountEntities = accountService.getAccounts();
        return accountViewAssembler.convertToDtoList(accountEntities);
    }

    @GetMapping(path = "/{id}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public AccountViewDTO getAccount(@PathVariable Long id) {
        AccountEntity accountEntity = accountService.getAccount(id);
        return accountViewAssembler.convertToDto(accountEntity);
    }

    @PostMapping(produces = {MediaType.APPLICATION_JSON_VALUE})
    public AccountViewDTO createAccount(CreateAccountDTO accountDTO) {
        //TODO add validation
        AccountEntity accountEntity = createAccountAssembler.convertToEntity(accountDTO);
        accountEntity = accountService.createAccount(accountEntity);
        return accountViewAssembler.convertToDto(accountEntity);
    }

    @GetMapping(path = "/{id}/states", produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<AccountStateViewDTO> getAccountStates(@PathVariable Long id) {
        List<AccountStateEntity> accountStateEntities = accountService.getAccountStates(id);
        return accountStateViewAssembler.convertToDtoList(accountStateEntities);
    }

    @PostMapping(path = "/{id}/states", produces = {MediaType.APPLICATION_JSON_VALUE})
    public AccountStateViewDTO createAccountStates(@PathVariable Long id, @RequestBody CreateAccountStateDTO accountStateDTO) {
        //TODO add validation
        AccountStateEntity accountStateEntity = createAccountStateAssembler.convertToEntity(accountStateDTO);
        accountStateEntity.setAccountId(id);

        accountStateEntity = accountService.createAccountStates(accountStateEntity);
        return accountStateViewAssembler.convertToDto(accountStateEntity);
    }

}
