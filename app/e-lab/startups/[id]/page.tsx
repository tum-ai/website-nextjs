import StartupDetails from '@components/StartupDetails';
import prisma from "../../../../lib/db";

export default async function StartupPage({ params }: { params: { id: string } }) {

    const startup = await prisma.startup.findUnique({
        where: {
            id: params.id
        },
        include: {
            metrics: true,
            founders: true,
            jobs: true,
            latestNews: true
        },
    });

    if (!startup) {
        return <div>Startup Not Found</div>;
    }

    return <StartupDetails startup={startup} />;
}