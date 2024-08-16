import PopupTemplate from '@arcgis/core/PopupTemplate.js';
const title = 'WIC Vendor';
export const wicVendorLayerConfig: __esri.FeatureLayerProperties = {
	url: process.env.NEXT_PUBLIC_LAYER_AZ_WIC_VENDORS,
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
						label: 'OBJECTID',
					},
					{
						fieldName: 'VENDOR_NAME',
						label: 'VENDOR NAME',
					},
					{
						fieldName: 'ADDRESS',
						label: 'ADDRESS',
					},
					{
						fieldName: 'CITY',
						label: 'CITY',
					},
					{
						fieldName: 'STATE',
						label: 'STATE',
					},
					{
						fieldName: 'ZIPCODE',
						label: 'ZIP CODE',
					},
					{
						fieldName: 'PHONE',
						label: 'PHONE',
					},
					{
						fieldName: 'STREET_ADDRESS2',
						label: 'STREET ADDRESS 2',
					},
					{
						fieldName: 'FULLADDRESS',
						label: 'FULL ADDRESS',
					},
				],
			},
		],
	}),
};
