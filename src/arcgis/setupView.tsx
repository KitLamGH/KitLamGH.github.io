import MapView from '@arcgis/core/views/MapView';
import LayerList from '@arcgis/core/widgets/LayerList.js';
import Legend from '@arcgis/core/widgets/Legend';
import setupMap from './setupMap';
import LeftrailPanelHandler from '@/utils/leftrailPanelHandler';

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
	view.when(() => {
		LeftrailPanelHandler(view);
	});

	return view;
};

export default setupView;
