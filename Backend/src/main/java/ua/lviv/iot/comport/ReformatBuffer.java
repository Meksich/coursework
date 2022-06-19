package ua.lviv.iot.comport;

public class ReformatBuffer {
    static char outofString = '?';
    static String tempString = "";

    public static String parseByteArray(byte[] readBuffer){
        String readBufferString = new String(readBuffer);
        tempString = tempString.concat(readBufferString);
        String outputString = "";
        if((tempString.indexOf(outofString)+1)>0){
            outputString = tempString.substring(0, tempString.indexOf(outofString)+1);
            tempString = tempString.substring(tempString.indexOf(outofString)+1);
        }
        return outputString;
    }
}
