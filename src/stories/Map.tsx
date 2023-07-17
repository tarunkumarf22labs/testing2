import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript
} from '@react-google-maps/api';
import { useState } from 'react';

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
  highlight?: number;
  handleClick?: (number) => void;
  zoomdata?: number;
  handlemodalnopen?: () => void;
}

const Map = ({
  markers,
  highlight,
  handleClick,
  zoomdata,
  handlemodalnopen
}: Imarkers) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY
  });
  const mapCenter = { lat: 20.5937, lng: 78.9629 };
  const [mapRef, setMapRef] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] =
    useState<setInfoWindowDataInterface>();

  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.setZoom(zoomdata);
  };

  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };
  const googleMapoptions = {
    mapTypeControl: false,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: true,
    scrollwheel: false
  };
  return (
    <div className="w-[100%] h-[100%] border-red ">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          onLoad={onMapLoad}
          center={mapCenter}
          onClick={() => setIsOpen(false)}
          options={googleMapoptions}
        >
          {markers?.map(({ address, lat, lng }, ind) => {
            return (
              <MarkerF
                key={lat + lng}
                position={{ lat, lng }}
                onClick={() => {
                  handleMarkerClick(ind, lat, lng, address);
                  handleClick && handleClick(ind);
                  handlemodalnopen && handlemodalnopen();
                }}
                options={{
                  icon: !Number.isInteger(highlight)
                    ? ''
                    : highlight === 0 && highlight === ind
                    ? '/images/lux2.svg'
                    : highlight && highlight == ind
                    ? '/images/lux2.svg'
                    : '/images/lux.svg'
                }}
              >
                {isOpen && infoWindowData?.id === ind && (
                  <InfoWindowF
                    onCloseClick={() => {
                      setIsOpen(false);
                      handleClick && handleClick(ind);
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
