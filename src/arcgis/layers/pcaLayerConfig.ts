import PopupTemplate from '@arcgis/core/PopupTemplate.js';
const title = 'Grocery Store';

export const pcaLayerConfig: __esri.FeatureLayerProperties = {
	url: process.env.NEXT_PUBLIC_LAYER_PCA,
	visible: false,
};
