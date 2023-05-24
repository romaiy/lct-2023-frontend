import { Map, Placemark } from "@pbe/react-yandex-maps";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MapComponent = () => {
    const location = useLocation();
    const [markers, setMarkers] = useState <{x: number, y: number}[]>([]);

    useEffect(() => {
        let Point = {pos: '37.587614 55.753083'}
        location.state.addresses.map((item: string) => {

            let stringArray: string[] = Point.pos.split(' ');
            let numberArray: number[] = [];
            for (let i = 0; i < 2; i++) {
                numberArray.push(+stringArray[i]);
            };
            setMarkers([...markers!, {x: numberArray[0], y: numberArray[1]}]);
        });
    }, [])

    const handleGet = async () => {
        try {
            const response = await axios.get('https://geocode-maps.yandex.ru/1.x/?apikey=5fff5614-b0c5-4970-b75d-28aa88c46171&format=json&geocode=Москва, улица Тверская, дом 6')
            console.log(response.data)
        } catch (error) {
            
        }
    }

    return (
    <div>
        {markers && markers.map(item => (
            <div>{item.x} {item.y}</div>
        ))}
        <Map
            defaultState={{
                center: [55.75, 37.57],
                zoom: 9,
                controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
            width={1139} height={'100vh'}
        >
            <Placemark defaultGeometry={[55.75, 37.57]} />
            <Placemark defaultGeometry={[55.77, 37.57]} />
        </Map>
    </div>

    );
};

export default MapComponent;