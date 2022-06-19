import 'bootstrap/dist/css/bootstrap.min.css';
import { BedroomImageWraper } from './Bedroom.styles';
import bedroom from '../../res/bedroom.jpg';
import Image from 'react-bootstrap/Image';
import { Sensor } from './Bedroom.styles';
import { useContext, useEffect, useState } from 'react';
import ModalInfo from '../modals/modalInfo/ModalInfo';
import ModalContext from '../../contexts/ModalContext';
import { getRoom } from '../../api/Api';


const Bedroom = () => {
    const { showModalInfo } = useContext(ModalContext);
    const { setShowModalInfo } = useContext(ModalContext);
    const { setText } = useContext(ModalContext);
    const {load} = useState(0);
    const [ data, setData ] = useState({});
    useEffect(() => {
        getRoom(1).then(res => {
            setData(res);
        });
    }, [load]);
    
    const onMotionClick = () => {
        console.log(data.doorSensor);
        setText("Motion sensor is placed in front of the door. " +
        "It's main purpose is to detect movement in the room. While it's aimed on the door," + 
        " mainly it will detect movement when somebode came in.");
        setShowModalInfo(!showModalInfo);
    }

    const onDoorClick = () => {
        setText("Door opening sensor is a gerkon sensor placed in the top part of the door. " +
        "When the door is opened, magnet is disabled and sensor triggers. No one" + 
        " will open door unseen!");
        setShowModalInfo(!showModalInfo);
    }

    const onVibrationClick = () => {
        setText("Vibration sensor is attached directly to the glass. " +
        "When somebody make very loud sound or hit somethind, glass start vibrating. So, basicaly," + 
        " this sensor is not so effective against thieves, who usually try not to make any sound.");
        setShowModalInfo(!showModalInfo);
    }

    const onGlassClick = () => {
        setText("This sensor is placed near de window. " +
        "when. While it's aimed on the door," + 
        " mainly it will detect movement when somebode came in");
        setShowModalInfo(!showModalInfo);
    }

    const onSmokeClick = () => {
        setText("Motion sensor is placed in front of the door. " +
        "It triggers when glass surface is broken. This means not only dirrect hit into window," + 
        " but opening of it too. One of the most popular sensor, because of it's reliability.");
        setShowModalInfo(!showModalInfo);
    }

    return (
        <div>
            <Sensor style={
                {top: '38vh',
                left: '49.2vw',
                borderColor: data.smokeSensor==="no" ? 'yellow' : 'green'}} onClick={onSmokeClick}>
                <br/>Smoke
            </Sensor>
            <Sensor style={
                {top: '41.8vh',
                left: '38.3vw',
                borderColor: data.glassBreakSensor==="no" ? 'yellow' : 'green'}} onClick={onGlassClick}>
                <br/>Glass
            </Sensor>
            <Sensor style={
                {top: '45.9vh',
                left: '38.3vw',
                borderColor: data.vibrationSensor==="no" ? 'yellow' : 'green'}} onClick={onVibrationClick}>
                <br/>Vibration
            </Sensor>
            <Sensor style={
                {top: '64vh',
                left: '57.8vw',
                borderColor: data.doorSensor==="no" ? 'yellow' : 'green'
                }} onClick={onDoorClick}>
                <br/>Door
            </Sensor>
            <Sensor style={
                {top: '57vh',
                left: '49.2vw',
                borderColor: data.motionSensor==="no" ? 'yellow' : 'green'}} onClick={onMotionClick}>
                <br/>Motion
            </Sensor>
            { showModalInfo ? <ModalInfo/> : null }
            <BedroomImageWraper>
                <Image src={bedroom} />
            </BedroomImageWraper>
        </div>
    )
}

export default Bedroom;