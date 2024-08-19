import PopupTemplate from "@arcgis/core/PopupTemplate.js";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol.js";
import wicIcon from "@/assets/icon/wic.png";
const title = "WIC";
export const wicLayerConfig: __esri.FeatureLayerProperties = {
  url: process.env.NEXT_PUBLIC_LAYER_AZ_WIC,
  visible: false,
  outFields: ["*"],
  title,
  renderer: new SimpleRenderer({
    symbol: new PictureMarkerSymbol({
      url: wicIcon.src,
      height: 16,
      width: 16,
    }),
  }),
  popupTemplate: new PopupTemplate({
    outFields: ["*"],
    title,
    content: [
      {
        type: "fields",
        fieldInfos: [
          {
            fieldName: "OBJECTID",
            label: "OBJECTID",
          },
          {
            fieldName: "RECID",
            label: "RECID",
          },
          {
            fieldName: "NAME",
            label: "NAME",
          },
          {
            fieldName: "ADDRESS",
            label: "ADDRESS",
          },
          {
            fieldName: "CITY",
            label: "CITY",
          },
          {
            fieldName: "STATE",
            label: "STATE",
          },
          {
            fieldName: "ZIP",
            label: "ZIP",
          },
          {
            fieldName: "WIC",
            label: "WIC",
          },
          {
            fieldName: "SNAP",
            label: "SNAP",
          },
          {
            fieldName: "objID",
            label: "objID",
          },
          {
            fieldName: "KeyID",
            label: "KeyID",
          },
          {
            fieldName: "ADHSCODE",
            label: "ADHSCODE",
          },

          {
            fieldName: "RESERVATIO",
            label: "RESERVATIO",
          },
          {
            fieldName: "RESERV_ID",
            label: "RESERV_ID",
          },
          {
            fieldName: "R_METHOD",
            label: "R_METHOD",
          },
          {
            fieldName: "Category",
            label: "Category",
          },
        ],
      },
    ],
  }),
};
