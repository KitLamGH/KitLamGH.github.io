import dynamic from 'next/dynamic';

const GisMap = dynamic(() => import('@/components/Map/GisMap'), { ssr: false });
export default function Home() {
	return (
		<div className="main-page">
			<GisMap />
		</div>
	);
}
