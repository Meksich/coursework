package ua.lviv.iot;

import com.fazecast.jSerialComm.SerialPort;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import ua.lviv.iot.comport.ArduinoCommunicate;
import ua.lviv.iot.comport.ComPortListener;
import ua.lviv.iot.controller.JournalEntryController;
import ua.lviv.iot.mapper.JournalEntryMapper;
import ua.lviv.iot.service.JournalEntryService;
import ua.lviv.iot.service.RoomService;

@SpringBootApplication
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}
