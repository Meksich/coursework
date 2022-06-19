package ua.lviv.iot.reposirory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ua.lviv.iot.entity.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {
}
