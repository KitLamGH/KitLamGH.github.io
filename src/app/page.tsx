import dynamic from 'next/dynamic';

const Body = dynamic(() => import('@/layout/body/Body'), { ssr: false });
export default function Home() {
	return (
		<div className="main-page">
			<Body />
		</div>
	);
}
