#include <LiquidCrystal.h>
#define EN_PIN 20
#define TRANSMIT HIGH
#define RECEIVE LOW
#define SLAVE_A_ID 1
#define SLAVE_B_ID 2

char symbol;
int i = 0;
char* serialBuffer;
int messageSender, packageType, sensorID;
bool isRecevied = false;
const int rs = 2, rw = 6, en = 7;
LiquidCrystal lcd(rs, rw, en, 49, 48, 47, 46, 45, 44, 43, 42);

void setup(void) {
  lcd.begin(16, 2);
  Serial1.begin(9600); //rs485
  Serial.begin(9600); //UI
  pinMode(EN_PIN, OUTPUT);
}

void loop() {
  int wordN = 0;
  i = 0;
  isRecevied = false;
  if (Serial1.available() ) {
    delay(2);
    serialBuffer = (char*)malloc(50 * sizeof(char));
    while (Serial1.available()) {
      
      delay(1);
      symbol = Serial1.read();
      if (symbol == ')') {
        serialBuffer[i++] = '\0';
        i = 0;
        sscanf(serialBuffer, "%d", &packageType);
        lcd.write(serialBuffer);
      } else if (symbol == '?') {
        serialBuffer[i++] = '\0';
        isRecevied = true;
      } else if (symbol == '.') {  
        serialBuffer[i++] = '\0';
        i = 0;
        if (wordN == 0){
          sscanf(serialBuffer, "%d", &messageSender);
          wordN++;
        } else {
          sscanf(serialBuffer, "%d", &sensorID);
          wordN--;
        }
      } else {
        serialBuffer[i++] = symbol;
      }
    }
  }
  if (isRecevied) {
    sendToUI(serialBuffer);
  }
  free(serialBuffer);
}
void sendToUI(char message[]) {
  char dataPackage[30];
  sprintf(dataPackage, "%d.%d.%d.%s?", packageType, messageSender, sensorID, message);
  Serial.print(dataPackage);
}
