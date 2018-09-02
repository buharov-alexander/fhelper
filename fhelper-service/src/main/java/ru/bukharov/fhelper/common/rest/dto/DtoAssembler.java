package ru.bukharov.fhelper.common.rest.dto;

import java.util.List;
import java.util.stream.Collectors;

public abstract class DtoAssembler<A, B> {

    public List<B> convertToDtoList(List<A> input) {
        return input.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    public abstract B convertToDto(A a);

    public List<A> convertToEntityList(List<B> input) {
        return input.stream().map(this::convertToEntity).collect(Collectors.toList());
    }

    public abstract A convertToEntity(B a);
}