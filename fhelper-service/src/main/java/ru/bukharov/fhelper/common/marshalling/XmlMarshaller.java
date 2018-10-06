package ru.bukharov.fhelper.common.marshalling;

import java.io.IOException;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class XmlMarshaller implements Marshaller {

    private final Logger log = LoggerFactory.getLogger(XmlMarshaller.class);

    @Override
    public <T> T unmarshal(String xml, Class<T> clazz) throws IOException {
        try {
            XmlMapper xmlMapper = new XmlMapper();
            return xmlMapper.readValue(xml, clazz);
        } catch (IOException e) {
            log.error(e.getMessage(), e);
            throw e;
        }
    }
}
