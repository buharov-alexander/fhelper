package ru.bukharov.fhelper.common.marshalling;

import java.io.IOException;

public interface Marshaller {
    <T> T unmarshal(String str, Class<T> clazz) throws IOException;
}
