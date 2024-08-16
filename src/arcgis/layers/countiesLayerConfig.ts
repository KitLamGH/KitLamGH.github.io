import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer.js';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol.js';

const title = 'County';
export const countiesLayerConfig: __esri.FeatureLayerProperties = {
	url: process.env.NEXT_PUBLIC_LAYER_COUNTIES,
	visible: true,
	renderer: new SimpleRenderer({
		symbol: new SimpleFillSymbol({
			color: [140, 29, 64, 0.2],
		}),
	}),
};
