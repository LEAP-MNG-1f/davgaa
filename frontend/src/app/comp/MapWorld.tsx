
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const MapWorld = () => {
     const mapRef = useRef<HTMLDivElement>(null);
     const mapInstance = useRef<google.maps.Map | null>(null);

     useEffect(() => {
       const initMap = async () => {
         const loader = new Loader({
           apiKey: "AIzaSyBeK6kNAnqtWp2xZpPHmcXOjESpg5cu6ek",
           version: "weekly",
         });

         try {
           const { Map } = await loader.importLibrary("maps");

           const mapOptions: google.maps.MapOptions = {
             center: { lat: 47.91996922842304, lng: 106.91756534492119 },
             zoom: 13,
           };

           if (mapRef.current && !mapInstance.current) {
             mapInstance.current = new Map(mapRef.current, mapOptions);
           }
         } catch (error) {
           console.error(
             "Google Maps API-ийг ачаалах үед алдаа гарлаа:",
             error
           );
         }
       };

       initMap();
     }, []);
  return (
    <div className="w-[1200px] h-[616px] border rounded-xl flex items-center justify-center p ">
      <div
        ref={mapRef}
        className="w-full h-[616px] border rounded-xl flex items-center justify-center"
      ></div>
    </div>
  );
}

export default MapWorld
