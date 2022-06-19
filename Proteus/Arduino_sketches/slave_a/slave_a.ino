#include <LiquidCrystal.h>

#define EN_PIN 20
#define BUZZER_PIN 3
#define ID 1
#define TRANSMIT HIGH
#define RECEIVE LOW
#define DDR_KEYPAD  DDRA
#define PORT_KEYPAD PORTA
#define PIN_KEYPAD  PINA
#include "keypad4x4.h"

const int rs = 2, rw = 6, en = 7;
LiquidCrystal lcd(rs, rw, en, 49, 48, 47, 46, 45, 44, 43, 42);

char sensorTriggered[11];
int sensorID;
bool triggered = false, isMotionOn = false, isDoorOn = false, isSmokeOn = false, isVibrationOn = false, isGlassOn = false, stateChanged = false;

void sendToUI(int packageType) {
  int sender = ID;
  char dataPackage[30];

  delay(10);
  digitalWrite(EN_PIN, TRANSMIT);
  delay(10);

  sprintf(dataPackage, "%d)%d.%d.%s?", packageType, sender, sensorID, sensorTriggered);
  Serial1.print(dataPackage);
  delay(30);

  digitalWrite(EN_PIN, RECEIVE);
}

void sensorState(char state[], char sensor[]){
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.write(sensor);
  lcd.write(" sensor");
  lcd.setCursor(0, 1);
  lcd.write(state);
}

void setup(void) {
  Serial1.begin(9600);
  lcd.begin(16, 2);
  initKeyPad();
  pinMode(EN_PIN, OUTPUT);
  digitalWrite(EN_PIN, RECEIVE);
  pinMode(BUZZER_PIN, OUTPUT);
  digitalWrite(BUZZER_PIN, LOW);
  DDRB = 0b11100000;
  PORTB = 0b00011111;
}

void loop() {
  static byte pinButtons = PINB;

  if (PINB == 0b00011111) {

    if (pinButtons == 0b00011110) {
      sprintf(sensorTriggered, "%s", "Motion");
      sensorID = 0;
      if(isMotionOn)
        triggered = true;
    }
    else if (pinButtons == 0b00011101) {
      sprintf(sensorTriggered, "%s", "Door");
      sensorID = 1;
      if(isDoorOn)
        triggered = true;
    }
    else if (pinButtons == 0b00011011) {      
      sprintf(sensorTriggered, "%s", "Smoke");
      sensorID = 2;
      if(isSmokeOn)
        triggered = true;
    } 
    else if (pinButtons == 0b00010111) {
      sprintf(sensorTriggered, "%s", "Vibration");
      sensorID = 3;
      if(isVibrationOn)
        triggered = true;
    }
    else if (pinButtons == 0b00001111) {
      sprintf(sensorTriggered, "%s", "Glass break");
      sensorID = 4;
      if(isGlassOn)
        triggered = true;
    }
  }
  pinButtons = PINB;

  if(triggered){
    digitalWrite(BUZZER_PIN, HIGH);
    sendToUI(1);
    triggered = false;
  } 

  if ( isButtonPressed() ) {
    char key = readKeyFromPad4x4();
    if (key == '1') {
      if(!isMotionOn){
        sensorState("on", "Motion");
        sprintf(sensorTriggered, "%s", "yes");
        sensorID = 0;
      } else {
        sensorState("off", "Motion");
        sprintf(sensorTriggered, "%s", "no");
        sensorID = 0;
      }
      isMotionOn = !isMotionOn;
      stateChanged = true;
    }
    else if (key == '2') {
      if(!isDoorOn){
        sensorState("on", "Door");
        sprintf(sensorTriggered, "%s", "yes");
        sensorID = 1;
      } else {
        sensorState("off", "Door");
        sprintf(sensorTriggered, "%s", "no");
        sensorID = 1;
      }
      isDoorOn = !isDoorOn;
      stateChanged = true;
    }
    else if (key == '3') {
      if(!isSmokeOn){
        sensorState("on", "Smoke");
        sprintf(sensorTriggered, "%s", "yes");
        sensorID = 2;
      } else {
        sensorState("off", "Smoke");
        sprintf(sensorTriggered, "%s", "no");
        sensorID = 2;
      }
      isSmokeOn = !isSmokeOn;
      stateChanged = true;
    }
    else if (key == '4') {
      if(!isVibrationOn){
        sensorState("on", "Vibration");
        sprintf(sensorTriggered, "%s", "yes");
        sensorID = 3;
      } else {
        sensorState("off", "Vibration");
        sprintf(sensorTriggered, "%s", "no");
        sensorID = 3;
      }
      isVibrationOn = !isVibrationOn;
      stateChanged = true;
    }
    else if (key == '5') {
      if(!isGlassOn){
        sensorState("on", "Glass");
        sprintf(sensorTriggered, "%s", "yes");
        sensorID = 4;
      } else {
        sensorState("off", "Glass");
        sprintf(sensorTriggered, "%s", "no");
        sensorID = 4;
      }
      isGlassOn = !isGlassOn;
      stateChanged = true;
    }
    else if (key == '0') {
      lcd.clear();
    }
    else if (key == 'F') {
      digitalWrite(BUZZER_PIN, LOW);
    }
  }
  if(stateChanged){
    sendToUI(2);
    stateChanged = false;
  }
}
