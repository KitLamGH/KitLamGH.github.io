import PopupTemplate from '@arcgis/core/PopupTemplate.js';
const title = 'Fast Food';
export const fastFoodLayerConfig: __esri.FeatureLayerProperties = {
	url: process.env.NEXT_PUBLIC_LAYER_AZ_FAST_FOODS,
	visible: false,
	title,
	outFields: ['*'],
	popupTemplate: new PopupTemplate({
		outFields: ['*'],
		content: [
			{
				type: 'fields',
				fieldInfos: [
					{
						fieldName: 'OBJECTID',
						label: 'Object ID',
					},
					{
						fieldName: 'NAME',
						label: 'Name',
					},
					{
						fieldName: 'ADDRESS',
						label: 'Address',
					},
					{
						fieldName: 'LOCALITY',
						label: 'City',
					},
					{
						fieldName: 'REGION',
						label: 'State',
					},
					{
						fieldName: 'POSTCODE',
						label: 'ZIP',
					},
					{
						fieldName: 'COUNTRY',
						label: 'Country Abbreviation',
					},
					{
						fieldName: 'FSQ_CATEGORY',
						label: 'Foursquare Code',
					},
					{
						fieldName: 'NAICS',
						label: 'NAICS Code',
					},
					{
						fieldName: 'FSQ_CHAIN_NAME',
						label: 'Chain Name',
					},
					{
						fieldName: 'OPEN_CONFIDENCE',
						label: 'Open Confidence',
					},
					{
						fieldName: 'SOURCE',
						label: 'Source',
					},
					{
						fieldName: 'FSQ_ID',
						label: 'Foursquare ID',
					},
					{
						fieldName: 'DESC_',
						label: 'Description',
					},
					{
						fieldName: 'LATITUDE',
						label: 'Latitude',
					},
					{
						fieldName: 'LONGITUDE',
						label: 'Longitude',
					},
					{
						fieldName: 'CreationDate',
						label: 'Creation Date',
						format: {
							dateFormat: 'short-date-short-time',
						},
					},
					{
						fieldName: 'Creator',
						label: 'Creator',
					},
					{
						fieldName: 'EditDate',
						label: 'Edit Date',
						format: {
							dateFormat: 'short-date-short-time',
						},
					},
					{
						fieldName: 'Editor',
						label: 'Editor',
					},
				],
			},
		],
	}),
};
