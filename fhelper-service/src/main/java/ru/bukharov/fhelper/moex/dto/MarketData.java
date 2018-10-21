package ru.bukharov.fhelper.moex.dto;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class MarketData {
    public static final String NAME = "SECID";
    public static final String DATE = "TRADEDATE";
    public static final String VALUE = "LASTVALUE";
    private static final DateFormat dataformat = new SimpleDateFormat("yyyy-MM-dd");

    private List<String> columns;
    private List<List<Object>> data;

    public List<IndexViewDTO> toIndexViewDtoList() throws ParseException {
        int nameIndex = 0;
        int dateIndex = 0;
        int valueIndex = 0;

        for (int i = 0; i < columns.size(); i++) {
            switch (columns.get(i)) {
                case NAME:
                    nameIndex = i;
                    break;
                case DATE:
                    dateIndex = i;
                    break;
                case VALUE:
                    valueIndex = i;
                    break;
            }
        }

        List<IndexViewDTO> list = new ArrayList<>();
        for (List<Object> indexData : data) {
            list.add(IndexViewDTO.builder()
                .name(indexData.get(nameIndex).toString())
                .date(getDataFormat().parse(indexData.get(dateIndex).toString()))
                .value(Double.valueOf(indexData.get(valueIndex).toString()))
                .build());
        }
        return list;
    }

    public static DateFormat getDataFormat() {
        return dataformat;
    }
}
