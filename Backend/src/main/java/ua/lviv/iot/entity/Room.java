package ua.lviv.iot.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "room")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = "id")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "door_sensor", nullable = false)
    private String doorSensor;

    @Column(name = "motion_sensor", nullable = false)
    private String motionSensor;

    @Column(name = "glass_break_sensor", nullable = false)
    private String glassBreakSensor;

    @Column(name = "smoke_sensor", nullable = false)
    private String smokeSensor;

    @Column(name = "vibration_sensor", nullable = false)
    private String vibrationSensor;

    @OneToMany(mappedBy = "room", fetch = FetchType.LAZY)
    private Set<JournalEntry> journalEntries;
}
