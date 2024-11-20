import React, { useEffect, useRef } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
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
        console.error("Google Maps API-ийг ачаалах үед алдаа гарлаа:", error);
      }
    };

    initMap();
  }, []);
  return (
    <div className="flex justify-center pt-[61px]">
      <div className="flex flex-col gap-10 pb-10">
        <div className="w-[1200px] h-[616px] border border-black rounded-xl flex items-center justify-center p ">
          <div
            ref={mapRef}
            className="w-full h-[616px] border border-black rounded-xl flex items-center justify-center"
          ></div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <PiStarFourFill className="w-8 h-8 text-[#18BA51]" />
          </div>
          <div className="text-[22px] font-bold">
            Хүргэлтийн бүс дэх хаягууд
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[588px] h-[388px] rounded-2xl shadow-xl border px-6 py-6">
            <div className="h-[56px] w-[540px] border-l-0 border-t-0 border-r-0 border-b-[#18BA51] border-[2px] text-[20px] font-bold ">
              А бүс
            </div>
            <div className="flex pt-4">
              <div className="flex flex-col gap-4 w-[262px]">
                <div>Нархан хотхон</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
              </div>
              <div className="flex flex-col gap-4 w-[262px]">
                <div>Нархан хотхон</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
              </div>
            </div>
          </div>
          <div className="w-[588px] h-[388px] rounded-2xl shadow-xl border px-6 py-6">
            <div className="h-[56px] w-[540px] border-l-0 border-t-0 border-r-0 border-b-[#18BA51] border-[2px] text-[20px] font-bold ">
              А бүс
            </div>
            <div className="flex pt-4">
              <div className="flex flex-col gap-4 w-[262px]">
                <div>Нархан хотхон</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
              </div>
              <div className="flex flex-col gap-4 w-[262px]">
                <div>Нархан хотхон</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
                <div>26-р байр</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
