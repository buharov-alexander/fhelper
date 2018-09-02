package ru.bukharov.fhelper.cbr.dto;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.bukharov.fhelper.common.marshalling.FlexibleDoubleDeserializer;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class CbrDynamicRate {
    @JacksonXmlProperty(isAttribute = true, localName = "Id")
    private String id;

    @JacksonXmlProperty(isAttribute = true, localName = "Date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
    private Date date;

    @JacksonXmlProperty(localName = "Nominal")
    private Integer nominal;

    @JacksonXmlProperty(localName = "Value")
    @JsonDeserialize(using = FlexibleDoubleDeserializer.class, as = Double.class)
    private Double value;

}
