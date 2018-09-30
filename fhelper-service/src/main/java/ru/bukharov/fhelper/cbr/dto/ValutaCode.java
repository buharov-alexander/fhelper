package ru.bukharov.fhelper.cbr.dto;

public enum ValutaCode {
    USD,
    EUR;

    public String getCode() {
        switch (this) {
            case USD:
                return "R01235";
            case EUR:
                return "R01239";
            default:
                return null;
        }
    }
}
