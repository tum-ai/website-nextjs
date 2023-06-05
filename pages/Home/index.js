import Image from 'next/image';
import Button from '../../components/Button';
import VerticalCards from '../../components/VerticalCards';

export default function Home() {
	return (
		<>
			<div className='py-16 px-8 bg-primary flex'>
				<div className='m-auto lg:inline-block space-y-8'>
					<Image
						src={'/assets/logo_new_white_standard.png'}
						alt='Logo'
						width={450}
						height={100}
					/>
					<div className='w-fit m-auto flex flex-col justify-center lg:space-x-4 lg:space-y-0 space-y-4 lg:flex-row'>
						<Button
							href={'https://www.tum-ai.com/forPartners.html'}
							className='bg-primary-500'
						>
							Become a Partner
						</Button>
						<Button
							href={'https://join-us.tum-ai.com/'}
							className='bg-primary-500'
						>
							Become a Member
						</Button>
					</div>
				</div>
			</div>
			<div className='bg-primary-500 h-3'></div>
			<VerticalCards
				data={[
					{
						img: '/assets/home_img1.jpg',
						title: 'AI Academy and educational offers',
						text: 'a series of advanced AI workshops, featuring hands-on coding tutorials, provided by exciting tech companies, open for everyone!',
						subText:
							'sponsored online course certificates and company visits are exclusive to TUM.ai members',
						body: (
							<div className='flex flex-col space-y-2 w-fit m-auto'>
								<Button
									href={'https://education.tum-ai.com/'}
									className='bg-gray-200 text-black'
								>
									Learn more
								</Button>
								<Button
									href={
										'https://www.eventbrite.de/o/tumai-31793295023'
									}
									className='bg-primary-500'
								>
									Apply now
								</Button>
							</div>
						),
					},
					{
						img: '/assets/home_img2.png',
						title: 'Makeathon Competitions',
						text: 'AI product development Hackathon, 48 hours to solve challenges by our sponsors, open for tech and business students, online/in-person hybrid',
						subText: 'applications closed, finished',
						body: (
							<div className='flex flex-col space-y-2 w-fit m-auto'>
								<Button
									href={'https://makeathon.tum-ai.com/'}
									className='bg-gray-200 text-black'
								>
									Learn more
								</Button>
								<Button
									href={
										'https://makeathon23.tum-ai.com/apply'
									}
									className='bg-gray-500'
									disabled
								>
									Apply now
								</Button>
							</div>
						),
					},
					{
						img: '/assets/home_img3.png',
						title: 'Industry Project Cooperations',
						text: 'Teams of 4x paid working students, deployed to implement data-driven solutions and consult partner companies, over 10 weeks time-frame',
						subText: 'applications closed, currently ongoing',
						body: (
							<div className='flex flex-col space-y-2 w-fit m-auto'>
								<Button
									href={
										'https://www.tum-ai.com/industry-projects.html'
									}
									className='bg-gray-200 text-black'
								>
									Learn more
								</Button>
								<Button
									href={'https://industry.tum-ai.com/apply'}
									className='bg-gray-500'
									disabled
								>
									Apply now
								</Button>
							</div>
						),
					},
					{
						img: '/assets/home_img4.jpg',
						title: 'AI E-Lab Entrepreneurship',
						text: `StartUp incubation program for students who are interested in founding AI Ventures, access TUM.ai's network to boost your vision`,
						subText: 'applications closed, currently ongoing',
						body: (
							<div className='flex flex-col space-y-2 w-fit m-auto'>
								<Button
									href={'https://aielab.tum-ai.com/'}
									className='bg-gray-200 text-black'
								>
									Learn more
								</Button>
								<Button
									href={'https://aielab.tum-ai.com/'}
									className='bg-gray-500'
									disabled
								>
									Apply now
								</Button>
							</div>
						),
					},
				]}
			/>
		</>
	);
}
