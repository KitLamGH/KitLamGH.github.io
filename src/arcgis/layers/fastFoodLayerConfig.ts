import { ContentNodeBuilder, Line } from "@/utils/contentBuilder";
import PopupTemplate from "@arcgis/core/PopupTemplate.js";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol.js";

import fastfodd from "@/assets/icon/fastfood.png";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";

const title = "Fast Food";

function popup(event: any) {
  const graphic = event.graphic as __esri.Graphic;
  const { attributes } = graphic;

  const content = [
    { type: "field", value: ["Name", attributes.NAME] },
    { type: "field", value: ["Address", attributes.ADDRESS] },
  ] as Line[];
  // console.log(attributes.NAME);
  return ContentNodeBuilder(content);
}
export const fastFoodLayerConfig: __esri.FeatureLayerProperties = {
  url: process.env.NEXT_PUBLIC_LAYER_AZ_FAST_FOODS,
  id: "fast_food",
  title,
  outFields: ["*"],
  renderer: new SimpleRenderer({
    symbol: new PictureMarkerSymbol({
      url: fastfodd.src,
      height: 20,
      width: 20,
    }),
  }),
  popupTemplate: new PopupTemplate({
    outFields: ["*"],
    title,
    lastEditInfoEnabled: false,
    content: popup,
    // content: [
    // 	{
    // 		type: 'fields',
    // 		fieldInfos: [
    // 			{
    // 				fieldName: 'OBJECTID',
    // 				label: 'Object ID',
    // 			},
    // 			{
    // 				fieldName: 'NAME',
    // 				label: 'Name',
    // 			},
    // 			{
    // 				fieldName: 'ADDRESS',
    // 				label: 'Address',
    // 			},
    // 			{
    // 				fieldName: 'LOCALITY',
    // 				label: 'City',
    // 			},
    // 			{
    // 				fieldName: 'REGION',
    // 				label: 'State',
    // 			},
    // 			{
    // 				fieldName: 'POSTCODE',
    // 				label: 'ZIP',
    // 			},
    // 			{
    // 				fieldName: 'COUNTRY',
    // 				label: 'Country Abbreviation',
    // 			},
    // 			{
    // 				fieldName: 'FSQ_CATEGORY',
    // 				label: 'Foursquare Code',
    // 			},
    // 			{
    // 				fieldName: 'NAICS',
    // 				label: 'NAICS Code',
    // 			},
    // 			{
    // 				fieldName: 'FSQ_CHAIN_NAME',
    // 				label: 'Chain Name',
    // 			},
    // 			{
    // 				fieldName: 'OPEN_CONFIDENCE',
    // 				label: 'Open Confidence',
    // 			},
    // 			{
    // 				fieldName: 'SOURCE',
    // 				label: 'Source',
    // 			},
    // 			{
    // 				fieldName: 'FSQ_ID',
    // 				label: 'Foursquare ID',
    // 			},
    // 			{
    // 				fieldName: 'DESC_',
    // 				label: 'Description',
    // 			},
    // 			{
    // 				fieldName: 'LATITUDE',
    // 				label: 'Latitude',
    // 			},
    // 			{
    // 				fieldName: 'LONGITUDE',
    // 				label: 'Longitude',
    // 			},
    // 			{
    // 				fieldName: 'CreationDate',
    // 				label: 'Creation Date',
    // 				format: {
    // 					dateFormat: 'short-date-short-time',
    // 				},
    // 			},
    // 			{
    // 				fieldName: 'Creator',
    // 				label: 'Creator',
    // 			},
    // 			{
    // 				fieldName: 'EditDate',
    // 				label: 'Edit Date',
    // 				format: {
    // 					dateFormat: 'short-date-short-time',
    // 				},
    // 			},
    // 			{
    // 				fieldName: 'Editor',
    // 				label: 'Editor',
    // 			},
    // 		],
    // 	},
    // ],
  }),
};
