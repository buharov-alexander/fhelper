package ru.bukharov.fhelper.moex.dto;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

    public Map<String, Object> toMap() {
        List<Object> values = this.data.get(0);
        if (columns.size() != values.size()) {
            throw new UnsupportedOperationException("Cannot transform MarketData to map");
        }

        Map<String, Object> map = new HashMap<>();
        for (int i = 0; i < columns.size(); i++) {
            map.put(columns.get(i), values.get(i));
        }

        return map;
    }

    public static DateFormat getDataFormat() {
        return dataformat;
    }
}
