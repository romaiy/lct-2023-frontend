import { useLocation } from "react-router-dom";

const MapsPage = () => {
    const location = useLocation();

    return (
        <div>
            {location.state.addresses.map((item: string) => (
                <div key={item}>{item}</div>
            ))}
        </div>
    );
};

export default MapsPage;