import MapView from '@arcgis/core/views/MapView';
import LayerList from '@arcgis/core/widgets/LayerList.js';
import Legend from '@arcgis/core/widgets/Legend';
import setupMap from './setupMap';
import LeftrailPanelHandler from '@/utils/leftrailPanelHandler';
import Features from '@arcgis/core/widgets/Features.js';
import * as reactiveUtils from '@arcgis/core/core/reactiveUtils.js';
const setupView = (mapDiv: any) => {
	const map = setupMap();
	const view = new MapView({
		map,
		container: mapDiv,
		center: [-111.735545, 34.448268],
		zoom: 7,
		popupEnabled: false,
	});
	view.ui.remove('zoom');

	const layerList = new LayerList({
		view,
		selectionEnabled: true,
		container: 'layers-container',
	});

	const legend = new Legend({
		view,
		container: 'legends-container',
	});
	const featuresWidget = new Features({
		view: view,
		container: 'detail-container',
	});

	reactiveUtils.on(
		() => view,
		'click',
		(event) => {
			featuresWidget.open({
				location: event.mapPoint,
				fetchFeatures: true,
			});
			const button = document.querySelector(
				'calcite-action[data-action-id="detail"]'
			) as HTMLCalciteActionElement;

			if (!button.active) {
				button.click();
			}
		}
	);
	view.when(() => {
		LeftrailPanelHandler(view);
	});

	return view;
};

export default setupView;
