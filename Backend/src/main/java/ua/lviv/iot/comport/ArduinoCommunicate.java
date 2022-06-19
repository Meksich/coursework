package ua.lviv.iot.comport;

import com.fazecast.jSerialComm.SerialPort;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ArduinoCommunicate {
    public static SerialPort firstAvailableComPort;
    public ComPortListener listener;

    ArduinoCommunicate(){
        SerialPort[] allAvailableComPort = SerialPort.getCommPorts();
        for (SerialPort eachComPort:allAvailableComPort){
            System.out.println("List of all available serial ports: " + eachComPort.getDescriptivePortName());
        }
        firstAvailableComPort = allAvailableComPort[1];
        firstAvailableComPort.openPort();
        System.out.println("Opened the first available serial port: " + firstAvailableComPort.getDescriptivePortName());

        listener = new ComPortListener();
        firstAvailableComPort.addDataListener(listener);
    }
}
