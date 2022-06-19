package ua.lviv.iot.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.lviv.iot.DTO.RoomDTO;
import ua.lviv.iot.mapper.RoomMapper;
import ua.lviv.iot.service.RoomService;

@RestController
@AllArgsConstructor
@RequestMapping(value = "/rooms")
@CrossOrigin
public class RoomController {
    private final RoomService roomService;
    private final RoomMapper roomMapper;

    @GetMapping(path = "/{id}")
    public ResponseEntity<RoomDTO> get(@PathVariable Integer id){
        return new ResponseEntity<>(roomMapper.map(roomService.get(id)), HttpStatus.OK);
    }
}
