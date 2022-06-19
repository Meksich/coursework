package ua.lviv.iot.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RoomDTO {
    private Integer id;
    private String doorSensor;
    private String motionSensor;
    private String glassBreakSensor;
    private String smokeSensor;
    private String vibrationSensor;
}
