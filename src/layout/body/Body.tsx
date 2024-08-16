'use client';
import dynamic from 'next/dynamic';
import { CalciteShell } from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-shell';
const GisMap = dynamic(() => import('@/components/Map/GisMap'), {
	ssr: false,
});
const Leftrail = dynamic(() => import('@/components/Leftrail/Leftrail'), {
	ssr: false,
});

const Body = () => {
	return (
		<CalciteShell contentBehind>
			<Leftrail />
			<GisMap />
		</CalciteShell>
	);
};

export default Body;
