import { Map, Placemark } from "@pbe/react-yandex-maps";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MapComponent = () => {
    const location = useLocation();
    const [markers, setMarkers] = useState <{x: number, y: number}[]>([]);

    useEffect(() => {
        for (let i = 0; i < location.state.addresses.length; i++) {
            try {
                axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=5fff5614-b0c5-4970-b75d-28aa88c46171&format=json&geocode=Москва, ${location.state.addresses[i]}`)
                .then(response => {
                    let stringArray: string[] = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
                    let numberArray: number[] = [];
                    for (let j = 0; j < 2; j++) {
                        numberArray.push(+stringArray[j]);
                    };
                    console.log(response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos)
                    setMarkers(item => [...item!, {x: numberArray[1], y: numberArray[0]}]);
                })
            } catch (error) {
                console.log(error)
            }
        }
    }, [location])

    return (
    <div>
        {markers ? 
        <Map
            defaultState={{
                center: [55.75, 37.57],
                zoom: 9,
                controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}
            width={1139} height={'100vh'}
        >
            {markers.map((item, index) => (
                <Placemark key={index} defaultGeometry={[item.x, item.y]}/>
            ))}
        </Map>
        : <></>}
    </div>

    );
};

export default MapComponent;