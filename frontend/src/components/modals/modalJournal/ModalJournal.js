import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalClose, ModalContent, ModalHeader, Room, EntryTime, Triggered, Status } from './ModalJournal.styles';
import ModalContext from '../../../contexts/ModalContext';
import { useContext, useState, useEffect } from 'react';
import { getJournal } from '../../../api/Api';
import ModalJournalEntry from './ModalJournalEntry';

const ModalJournal = () => {
    const { setShowModalJournal } = useContext(ModalContext);
    const {load} = useState(0);
    const [ data, setData ] = useState();
    const [ isLoaded, setIsLoaded ] = useState(false);
    useEffect(() => {
        getJournal().then(res => {
            setData(res);
            setIsLoaded(true);
        });
    }, [load]);

    const onModalCloseClick = () => {
        setShowModalJournal(false);
    }
    return (
        <Modal>
            <ModalContent>
                <ModalHeader>
                    <h3 className="display-1 fs-3 fw-normal text-dark text-center my-3">Journal</h3>
                    <ModalClose onClick={onModalCloseClick}>&times;</ModalClose>
                </ModalHeader>
                <ModalBody>
                        <div className="mx-3">
                            <div className="d-flex">
                                <EntryTime>Entry time</EntryTime>
                                <Room>Room</Room>
                                <Triggered>Triggered sensor</Triggered>
                                <Status>Status (if handled - "yes")</Status>
                            </div>
                        {isLoaded ? data.map(({id, roomId, sensorTriggered, entryTime, isHandled}) => (
                        <ModalJournalEntry
                            id={id}
                            roomId={roomId}
                            sensorTriggered={sensorTriggered}
                            entryTime={entryTime}
                            isHandled={isHandled}
                        />)) : null}
                        </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ModalJournal;