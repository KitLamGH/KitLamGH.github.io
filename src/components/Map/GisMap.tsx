"use client"
// components/MapComponent.js
import React, { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
import setupView from "../../arcgis/setupView";
const GisMap = () => {
  const mapDiv = useRef(null);

  useEffect(() => {
    let view: MapView | null;
    if (mapDiv.current) {
      view = setupView(mapDiv.current);

      return () => {
        if (view) {
          view.destroy();
          view = null;
        }
      };
    }
  }, []);

  return (
    <div>
      <div ref={mapDiv} style={{ height: "100vh", width: "100%" }} />
    </div>
  );
};

export default GisMap;
