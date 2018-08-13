package ru.bukharov.fhelper.cbr.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.bukharov.fhelper.common.marshalling.FlexibleDoubleDeserializer;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class CbrValute {
    @JsonProperty("ID")
    @JacksonXmlProperty(isAttribute = true, localName = "ID")
    private String id;
    @JsonProperty("NumCode")
    private String numCode;
    @JsonProperty("CharCode")
    private String charCode;
    @JsonProperty("Name")
    private String name;
    @JsonProperty("Nominal")
    private Integer nominal;
    @JsonProperty("Value")
    @JsonDeserialize(using = FlexibleDoubleDeserializer.class, as = Double.class)
    private Double value;
}
