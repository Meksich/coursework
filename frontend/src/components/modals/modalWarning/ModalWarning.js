import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalClose, ModalContent, ModalHeader } from './ModalWarning.styles';
import ModalContext from '../../../contexts/ModalContext';
import { useContext } from 'react';
import { updateNewEntry } from '../../../api/Api';

const ModalWarning = ({id, roomId, sensorTriggered, entryTime, isHandled}) => {
    const { setShowModalWarning } = useContext(ModalContext);

    const onModalCloseClick = () => {
        setShowModalWarning(false);
    }
    const onYesClick = () => {
        updateNewEntry(id);
        setShowModalWarning(false);
        window.location.reload();
    }
    return (
        <Modal>
            <ModalContent>
                <ModalHeader>
                    <h3 className="display-1 fs-3 fw-normal text-dark text-center my-3">Is distress handled?</h3>
                    <ModalClose onClick={onModalCloseClick}>&times;</ModalClose>
                </ModalHeader>
                <ModalBody>
                        <button onClick={onYesClick} className="mx-3">
                        Yes
                        </button>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ModalWarning;