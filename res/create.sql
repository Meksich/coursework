CREATE database if not exists coursework;
use coursework;

DROP table if exists journal_entries;
DROP table if exists room;

CREATE table room (
	id INT NOT NULL AUTO_INCREMENT,
    door_sensor VARCHAR(45) NOT NULL,
    motion_sensor VARCHAR(45) NOT NULL,
    glass_break_sensor VARCHAR(45) NOT NULL,
    smoke_sensor VARCHAR(45) NOT NULL,
    vibration_sensor VARCHAR(45) NOT NULL,
    constraint pk_room primary key(id)
);

CREATE table journal_entries (
	id INT NOT NULL AUTO_INCREMENT,
    room_id INT NOT NULL,
    sensor_triggered VARCHAR(45) NOT NULL,
    is_handled VARCHAR(45) NOT NULL,
    entry_time TIME NOT NULL,
    constraint pk_journal_entries primary key(id),
    INDEX `fk_journal_entries_room_idx` (room_id ASC) VISIBLE,
     CONSTRAINT `fk_journal_entries_room`
    FOREIGN KEY (room_id)
    REFERENCES room (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);