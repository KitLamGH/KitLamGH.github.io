import PopupTemplate from '@arcgis/core/PopupTemplate.js';
const title = 'WIC';
export const wicLayerConfig: __esri.FeatureLayerProperties = {
	url: process.env.NEXT_PUBLIC_LAYER_AZ_WIC,
	visible: false,
	outFields: ['*'],
	title,
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
						fieldName: 'RECID',
						label: 'RECID',
					},
					{
						fieldName: 'NAME',
						label: 'NAME',
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
						fieldName: 'ZIP',
						label: 'ZIP',
					},
					{
						fieldName: 'WIC',
						label: 'WIC',
					},
					{
						fieldName: 'SNAP',
						label: 'SNAP',
					},
					{
						fieldName: 'objID',
						label: 'objID',
					},
					{
						fieldName: 'KeyID',
						label: 'KeyID',
					},
					{
						fieldName: 'ADHSCODE',
						label: 'ADHSCODE',
					},
					{
						fieldName: 'N_AddressType',
						label: 'N_AddressType',
					},
					{
						fieldName: 'N_LocatorType',
						label: 'N_LocatorType',
					},
					{
						fieldName: 'N_ADDRESS',
						label: 'N_ADDRESS',
					},
					{
						fieldName: 'N_ADDR2',
						label: 'N_ADDR2',
					},
					{
						fieldName: 'N_CITY',
						label: 'N_CITY',
					},
					{
						fieldName: 'N_COUNTY',
						label: 'N_COUNTY',
					},
					{
						fieldName: 'N_FULLADDR',
						label: 'N_FULLADDR',
					},
					{
						fieldName: 'N_LAT',
						label: 'N_LAT',
					},
					{
						fieldName: 'N_LON',
						label: 'N_LON',
					},
					{
						fieldName: 'N_STATE',
						label: 'N_STATE',
					},
					{
						fieldName: 'N_ZIP',
						label: 'N_ZIP',
					},
					{
						fieldName: 'N_ZIP4',
						label: 'N_ZIP4',
					},
					{
						fieldName: 'N_BLOCK',
						label: 'N_BLOCK',
					},
					{
						fieldName: 'RESERVATIO',
						label: 'RESERVATIO',
					},
					{
						fieldName: 'RESERV_ID',
						label: 'RESERV_ID',
					},
					{
						fieldName: 'R_METHOD',
						label: 'R_METHOD',
					},
					{
						fieldName: 'Category',
						label: 'Category',
					},
				],
			},
		],
	}),
};
