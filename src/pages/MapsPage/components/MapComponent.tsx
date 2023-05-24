import { Map, Placemark } from "@pbe/react-yandex-maps";
import axios from "axios";
import { useLocation } from "react-router-dom";

const MapComponent = () => {
    const location = useLocation();

    const handleGet = async () => {
        try {
            const response = await axios.get('https://geocode-maps.yandex.ru/1.x/?apikey=5fff5614-b0c5-4970-b75d-28aa88c46171&format=json&geocode=Москва, улица Тверская, дом 6')
            console.log(response.data)
        } catch (error) {
            
        }
    }

    return (
    <div>
        <div onClick={handleGet}>ffsafsdfsafdasdf</div>
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
        </Map>
    </div>

    );
};

export default MapComponent;