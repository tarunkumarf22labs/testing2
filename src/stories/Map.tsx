import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";

interface setInfoWindowDataInterface {
  address: string;
  id: number;
}

interface Imarker {
  address: string;
  lat: number;
  lng: number;
}

interface Imarkers {
  markers: Imarker[];
  highlight: number;
}

const Map = ({ markers, highlight }: Imarkers) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
  });
  const [mapRef, setMapRef] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] =
    useState<setInfoWindowDataInterface>();

  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };
  console.log(highlight, "highlight");

  useEffect(() => {
    console.log("ekcd", highlight);
  }, [highlight, markers]);
  return (
    <div className="w-[100%] h-[100%] border-red ">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          onLoad={onMapLoad}
          onClick={() => setIsOpen(false)}
        >
          {markers?.map(({ address, lat, lng }, ind) => {
            console.log("Again", ind, highlight);

            return (
              <MarkerF
                key={lat + lng}
                position={{ lat, lng }}
                onClick={() => {
                  handleMarkerClick(ind, lat, lng, address);
                }}
                // onLoad={(marker) => {
                //   highlight == ind
                //     ? marker.setIcon(
                //         "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                //       )
                //     : null;
                // }}
                options={{
                  icon:
                    highlight == ind-1
                      ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                      : "",
                }}

                //  icon={highlight == ind ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png" : ''}
                // icon={
                //   highlight == ind
                //     ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                //     : ""
                // }
              >
                {isOpen && infoWindowData?.id === ind && (
                  <InfoWindowF
                    onCloseClick={() => {
                      setIsOpen(false);
                    }}
                    position={{ lat, lng }}
                  >
                    <h3>{infoWindowData.address}</h3>
                  </InfoWindowF>
                )}
              </MarkerF>
            );
          })}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
