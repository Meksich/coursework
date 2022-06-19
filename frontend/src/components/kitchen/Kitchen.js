import 'bootstrap/dist/css/bootstrap.min.css';
import { KitchenImageWraper } from './Kitchen.styles';
import kitchen from '../../res/kitchen.jpg';
import Image from 'react-bootstrap/Image';
import ModalContext from '../../contexts/ModalContext';
import { useContext, useState, useEffect } from 'react';
import { Sensor } from './Kitchen.styles';
import ModalInfo from '../modals/modalInfo/ModalInfo';
import { getRoom } from '../../api/Api';

const Kitchen = () => {
    const { showModalInfo } = useContext(ModalContext);
    const { setShowModalInfo } = useContext(ModalContext);
    const { setText } = useContext(ModalContext);
    const {load} = useState(0);
    const [ data, setData ] = useState({});
    useEffect(() => {
        getRoom(2).then(res => {
            setData(res);
        });
    }, [load]);

    const onMotionClick = () => {
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
                {top: '50vh',
                left: '47vw',
                borderColor: data.smokeSensor==="no" ? 'yellow' : 'green'}} onClick={onSmokeClick}>
                <br/>Smoke
            </Sensor>
            <Sensor style={
                {top: '68vh',
                left: '51vw',
                borderColor: data.glassBreakSensor==="no" ? 'yellow' : 'green'}} onClick={onGlassClick}>
                <br/>Glass
            </Sensor>
            <Sensor style={
                {top: '65vh',
                left: '44.3vw',
                borderColor: data.vibrationSensor==="no" ? 'yellow' : 'green'}} onClick={onVibrationClick}>
                <br/>Vibration
            </Sensor>
            <Sensor style={
                {top: '12vh',
                left: '48.5vw',
                borderColor: data.doorSensor==="no" ? 'yellow' : 'green'}} onClick={onDoorClick}>
                <br/>Door
            </Sensor>
            <Sensor style={
                {top: '20vh',
                left: '49.3vw',
                borderColor: data.motionSensor==="no" ? 'yellow' : 'green'}} onClick={onMotionClick}>
                <br/>Motion
            </Sensor>
            { showModalInfo ? <ModalInfo/> : null }
            <KitchenImageWraper>
                <Image src={kitchen} />
            </KitchenImageWraper>
        </div>
    )
}

export default Kitchen;