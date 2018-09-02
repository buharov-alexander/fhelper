package ru.bukharov.fhelper.common.io;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.URL;
import java.nio.charset.Charset;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class UrlServiceImpl implements UrlService {

    private final Logger log = LoggerFactory.getLogger(UrlServiceImpl.class);

    @Override
    public String readUrl(URL url) throws IOException {
        try (InputStream is = url.openStream()) {
            BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("windows-1251")));
            return readString(rd);
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            throw e;
        }
    }

    private String readString(Reader rd) throws IOException {
        StringBuilder sb = new StringBuilder();
        int cp;
        while ((cp = rd.read()) != -1) {
            sb.append((char) cp);
        }
        return sb.toString();
    }
}
