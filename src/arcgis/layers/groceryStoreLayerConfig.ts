import PopupTemplate from '@arcgis/core/PopupTemplate.js';
const title = 'Grocery Store';
export const groceryStoreLayerConfig: __esri.FeatureLayerProperties = {
	url: process.env.NEXT_PUBLIC_LAYER_AZ_GROCERY_STORES,
	visible: false,
	title,
	popupTemplate: new PopupTemplate({
		outFields: ['*'],
		title,
		content: [
			{
				type: 'fields',
				fieldInfos: [
					{
						fieldName: 'WICApproved',
						label: 'WIC Approved Site',
					},
					{
						fieldName: 'Phone',
						label: 'Phone Number',
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
						label: 'NAICS-Based Code',
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
				],
			},
		],
	}),
};
