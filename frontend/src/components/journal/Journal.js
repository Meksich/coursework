import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect } from 'react';
import ModalContext from '../../contexts/ModalContext';
import { JournalShow } from './Journal.styles';
import ModalJournal from '../modals/modalJournal/ModalJournal';
import { getNewEntry } from '../../api/Api';

const Journal = () => {
    const {showModalJournal, setShowModalJournal} = useContext(ModalContext);
    useEffect(() => {
        setInterval(callback, 1000);
    }, []);
    const onJournalShowClick = () => {
        setShowModalJournal(!showModalJournal);
    }
    const callback = () => {
        
        getNewEntry().then(res => {
            if(res.id){
                setShowModalJournal(!showModalJournal);
            }
        })
    }

    
    return (
        <div>
            <JournalShow className= "display-6 mx-3 mt-3" onClick={onJournalShowClick}>
                Open Journal
            </JournalShow>
            { showModalJournal ? <ModalJournal/> : null }
        </div>
    )
}

export default Journal;