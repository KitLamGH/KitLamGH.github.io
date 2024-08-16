import PopupTemplate from '@arcgis/core/PopupTemplate.js';
const title = 'Convenience Gas Store';

export const convenienceStoreLayerConfig: __esri.FeatureLayerProperties = {
	url: process.env.NEXT_PUBLIC_LAYER_AZ_CONVENIENCE_GAS_STORES,
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
						fieldName: 'name',
						label: 'Name',
					},
					{
						fieldName: 'address',
						label: 'Address',
					},
					{
						fieldName: 'locality',
						label: 'City',
					},
					{
						fieldName: 'region',
						label: 'State',
					},
					{
						fieldName: 'postcode',
						label: 'ZIP',
					},
					{
						fieldName: 'country',
						label: 'Country Abbreviation',
					},
					{
						fieldName: 'fsq_category',
						label: 'Foursquare Code',
					},
					{
						fieldName: 'naics',
						label: 'NAICS Code',
					},
					{
						fieldName: 'fsq_chain_name',
						label: 'Chain Name',
					},
					{
						fieldName: 'open_confidence',
						label: 'Open Confidence',
					},
					{
						fieldName: 'source',
						label: 'Source',
					},
					{
						fieldName: 'fsq_id',
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
