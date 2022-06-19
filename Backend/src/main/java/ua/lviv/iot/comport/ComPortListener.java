package ua.lviv.iot.comport;

import com.fazecast.jSerialComm.SerialPort;
import com.fazecast.jSerialComm.SerialPortDataListener;
import com.fazecast.jSerialComm.SerialPortEvent;

import java.util.Arrays;
import java.util.List;

public class ComPortListener implements SerialPortDataListener {
    public String comPortData;
    public boolean isReceived;

    @Override
    public int getListeningEvents() {
        return SerialPort.LISTENING_EVENT_DATA_AVAILABLE;
    }

    @Override
    public void serialEvent(SerialPortEvent event) {
        byte[] buffer = new byte[event.getSerialPort().bytesAvailable()];
        event.getSerialPort().readBytes(buffer, buffer.length);
        comPortData = ReformatBuffer.parseByteArray(buffer);
        if (comPortData.contains("?")){
            isReceived = true;
            comPortData = comPortData.substring(0, comPortData.length()-1);
        }
    }

    public List<String> parseData (String toParse){
        return Arrays.asList(toParse.split("\\."));
    }
}
