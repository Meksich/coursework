import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalClose, ModalContent, ModalHeader } from './ModalInfo.styles';
import ModalContext from '../../../contexts/ModalContext';
import { useContext } from 'react';

const ModalInfo = () => {
    const { setShowModalInfo } = useContext(ModalContext);
    const { text } = useContext(ModalContext);
    const onModalCloseClick = () => {
        setShowModalInfo(false);
    }
    return (
        <Modal>
            <ModalContent>
                <ModalHeader>
                    <h3 className="display-1 fs-3 fw-normal text-dark text-center my-3">Sensor info</h3>
                    <ModalClose onClick={onModalCloseClick}>&times;</ModalClose>
                </ModalHeader>
                <ModalBody>
                        <div className="mx-3">
                        {text}
                        </div>

                       
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ModalInfo;