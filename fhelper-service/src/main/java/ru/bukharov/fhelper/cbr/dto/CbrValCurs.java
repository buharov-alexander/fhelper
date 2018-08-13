package ru.bukharov.fhelper.cbr.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class CbrValCurs {
    @JacksonXmlProperty(isAttribute = true)
    private String name;

    @JsonProperty("Date")
    @JacksonXmlProperty(isAttribute = true, localName = "Date")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
    private Date date;

    @JsonProperty("Valute")
    @JacksonXmlElementWrapper(useWrapping = false)
    private List<CbrValute> valutes;
}
