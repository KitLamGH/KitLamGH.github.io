import WebMap from "@arcgis/core/WebMap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import { basinLayerConfig } from "./layers/basinLayerConfig";
import { leadLayerConfig } from "./layers/environment/leadLayerConfig";
import { pm10LayerConfig } from "./layers/environment/pm10LayerConfig";
import { pm25LayerConfig } from "./layers/environment/pm25LayerConfig";
import { ozoneLayerConfig } from "./layers/environment/ozoneLayerConfig";
import { soLayerConfig } from "./layers/environment/soLayerConfig";
import { azHighwaysLayerConfig } from "./layers/azHighwaysLayerConfig";
import { azParksLayerConfig } from "./layers/azParksLayerConfig";
import { azReservationsLayerConfig } from "./layers/azReservationsLayerConfig";
import { basinPwsLayerConfig } from "./layers/basinPwsLayerConfig";
import { convenienceStoreLayerConfig } from "./layers/convenienceStoreLayerConfig";
import { countiesLayerConfig } from "./layers/countiesLayerConfig";
import { fastFoodLayerConfig } from "./layers/fastFoodLayerConfig";
import { groceryStoreLayerConfig } from "./layers/groceryStoreLayerConfig";
import { pcaLayerConfig } from "./layers/pcaLayerConfig";
import { licensedFacilityLayerConfig } from "./layers/licensedFacilityLayerConfig";
import { statesLayerConfig } from "./layers/statesLayerConfig";
import { wicLayerConfig } from "./layers/wicLayerConfig";
import { wicVendorLayerConfig } from "./layers/wicVendorLayerConfig";

const setupMap = () => {
  const map = new WebMap({
    basemap: "topo-vector",
  });

  map.layers.addMany([
    new FeatureLayer(basinLayerConfig),
    new FeatureLayer(leadLayerConfig),
    new FeatureLayer(pm10LayerConfig),
    new FeatureLayer(pm25LayerConfig),
    new FeatureLayer(ozoneLayerConfig),
    new FeatureLayer(soLayerConfig),
    new FeatureLayer(azHighwaysLayerConfig),
    new FeatureLayer(azParksLayerConfig),
    new FeatureLayer(azReservationsLayerConfig),
    new FeatureLayer(basinPwsLayerConfig),
    new FeatureLayer(convenienceStoreLayerConfig),
    new FeatureLayer(countiesLayerConfig),
    new FeatureLayer(fastFoodLayerConfig),
    new FeatureLayer(groceryStoreLayerConfig),
    new FeatureLayer(pcaLayerConfig),
    new FeatureLayer(licensedFacilityLayerConfig),
    new FeatureLayer(statesLayerConfig),
    new FeatureLayer(wicLayerConfig),
    new FeatureLayer(wicVendorLayerConfig),
  ]);
  return map;
};

export default setupMap;
