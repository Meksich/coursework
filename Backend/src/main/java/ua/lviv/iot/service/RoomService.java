package ua.lviv.iot.service;

import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import ua.lviv.iot.entity.Room;
import ua.lviv.iot.reposirory.RoomRepository;

@Service
@AllArgsConstructor
public class RoomService extends ua.lviv.iot.service.Service<Room> {
    private RoomRepository roomRepository;

    @Override
    public JpaRepository<Room, Integer> getRepository() {
        return roomRepository;
    }
}
