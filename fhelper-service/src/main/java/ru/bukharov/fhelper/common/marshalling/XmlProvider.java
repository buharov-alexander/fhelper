package ru.bukharov.fhelper.common.marshalling;

import java.io.IOException;

public interface XmlProvider {
    <T> T unmarshal(String xml, Class<T> clazz) throws IOException;
}
