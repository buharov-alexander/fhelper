package ru.bukharov.fhelper.common.marshalling;

import java.io.IOException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class JsonMarshaller implements Marshaller {

    private final Logger log = LoggerFactory.getLogger(JsonMarshaller.class);
    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    public <T> T unmarshal(String str, Class<T> clazz) throws IOException {
        try {
            return mapper.readValue(str, clazz);
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            throw e;
        }

    }
}
