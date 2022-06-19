package ua.lviv.iot.entity;

import lombok.*;

import javax.persistence.*;
import java.sql.Time;

@Entity
@Table(name="journal_entries")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = "id")
public class JournalEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column(name="sensor_triggered", nullable = false)
    private String sensorTriggered;

    @Column(name="is_handled", nullable = false)
    private String isHandled;

    @Column(name="entry_time", nullable = false)
    private Time entryTime;

    @ManyToOne
    @JoinColumn(name = "room_id", referencedColumnName = "id", nullable = false)
    private Room room;
}
