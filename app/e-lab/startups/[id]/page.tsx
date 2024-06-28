import { startups, Startup} from '@data/e-lab-startups';
import StartupDetails from '@components/StartupDetails';

export default function StartupPage({ params }: { params: { id: string } }) {

    const startup: Startup | undefined = startups.find((startup: Startup) => {
        if (startup && startup.id === params.id) {
            return startup;
        }
        return undefined;
    });

    if (!startup) {
        return <div>Startup Not Found</div>;
    }

    return <StartupDetails startup={startup} />;
}