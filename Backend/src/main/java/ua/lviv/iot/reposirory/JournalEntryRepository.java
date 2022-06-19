package ua.lviv.iot.reposirory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ua.lviv.iot.entity.JournalEntry;

@Repository
public interface JournalEntryRepository extends JpaRepository<JournalEntry, Integer> {
}
