import MapView from "@arcgis/core/views/MapView";
import LayerList from "@arcgis/core/widgets/LayerList.js";

import setupMap from "./setupMap";

const setupView = (mapDiv: any) => {
  const map = setupMap();
  const view = new MapView({
    map,
    container: mapDiv,
    center: [-111.735545, 34.448268],
    zoom: 7,
    popup: {
      defaultPopupTemplateEnabled: true,
    },
  });

  const layerList = new LayerList({
    view,
  });

  view.ui.add(layerList, "top-left");
  return view;
};

export default setupView;
