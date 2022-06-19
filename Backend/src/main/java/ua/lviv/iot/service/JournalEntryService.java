package ua.lviv.iot.service;

import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import ua.lviv.iot.entity.JournalEntry;
import ua.lviv.iot.reposirory.JournalEntryRepository;

@Service
@AllArgsConstructor
public class JournalEntryService extends ua.lviv.iot.service.Service<JournalEntry>{
    private JournalEntryRepository journalEntryRepository;

    @Override
    public JpaRepository<JournalEntry, Integer> getRepository(){
        return journalEntryRepository;
    }
}
