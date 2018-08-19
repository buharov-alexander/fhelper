package ru.bukharov.fhelper.cbr.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class CbrDynamicRates {
    @JacksonXmlProperty(isAttribute = true, localName = "ID")
    private String id;

    @JacksonXmlProperty(isAttribute = true)
    private String name;

    @JacksonXmlProperty(isAttribute = true, localName = "DateRange1")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
    private Date rangeFrom;
    @JacksonXmlProperty(isAttribute = true, localName = "DateRange2")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd.MM.yyyy")
    private Date rangeTo;

    @JacksonXmlProperty(localName = "Record")
    @JacksonXmlElementWrapper(useWrapping = false)
    private List<CbrDynamicRate> rates;
}
