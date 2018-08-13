package ru.bukharov.fhelper.common.io;

import java.io.IOException;
import java.net.URL;

public interface UrlService {
    String readUrl(URL url) throws IOException;
}
