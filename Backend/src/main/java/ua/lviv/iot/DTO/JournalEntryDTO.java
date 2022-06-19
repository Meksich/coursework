package ua.lviv.iot.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.Time;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JournalEntryDTO {
    private Integer id;
    private String sensorTriggered;
    private String isHandled;
    private Time entryTime;
    private Integer roomId;
}
