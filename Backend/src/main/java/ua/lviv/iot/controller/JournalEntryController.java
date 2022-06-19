package ua.lviv.iot.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.lviv.iot.DTO.JournalEntryDTO;
import ua.lviv.iot.comport.ArduinoCommunicate;
import ua.lviv.iot.entity.JournalEntry;
import ua.lviv.iot.entity.Room;
import ua.lviv.iot.mapper.JournalEntryMapper;
import ua.lviv.iot.service.JournalEntryService;
import ua.lviv.iot.service.RoomService;

import java.sql.Time;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping(value = "/journal_entries")
@AllArgsConstructor
public class JournalEntryController {
    private final JournalEntryService journalEntryService;
    private final RoomService roomService;
    private final JournalEntryMapper journalEntryMapper;
    private final ArduinoCommunicate arduinoCommunicate;

    @GetMapping
    public ResponseEntity<List<JournalEntryDTO>> getAll(){
        List<JournalEntryDTO> dtoList = journalEntryService.getAll().stream()
                .map(journalEntryMapper::map).collect(Collectors.toList());
        return new ResponseEntity<>(dtoList, HttpStatus.OK);
    }

    private int handleComPortInput(List<String> stringList) {
        if (stringList.get(0).equals("1")){
            JournalEntry journalEntry = new JournalEntry();
            journalEntry.setEntryTime(Time.valueOf(LocalTime.now()));
            journalEntry.setIsHandled("no");
            int roomID = stringList.get(1).equals("1")? 1 : 2;
            journalEntry.setRoom(roomService.get(roomID));
            journalEntry.setSensorTriggered(stringList.get(3));
            return journalEntryService.create(journalEntry).getId();

        } else {
            Room room = roomService.get(Integer.parseInt(stringList.get(1)));
            switch (stringList.get(2)){
                case "0":
                    room.setMotionSensor(stringList.get(3));
                    break;
                case "1":
                    room.setDoorSensor(stringList.get(3));
                    break;
                case "2":
                    room.setSmokeSensor(stringList.get(3));
                    break;
                case "3":
                    room.setVibrationSensor(stringList.get(3));
                    break;
                case "4":
                    room.setGlassBreakSensor(stringList.get(3));
                    break;
            }
            roomService.update(room.getId(), room);
            return -1;

        }
    }

    @GetMapping(path = "/new")
    public ResponseEntity<JournalEntryDTO> get(){
        if (arduinoCommunicate.listener.isReceived) {
            List<String> stringList = arduinoCommunicate.listener.parseData(arduinoCommunicate.listener.comPortData);
            int id = handleComPortInput(stringList);
            arduinoCommunicate.listener.isReceived = false;
            return id == -1 ? new ResponseEntity<JournalEntryDTO>(HttpStatus.OK) : new ResponseEntity<>(journalEntryMapper.map(journalEntryService.get(id)), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<JournalEntryDTO> update(@PathVariable Integer id){
        JournalEntry journalEntry = journalEntryService.get(id);
        journalEntry.setIsHandled("yes");
        return new ResponseEntity<>(journalEntryMapper.map(journalEntryService.update(id, journalEntry)), HttpStatus.OK);
    }
}
