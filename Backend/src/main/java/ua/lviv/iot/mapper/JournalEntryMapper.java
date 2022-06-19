package ua.lviv.iot.mapper;

import org.springframework.stereotype.Component;
import ua.lviv.iot.DTO.JournalEntryDTO;
import ua.lviv.iot.entity.JournalEntry;

@Component
public class JournalEntryMapper implements Mapper<JournalEntry, JournalEntryDTO> {
    @Override
    public JournalEntryDTO map(JournalEntry journalEntry) {
        JournalEntryDTO.JournalEntryDTOBuilder journalEntryDTOBuilder = JournalEntryDTO.builder();
        journalEntryDTOBuilder.id(journalEntry.getId());
        journalEntryDTOBuilder.sensorTriggered(journalEntry.getSensorTriggered());
        journalEntryDTOBuilder.isHandled(journalEntry.getIsHandled());
        journalEntryDTOBuilder.entryTime(journalEntry.getEntryTime());
        journalEntryDTOBuilder.roomId(journalEntry.getRoom().getId());
        return journalEntryDTOBuilder.build();
    }
}
