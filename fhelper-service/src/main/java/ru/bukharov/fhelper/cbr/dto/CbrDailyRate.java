package ru.bukharov.fhelper.cbr.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.bukharov.fhelper.common.marshalling.FlexibleDoubleDeserializer;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class CbrDailyRate {
    @JacksonXmlProperty(isAttribute = true, localName = "ID")
    private String id;

    @JacksonXmlProperty(localName = "NumCode")
    private String numCode;

    @JacksonXmlProperty(localName = "CharCode")
    private String charCode;

    @JacksonXmlProperty(localName = "Name")
    private String name;

    @JacksonXmlProperty(localName = "Nominal")
    private Integer nominal;

    @JacksonXmlProperty(localName = "Value")
    @JsonDeserialize(using = FlexibleDoubleDeserializer.class, as = Double.class)
    private Double value;
}
