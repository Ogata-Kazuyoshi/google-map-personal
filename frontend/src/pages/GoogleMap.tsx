
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from "react";
const render = (status: Status) => {
    return <h1>{status}</h1>;
};
export const GoogleMap = ()=>{
    return <>
        <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY} render={render}>
            <Map/>
        </Wrapper></>
}

interface MapProps extends google.maps.MapOptions {
    style?: { [key: string]: string };
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void;
}

const Map: React.FC<MapProps> = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                zoom: 8,
                center: {lat:34.5287987,lng:135.8506599},
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
                heading: 0,
                tilt:0,
            }));
        }
    }, [ref, map]);



    return <div ref={ref} style={{width: '500px', height:'500px'}} />;
};


