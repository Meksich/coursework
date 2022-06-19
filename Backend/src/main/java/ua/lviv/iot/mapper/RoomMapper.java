package ua.lviv.iot.mapper;

import org.springframework.stereotype.Component;
import ua.lviv.iot.DTO.RoomDTO;
import ua.lviv.iot.entity.Room;

@Component
public class RoomMapper implements Mapper<Room, RoomDTO>{
    @Override
    public RoomDTO map(Room room) {
        RoomDTO.RoomDTOBuilder roomDTOBuilder = RoomDTO.builder();
        roomDTOBuilder.id(room.getId());
        roomDTOBuilder.doorSensor(room.getDoorSensor());
        roomDTOBuilder.glassBreakSensor(room.getGlassBreakSensor());
        roomDTOBuilder.motionSensor(room.getMotionSensor());
        roomDTOBuilder.smokeSensor(room.getSmokeSensor());
        roomDTOBuilder.vibrationSensor(room.getVibrationSensor());
        return roomDTOBuilder.build();
    }
}
