import 'bootstrap/dist/css/bootstrap.min.css';
import { EntryTime, ModalJournalEntryDiv, Room, Status, Triggered } from './ModalJournal.styles';
import ModalContext from '../../../contexts/ModalContext';
import { useContext } from 'react';
import ModalWarning from '../modalWarning/ModalWarning';

const ModalJournalEntry = ({id, roomId, sensorTriggered, entryTime, isHandled}) => {
    const { showModalWarning } = useContext(ModalContext);
    const { setShowModalWarning } = useContext(ModalContext);
    let colorHandled = isHandled==="no" ? "red" : "black";
    const onStatusClick = () => {
        if(isHandled === "no"){
            setShowModalWarning(!showModalWarning);
        }
    }
    return (
        <ModalJournalEntryDiv className="d-flex">
            <EntryTime style={{
                color: colorHandled
            }}>{entryTime}</EntryTime>
            <Room style={{
                color: colorHandled
            }}>{roomId===1 ? " Bedroom" : " Kitchen"}</Room>
            <Triggered style={{
                color: colorHandled
            }}>{sensorTriggered}</Triggered>
            <Status style={{
                color: colorHandled
            }}
            onClick={onStatusClick}>{isHandled}</Status>
            { showModalWarning ? <ModalWarning id={id} roomId={roomId} sensorTriggered={sensorTriggered}
                                               entryTime={entryTime} isHandled={isHandled}/> 
            : null }
        </ModalJournalEntryDiv>
    )
}

export default ModalJournalEntry;