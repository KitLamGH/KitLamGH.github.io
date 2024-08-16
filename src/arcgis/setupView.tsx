import MapView from '@arcgis/core/views/MapView';
import LayerList from '@arcgis/core/widgets/LayerList.js';
import Legend from '@arcgis/core/widgets/Legend';
import setupMap from './setupMap';
import Features from '@arcgis/core/widgets/Features.js';
import * as reactiveUtils from '@arcgis/core/core/reactiveUtils.js';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import PopupTemplate from '@arcgis/core/PopupTemplate';
import { ContentNodeBuilder, Line } from '@/utils/contentBuilder';
const setupView = (mapDiv: any) => {
	const map = setupMap();
	const view = new MapView({
		map,
		container: mapDiv,
		center: [-111.735545, 34.448268],
		zoom: 7,
		popupEnabled: false,
		padding: {
			left: 49,
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
	const featuresWidget = new Features({
		view: view,
		container: 'detail-container',
		visibleElements: {
			closeButton: false,
		},
	});
	view.when(() => {
		reactiveUtils.watch(
			() => featuresWidget.selectedFeature,
			async (graphic) => {
				if (graphic && graphic.layer.id == 'fast_food') {
					const layer = graphic.layer as FeatureLayer;
					const query = layer.createQuery();
					(query.where = '1=1'), (query.geometry = graphic.geometry);
					query.units = 'miles';
					query.distance = 0.25;

					const result = await layer.queryFeatureCount(query).then((result) => {
						return result;
					});

					layer.popupTemplate = new PopupTemplate({
						title: 'Fast Food',
						lastEditInfoEnabled: false,
						content: function (event: any) {
							const graphic = event.graphic as __esri.Graphic;
							const { attributes } = graphic;

							const content = [
								{ type: 'field', value: ['Name:', attributes.NAME] },
								{ type: 'field', value: ['Address:', attributes.ADDRESS] },
								{
									type: 'value',
									value: `About ${result} fast foods within 0.25 mile radius with this location`,
								},
							] as Line[];
							// console.log(attributes.NAME);
							return ContentNodeBuilder(content);
						},
					});
				}
			}
		);
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

	return view;
};

export default setupView;
