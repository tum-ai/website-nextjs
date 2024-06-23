import startups from '@data/e-lab-startups.json';
import StartupDetails from '@components/StartupDetails';

export async function generateStaticParams() {
    return startups.map((startup) => ({
        id: startup.id,
    }));
}

export default function StartupPage({ params }: { params: { id: string } }) {
    const startup = startups.find((s) => s.id === params.id);

    if (!startup) {
        return <div>Startup not found</div>;
    }

    return <StartupDetails startup={startup} />;
}