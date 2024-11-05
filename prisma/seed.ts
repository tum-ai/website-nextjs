import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.department.createMany({
        data: [
            {
                name: "Makeathon",
                description:
                    "Organizing the largest Makeathon in Munich, a virtual 48-hour challenge where you develop a real-world business case involving AI. We will provide helpful workshops and insightful business talks, as well as assistance from mentors and industry experts.",
                image: "/assets/departments/makeathon.png",
                icon: "faLaptop",
            },
            {
                name: "Venture",
                description:
                    "The Venture department is mainly focused on bridging the gap between ideas and building the next successful AI startups. We are dedicated to fostering innovation and an entrepreneurial spirit among all TUM.ai members!",
                image: "/assets/departments/venture.jpg",
                icon: "faRocket",
            },
            {
                name: "Industry",
                description:
                    "The Industry Team provides project opportunities with industry partners during the lecture-free period. We help TUM.ai members to apply AI in real world company challenges - bridging the gap between theory and practice.",
                image: "/assets/departments/industry.png",
                icon: "faIndustry",
            },
            {
                name: "Education",
                description:
                    "The Education department educates TUM.ai members and the public about AI in all possible domains. We are responsible for creating educational content, organize educational events and spread knowledge - from beginner to expert level.",
                image: "/assets/departments/education.jpg",
                icon: "faGraduationCap",
            },
            {
                name: "Software dev",
                description:
                    "The Software Development Department (DEV) is crucial for running the group TUM.ai in an efficient, modern and collaborative way. It is responsible for implementing in-house software tools, cloud services and the initiative's SaaS infrastructure.",
                image: "/assets/departments/software_dev.jpg",
                icon: "faCode",
            },
            {
                name: "Legal & Finance",
                description:
                    "The Legal & Finance Department is responsible for making sure that TUM.ai acts accordingly to all relevant laws. In regard to that, one of our main tasks is to account for all incoming and outgoing capital streams to ensure that TUM.ai keeps its non-profit status.",
                image: "/assets/departments/legal_and_finance.jpg",
                icon: "faFileContract",
            },
            {
                name: "Community",
                description:
                    "The people are the biggest asset of any organization! Even more so in student initiatives, the community is the driving force behind the overall success of the initiative. Therefore, the community department manages gatherings, buddy events and the overall recruitment process.",
                image: "/assets/departments/community.png",
                icon: "faUserGroup",
            },
            {
                name: "Marketing & PR",
                description:
                    "The marketing department is about promoting the vision and mission of TUM.ai, serving as the face of our community, coordinating and producing all materials representing TUM.ai.  Reaching out to create an overarching image that represents our initiative in a positive light.",
                image: "/assets/departments/marketing_and_pr.jpg",
                icon: "faBullhorn",
            },
            {
                name: "Partners & Sponsors",
                description:
                    "We make sure that we cooperate with the most awesome partners and sponsors and thereby strengthen the TUM.AI network. Our partner- and sponsorships are the basis for creating ambitious events and project collaborations. ",
                image: "/assets/departments/partners_and_sponsors.jpg",
                icon: "faHandshakeSimple",
            },
        ],
    });

    await prisma.testimonial.createMany({
        data: [
            {
                imgSrc: "/assets/e-lab/testimonials/ikigai_team.png",
                name: "Team ikigai",
                text: 'The AI E Lab was one of the few "non-bullshit" sources during our journey. It was a sandbox full of other really cool people truly wanting to challenge themselves and their idea. Through those interactions could we understand our own business better, share insights and give back to the community and feel like every single one of the people there will walk out of the AI E Lab with a new perspective!',
                logoSrc: "/assets/e-lab/testimonials/ikigai.png",
                logoAlt: "ikigai",
                link: "https://www.linkedin.com/company/get-ikigai/",
                company: "https://www.get-ikigai.com/"
            },
            {
                imgSrc: "/assets/e-lab/testimonials/florian_scherl.jpg",
                name: "Florian Scherl",
                text: "I really loved the abundance of pitch events. It not only immensely improved my pitching but I also received priceless feedback for my idea and even found my NLP team lead at the final pitch. I definitely recommend applying to the AI E-Lab and using the provided knowledge and resources to the fullest. They offer great advice and guidance. Lastly, I greatly appreciated the peer-to-peer exchange. They absolutely brought the brightest minds together to start new thriving ventures.",
                logoSrc: "/assets/e-lab/testimonials/fast_ai_movies.png",
                logoAlt: "FAST AI Movies",
                link: "https://www.linkedin.com/in/florian-scherl/",
                company: "https://fast-ai-movies.de/"
            },
            {
                imgSrc: "/assets/e-lab/testimonials/tom_doerr.jpeg",
                name: "Tom Dörr",
                text: "I gained real, usable insights into the world of start-ups, including the ins and outs of fundraising. The feedback of others added layers to my understanding and helped refine my ideas. The interactive nature of the sessions, were great, the one on product-market fit really stood out for me. One of the best parts was connecting with people who share a passion for AI. Working on projects with them has been a unique and rewarding experience.",
                logoSrc: "/assets/e-lab/testimonials/conic_w.png",
                logoAlt: "conic",
                link: "https://www.linkedin.com/in/tom-d%C3%B6rr-912607126/",
                company: "https://github.com/tom-doerr"
            },
            {
                imgSrc: "/assets/e-lab/testimonials/marc_alexander_kuehn.jpg",
                name: "Marc Alexander Kühn (Jury)",
                text: "Participating in AI E-Lab's final pitch event as a jury member was an enriching experience. It was great to see so many young people driving change in Artificial Intelligence. Also, it was thrilling to see some of the teams making significant progress after the incubation program. Above all, I believe what TUM.ai E-Lab is doing for the Munich ecosystem is of significant value. They're cultivating a vibrant environment for young, talented students and graduates to kick-start their entrepreneurial journey. Their dedication to unleashing the future of AI innovation in Munich is remarkable and I'm excited to see where their efforts will lead.",
                logoSrc: "/assets/e-lab/partners/uvc_w.svg",
                logoAlt: "UVC Partners",
                link: "https://www.linkedin.com/in/marc-alexander-kuehn/",
                company: "https://www.uvcpartners.com/"
            },
            {
                imgSrc: "/assets/e-lab/testimonials/maximilian_jesch.png",
                name: "Maximilian Jesch (Jury)",
                text: "Being a jury member at the AI Startup Contest was an exhilarating experience! The passion and innovation displayed by the participating teams left me truly impressed. Their groundbreaking ideas and impeccably delivered pitches showcased the immense potential of the next generation of AI-driven entrepreneurship. I have no doubt that these teams are on the cusp of revolutionizing the industry and driving us into an exciting AI-powered future. It's an honor to be part of their journey, and I eagerly anticipate witnessing their continued success and impact on the world.",
                logoSrc: "",
                logoAlt: "",
                link: "https://www.linkedin.com/in/maximilian-jesch/",
                company: ""
            },

            // {
            //   imgSrc: "/assets/e-lab/testimonials/leon_hergert.jpeg",
            //   name: "Leon Hergert",
            //   text: "As the co-founder of Spherecast, a software solution for e-commerce brands addressing stock imbalances with advanced machine learning, our  journey began with the AI E-Lab program. Beyond just the network, the AI E-Lab's mentorship was instrumental. Our mentor, a seasoned e-commerce entrepreneur, continues to provide invaluable guidance and challenge us. If AI and startups excite you, whether you have an idea or seek co-founders, the AI E-Lab is the ideal platform.",
            //   logoSrc: "/assets/e-lab/testimonials/spherecast_ls.png",
            //   logoAlt: "spherecast",
            // },
            // {
        ],
    });

    await prisma.fAQ.createMany({
        data: [
            {
                question: "I don’t feel experienced yet. Should I still apply?",
                answer:
                    "Definitely. Our program is designed to equip you with all relevant knowledge and to make your founding experience as convenient as possible.",
                type: "elab",
            },
            {
                question: "Do I need to be enrolled at a university?",
                answer:
                    "No. It doesn't matter whether you are are enrolled at TUM, LMU or a student in Munich at all. We want to make founding accessible to everyone and fair. Regardless of your background, we would like to help you with founding your AI startup. You only have to be present in Munich during the program.",
                type: "elab",
            },
            {
                question: "My idea is not AI related. Can I still apply?",
                answer:
                    "Unfortunately, no. Your startup idea has to be related to artificial intelligence.",
                type: "elab",
            },
            {
                question: "When will the application phase begin?",
                answer:
                    "The application phase will open probably around August 2024 again.",
                type: "elab",
            },
            // {
            //   question: "When is the application deadline?",
            //   answer: "The application phase closes on 07.09.2023 at 23:59.",
            // },
            {
                question: "Can I apply with a team?",
                answer:
                    "Yes, you can, we will consider your application then as a team application.",
                type: "elab",
            },
            {
                question:
                    "What if I don’t find a team during the first week of the AI E-Lab?",
                answer:
                    "No worries, if you don’t find a team, you’ll still be able to continue your journey in the E-Lab.",
                type: "elab",
            },
            {
                question: "Do I have to be located in Munich during the program?",
                answer:
                    "Since we organize in-person activities, participants need to be present in Munich during these activities.",
                type: "elab",
            },
            {
                question: "Am I legally bound to TUM.ai or a partner company?",
                answer:
                    "No. We are equity-free and do not want a share in your startup. You only need to invest your dedication and eagerness and we would like to help you with your AI startup.",
                type: "elab",
            },
            {
                question: "What is the time commitment for this program?",
                answer:
                    "The AI E-Lab is a part-time program. Keep in mind that the more you commit, the more you get out of this program.",
                type: "elab",
            },
        ],
    });

    //elab-team
    await prisma.person.createMany({
        data: [
            {
                id: "laurenz-sommerlad",
                firstName: "Laurenz",
                lastName: "Sommerlad",
                role: "Head of Venture",
                description: "Hey, I am Laurenz and lead the amazing team behind the AI E-LAB. My journey began at a young age, building my first software projects at 12 and founding a student-led startup at 15. These early experiences paved the way for my burning passion in AI, Robotics and Entrepreneurship.\n\n" +
                    "Here is a quick overview of my academic achievements and work:\n\n" +
                    "- Ranked in the Top 2% at TUM Department of Computer Science and achieved an Abitur GPA of 1.0\n" +
                    "- Conducting research at LMU Hospital to predict rare child diseases using federated learning-based Graph ML techniques on patient phenotypes, genes, and proteins\n" +
                    "- Developing perception and path planning software for an Autonomous Mars Rover participating in International Rover Competitions with WARR Space Robotics, while also leading Partner & Sponsors | PR & Marketing subteams \n" +
                    "- Over 2+ years of work experience as a Software Engineer in Full-Stack web-based applications (working student)\n\n" +
                    "Outside of my professional endeavors, I enjoy doing a lot of different sports like weight training, martial arts (Wing Chun), marathons, technical and cave diving, wakeboarding, snowboarding, and preparing for my first Ironman. I am also in love with traveling, exploring foreign cultures and learning languages including French, Spanish, Japanese & Arabic which continues to enrich my life.\n\n" +
                    "Driven by a desire to make the world a better place, I am committed to solving the most challenging problems with technology. Feel free to reach out — I am always up for a coffee and a good conversation! ☕",
                imgSrc: "/assets/e-lab/team/laurenz_sommerlad.jpg",
                imgAlt: "Laurenz Sommerlad",
                linkedin: "https://www.linkedin.com/in/laurenzsommerlad/",
                x: "https://x.com/Lauros_World",
                instagram: "https://www.instagram.com/laurenzsommerlad/",
                youtube: "https://www.youtube.com/@LaurenzSommerlad",
                website: "https://laurenzsommerlad.com",
                email: "laurenz.sommerlad@tum-ai.com",
                type: "elab-team"
            },
            {
                id: "jan-christopher-michalczik",
                firstName: "Jan-Christopher",
                lastName: "Michalczik",
                role: "Strategy & Events",
                description: "Hey, nice to meet you! During the course of my studies, I have had the chance to gather some business acumen across different B-Schools. Starting with traditional subjects like finance and accounting, I have continually expanded my horizon to areas more strongly focused on innovation and technology management. Herein, my focus currently lies on but is not limited to AI. My journey has taken me across different countries and industries like the financial sector, shipping, and fruits wholesale.\n\n" +
                    "More importantly, I have had the chance to get immersed in two European innovation hubs: Paris and Munich. The German capital of beer and Weißwurst specifically caught my attention due to its proximity between tech and business which is hard to find elsewhere at the same scale. In the two years since I stepped my foot into the city, it has done everything else but disappointed. So, I am looking very forward to learning how you are contributing to this awesome vibe!\n\n" +
                    "Whatever your challenge is, I am here to help you solve it. I cannot wait to brainstorm with you or connect you to one of the numerous experts that TUM.ai will get you access to. From organizing last year's E-Lab, I can tell you that our participants, organizers, and partners made it a blast. So, get your act together, handle your responsibilities, and make sure you set aside some time for this program. It is worth it!\n\n"+
                    "If you need more info than is presented on our website, sign up for our newsletter, go to one of our info events, or just reach out directly.",
                imgSrc: "/assets/e-lab/team/jan_michalczik.png",
                imgAlt: "Jan-Christopher Michalczik",
                linkedin: "https://www.linkedin.com/in/jan-michalczik/",
                email: "jan-christopher.michalczik@tum-ai.com",
                type: "elab-team"
            },
            {
                id: "benedikt-wieser",
                firstName: "Benedikt",
                lastName: "Wieser",
                role: "Strategy & Events",
                description: "Having a background in Business Administration from the University of St. Gallen and studies at Berkeley, I’ve worked on multiple startup projects, in venture capital, at a scale-up, and participated in the AI E-Lab 2.0 startup incubator.\n\nAdditional to my professional experience, I learnt to lead teams in high-stress situations as an officer cadet in the Austrian Armed Forces, instilling in me strong personal drive and get-things-done thinking.\n\nBesides being passionate about entrepreneurship I love outdoor adventures like whitewater rafting and hiking, and always strive to explore and feel the intensity of life. I am absolutely looking forward to accompanying you on your individual, entrepreneurial journey. Let’s build something amazing together!",
                imgSrc: "/assets/e-lab/team/benedikt_wieser.jpg",
                imgAlt: "Benedikt Wieser",
                linkedin: "https://www.linkedin.com/in/benedikt-wieser-6430a3139/",
                type: "elab-team"
            },
            {
                id: "emine-hakani",
                firstName: "Emine",
                lastName: "Hakani",
                role: "Partners & Sponsors",
                description: "",
                imgSrc: "/assets/e-lab/team/emine_hakani.png",
                imgAlt: "Emine Hakani",
                linkedin: "https://www.linkedin.com/in/emine-hakani-muc/",
                email: "venture@tum-ai.com",
                type: "elab-team"
            },
            {
                id: "philip-juenemann",
                firstName: "Philip",
                lastName: "Jünemann",
                role: "Talent & Community",
                description: "Passionate about Entrepreneurship, Tech and AI!",
                imgSrc: "/assets/e-lab/team/philip_juenemann.jpg",
                imgAlt: "Philip Jünemann",
                linkedin: "https://www.linkedin.com/in/philip-louis-j%C3%BCnemann/",
                email: "philip.juenemann@tum-ai.com",
                type: "elab-team"
            },
            {
                id: "david-reyes",
                firstName: "David",
                lastName: "Reyes",
                role: "Talent & Community",
                description: "Hey, nice to meet you! I am David, and I am passionate about empowering people to pursue their passions in life (which, of course, includes you). With a solid foundation in engineering and economics, I have gained extensive business and tech knowledge during my studies, with my journey spanning Latin America, the US, and now Europe. This diverse experience has led me through various tech startups, where I have held roles in product management and engineering teams. My past experiences encompass finance, product management, and data science, with AI currently being one of my key areas of interest.\n\n" +
                    "Innovation drives me, and I have found a fitting place within the Munich entrepreneurial ecosystem. I am dedicated to ensuring you become part of an amazing batch of smart, diverse, and driven individuals who are passionate about developing solutions and maintaining a thriving sense of community. I look forward to working together to take your startup idea to the moon.",
                imgSrc: "/assets/e-lab/team/david_reyes.png",
                imgAlt: "David Reyes",
                linkedin: "https://www.linkedin.com/in/davidreyesj/",
                email: "david.reyes@tum-ai.com",
                type: "elab-team"
            },
            {
                id: "zaid-efraij",
                firstName: "Zaid",
                lastName: "Efraij",
                role: "Events & Strategy",
                description: "",
                imgSrc: "/assets/e-lab/team/zaid_efraij.jpg",
                imgAlt: "Zaid Efraij",
                linkedin: "https://www.linkedin.com/in/zaid-efraij-b6630722a/",
                email: "zaid.efraij@tum-ai.com",
                type: "elab-team"
            },
            {
                id: "nagaharshith-makam-sreenivasulu",
                firstName: "Nagaharshith",
                lastName: "Makam Sreenivasulu",
                role: "Marketing",
                description: "Hey, I am Nagah. In addition to pursuing a bachelor's degree in Management and Technology at TUM, I also assist with marketing at TUM.ai and TEG e.V. (The Entrepreneurial Group, student startup club in Munich). With a background in business, I am interested in using AI agents to improve traditional business settings. Professionally, I work as a Business Development working student at roadsurfer GmbH.\n\nI am excited to meet you and help you with your AI startup journey!",
                imgSrc: "/assets/e-lab/team/nagah_sreenivasulu.jpg",
                imgAlt: "Nagah Sreenivasulu",
                linkedin: "https://www.linkedin.com/in/nagaharshith",
                email: "nagaharshith-makam.sreenivasulu@tum-ai.com",
                type: "elab-team"
            },
        ],
    });

    //elab-alumni
    await prisma.person.createMany({
        data: [
            {
                id: "abdulqadir-faruk",
                firstName: "Abdulqadir",
                lastName: "Faruk",
                role: "Advisor",
                description: "Abdul serves as an Advisor at TUM.ai, where he brings his experience and expertise in leadership, entrepreneurship, and venture development. He previously led the AI E-Lab as the Head of Venture alongside Daniil Morozov, where they envisioned and re-established the AI E-Lab as a straight-shooting startup sandbox and a genuine community designed to engineer serendipity among founders. Throughout the program, Abdul has been and will continue to be a humble sparring partner for our founders.",
                imgSrc: "/assets/e-lab/team/abdul_faruk.jpg",
                imgAlt: "Abdulqadir Faruk",
                linkedin: "https://www.linkedin.com/in/abdulqadirfaruk/",
                email: "abdul.faruk@tum-ai.com",
                type: "elab-alumni"
            },
            {
                id: "daniil-morozov",
                firstName: "Daniil",
                lastName: "Morozov",
                role: "Advisor",
                description: "",
                imgSrc: "/assets/e-lab/team/daniil_morozov.png",
                imgAlt: "Daniil Morozov",
                linkedin: "https://www.linkedin.com/in/daniil-morozov-912490252/",
                type: "elab-alumni"
            },
            {
                id: "nektarios-totikos",
                firstName: "Nektarios",
                lastName: "Totikos",
                role: "Advisor",
                description: "",
                imgSrc: "/assets/e-lab/team/nektarios_totikos.jpeg",
                imgAlt: "Nektarios Totikos",
                linkedin: "https://www.linkedin.com/in/nektarios-totikos/",
                type: "elab-alumni"
            },
            {
                id: "ian-tolan",
                firstName: "Ian",
                lastName: "Tolan",
                role: "Alumni",
                description: "",
                imgSrc: "/assets/e-lab/team/ian_tolan.png",
                imgAlt: "Ian Tolan",
                linkedin: "https://www.linkedin.com/in/ian-tolan-a85b0a107/",
                type: "elab-alumni"
            },
            {
                id: "david-podolskyi",
                firstName: "David",
                lastName: "Podolskyi",
                role: "Alumni",
                description: "",
                imgSrc: "/assets/e-lab/team/david_podolskyi.png",
                imgAlt: "David Podolskyi",
                linkedin: "https://www.linkedin.com/in/davidpodolsky/",
                type: "elab-alumni"
            },
            {
                id: "luca-dombetzki",
                firstName: "Luca",
                lastName: "Dombetzki",
                role: "Alumni",
                description: "",
                imgSrc: "/assets/e-lab/team/luca_dombetzki.png",
                imgAlt: "Luca Dombetzki",
                linkedin: "https://www.linkedin.com/in/luca-dombetzki/",
                type: "elab-alumni"
            },
            {
                id: "yarhy-flores",
                firstName: "Yarhy",
                lastName: "Flores",
                role: "Alumni",
                description: "",
                imgSrc: "/assets/e-lab/team/yarhy_flores.png",
                imgAlt: "Yarhy Flores",
                linkedin: "https://www.linkedin.com/in/yarhy-flores/",
                type: "elab-alumni"
            },
            {
                id: "sebastian-wilhelm",
                firstName: "Sebastian",
                lastName: "Wilhelm",
                role: "Alumni",
                description: "",
                imgSrc: "/assets/e-lab/team/sebastian_wilhelm.png",
                imgAlt: "Sebastian Wilhelm",
                linkedin: "https://www.linkedin.com/in/sebastian-wilhelm/",
                type: "elab-alumni"
            },
            {
                id: "can-kayalan",
                firstName: "Can",
                lastName: "Kayalan",
                role: "Alumni",
                description: "",
                imgSrc: "/assets/e-lab/team/can_kayalan.png",
                imgAlt: "Can Kayalan",
                linkedin: "https://www.linkedin.com/in/can-kayalan/",
                type: "elab-alumni"
            },
        ],
    });

    await prisma.partner.createMany({
        data: [
            // partners_ip4
            {
                href: "https://www.atoss.com/de",
                src: "/assets/industry/partners/IP4/ATOSS.png",
                alt: "atoss",
                type: "partners_ip4",
            },
            {
                href: "https://www.hypovereinsbank.de",
                src: "/assets/industry/partners/IP4/HVB_2.png",
                alt: "hypovereinsbank",
                type: "partners_ip4",
            },
            {
                href: "https://www.infineon.com/cms/de/",
                src: "/assets/industry/partners/IP4/infineon_logo.png",
                alt: "infineon",
                type: "partners_ip4",
            },
            {
                href: "https://www.prosiebensat1.com",
                src: "/assets/industry/partners/IP4/P7S1_transparent.png",
                alt: "prosiebensat1",
                type: "partners_ip4",
            },
            {
                href: "https://www.sportortho.mri.tum.de",
                src: "/assets/industry/partners/IP4/MRI.png",
                alt: "MRI",
                type: "partners_ip4",
            },
            {
                href: "https://neuralprophet.com",
                src: "/assets/industry/partners/IP4/neuralprophet_logo.png",
                alt: "neuralprophet",
                type: "partners_ip4",
            },
            {
                href: "https://eyeo.com",
                src: "/assets/industry/partners/IP4/eyeo.png",
                alt: "eyeo",
                type: "partners_ip4",
            },
            {
                href: "https://gruppe.schwarz",
                src: "/assets/industry/partners/IP4/schwarzgroup_edit_cropped.png",
                alt: "Schwarz Gruppe",
                type: "partners_ip4",
            },
            {
                href: "https://www.rohde-schwarz.com/de",
                src: "/assets/industry/partners/IP4/RandS.svg.png",
                alt: "Rhode-Schwarz",
                type: "partners_ip4",
            },

            // partners_ip5
            {
                href: "https://www.airbus.com/en",
                src: "/assets/industry/partners/IP5/1200px-Airbus_logo_2017.png",
                alt: "Airbus",
                type: "partners_ip5",
            },
            {
                href: "https://www.burda.com/en/",
                src: "/assets/industry/partners/IP5/Hubert_Burda_Media_Logo.png",
                alt: "Burda",
                type: "partners_ip5",
            },
            {
                href: "https://www.hypovereinsbank.de/hvb/privatkunden",
                src: "/assets/industry/partners/IP5/Logo-Case-HypoVereinsbank-1240x870px.svg",
                alt: "HVB",
                type: "partners_ip5",
            },
            {
                href: "https://www.mri.tum.de",
                src: "/assets/industry/partners/IP5/2560px-Klinikum_rechts_der_Isar_logo.svg.png",
                alt: "MRI",
                type: "partners_ip5",
            },
            {
                href: "https://www.recogni.com",
                src: "/assets/industry/partners/IP5/Recogni_Logo.jpg.webp",
                alt: "Recogni",
                type: "partners_ip5",
            },
            {
                href: "https://company.rtl.com/en/homepage/",
                src: "/assets/industry/partners/IP5/RTL.png",
                alt: "RTL",
                type: "partners_ip5",
            },
            {
                href: "https://www.go-turtle.com",
                src: "/assets/industry/partners/IP5/TURTLE_Logo_Claim.067bf3dd46c5285ea24fb1b3e0904721.svg",
                alt: "Turtle",
                type: "partners_ip5",
            },

            // partners_collaborated_with
            {
                href: "https://unite.eu/de-de",
                src: "/assets/partners_sponsors/Unite_logo.png",
                alt: "Unite",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.microsoft.com/de-de/about",
                src: "/assets/partners_sponsors/Microsoft_Logo.png",
                alt: "Microsoft",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.ibm.com/de-de",
                src: "/assets/partners_sponsors/ibm_logo.png",
                alt: "IBM",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.appliedai.de/de/",
                src: "/assets/partners_sponsors/appliedai_logo.png",
                alt: "Applied AI",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.unternehmertum.de/",
                src: "/assets/partners_sponsors/UnternehmerTUM.webp",
                alt: "UnternehmerTUM",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www2.deloitte.com/de/de/pages/risk/solutions/aistudio.html",
                src: "/assets/partners_sponsors/deloitte.png",
                alt: "Deloitte",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.bcg.com/beyond-consulting/bcg-gamma/overview",
                src: "/assets/partners_sponsors/bcggamma_logo.png",
                alt: "BCG Gamma",
                type: "partners_collaborated_with",
            },
            {
                href: "https://about.google/",
                src: "/assets/partners_sponsors/google_logo.png",
                alt: "Google",
                type: "partners_collaborated_with",
            },
            {
                href: "https://openai.com/",
                src: "/assets/partners_sponsors/openai_logo.png",
                alt: "OpenAI",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.netapp.com/de/",
                src: "/assets/partners_sponsors/NetApp_logo.png",
                alt: "NetApp",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.siemens.com/de/de.html",
                src: "/assets/partners_sponsors/siemens-logo-default.svg",
                alt: "Siemens",
                type: "partners_collaborated_with",
            },
            {
                href: "https://ryver.ai/",
                src: "/assets/partners_sponsors/ryverai.png",
                alt: "Ryver AI",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.10xfounders.com/",
                src: "/assets/partners_sponsors/10xfounderslogo.png",
                alt: "10x Founders",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.tngtech.com/index.html",
                src: "/assets/partners_sponsors/TNG_logo.png",
                alt: "TNG Tech",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.infineon.com/",
                src: "/assets/partners_sponsors/infineon_logo.png",
                alt: "Infineon",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.rolandberger.com/de/",
                src: "/assets/partners_sponsors/rolandberger_logo.png",
                alt: "Roland Berger",
                type: "partners_collaborated_with",
            },
            {
                href: "https://quantco.com/",
                src: "/assets/partners_sponsors/quantco_logo.png",
                alt: "QuantCo",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.aleph-alpha.com/",
                src: "/assets/partners_sponsors/alephalpha.png",
                alt: "Aleph Alpha",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.cherry.vc/",
                src: "/assets/partners_sponsors/cherryVC.png",
                alt: "Cherry VC",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.speedinvest.com/",
                src: "/assets/partners_sponsors/speedinvest.png",
                alt: "Speedinvest",
                type: "partners_collaborated_with",
            },
            {
                href: "https://earlybird.com/",
                src: "/assets/partners_sponsors/earlybirdvc.png",
                alt: "Earlybird VC",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.etventure.de/ey/",
                src: "/assets/partners_sponsors/EYetventure.png",
                alt: "EY Etventure",
                type: "partners_collaborated_with",
            },
            {
                href: "https://jina.ai/",
                src: "/assets/partners_sponsors/jina_ico.png",
                alt: "Jina AI",
                type: "partners_collaborated_with",
            },
            {
                href: "https://wandb.ai/site",
                src: "/assets/partners_sponsors/wandb_logo.png",
                alt: "Weights and Biases",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.mri.tum.de/",
                src: "/assets/partners_sponsors/Klinikum_rechts_der_Isar_logo.svg",
                alt: "Klinikum Rechts der Isar",
                type: "partners_collaborated_with",
            },
            {
                href: "https://www.avimedical.com/",
                src: "/assets/partners_sponsors/avi_medical_logo.png",
                alt: "Avi Medical",
                type: "partners_collaborated_with",
            },

            // initiatives_collaborated_with
            {
                href: "https://www.cdtm.de/",
                src: "/assets/partners_sponsors/cdtm_logo.png",
                alt: "CDTM",
                type: "initiatives_collaborated_with",
            },
            {
                href: "https://www.linkedin.com/company/entreprenow-community/",
                src: "/assets/partners_sponsors/entreprenow.jpg",
                alt: "EntrepreNow Community",
                type: "initiatives_collaborated_with",
            },
            {
                href: "https://www.startmunich.de/",
                src: "/assets/partners_sponsors/start_munich.png",
                alt: "Start Munich",
                type: "initiatives_collaborated_with",
            },
            {
                href: "https://www.linkedin.com/company/knust-coe-ic/about/",
                src: "/assets/partners_sponsors/knust_innovationcentre.jpg",
                alt: "Knust CoE IC",
                type: "initiatives_collaborated_with",
            },
            {
                href: "https://gdsc.community.dev/technical-university-of-munich/",
                src: "/assets/partners_sponsors/gdsc.png",
                alt: "GDSC",
                type: "initiatives_collaborated_with",
            },
            {
                href: "https://analytics-club.org/wordpress/",
                src: "/assets/partners_sponsors/eth_ac.jpg",
                alt: "ETH Analytics Club",
                type: "initiatives_collaborated_with",
            },
            {
                href: "https://q-summit.com",
                src: "/assets/partners_sponsors/qsummit.png",
                alt: "QSummit",
                type: "initiatives_collaborated_with",
            },
            {
                href: "https://enactus-muenchen.de/",
                src: "/assets/partners_sponsors/enactus.jpg",
                alt: "Enactus Munich",
                type: "initiatives_collaborated_with",
            },
            {
                href: "https://www.linkedin.com/company/initiatives-for-humanity/",
                src: "/assets/partners_sponsors/initiatives_fh.jpg",
                alt: "Initiatives for Humanity",
                type: "initiatives_collaborated_with",
            },
            {
                href: "https://www.mcml.ai",
                src: "/assets/partners_sponsors/MCML_Logo_2.png",
                alt: "MCML",
                type: "initiatives_collaborated_with",
            },

            // strategic_partners
            {
                href: "https://www.nvidia.com",
                src: "/assets/partners/strategic_partners/Nvidia_(logo).svg.png",
                alt: "nvidia",
                width: 130,
                type: "strategic_partners",
            },
            {
                href: "https://baiosphere.org",
                src: "/assets/partners/strategic_partners/baiosphere_logo-1-1.png",
                alt: "baiosphere",
                type: "strategic_partners",
            },
            {
                href: "https://www.appliedai.de/de/",
                src: "/assets/partners_sponsors/appliedai_logo.png",
                alt: "Applied AI",
                type: "strategic_partners",
            },
            {
                href: "https://www.tum-venture-labs.de",
                src: "/assets/partners/strategic_partners/TUMVentureLabs.jpg",
                alt: "TumVentureLabs",
                type: "strategic_partners",
            },

            // enablers_supporters
            {
                href: "https://www.janestreet.com",
                src: "/assets/partners/enablers_and_supporters/120px-Jane_Street_Capital_Logo.svg.png",
                alt: "janestreet",
                type: "enablers_supporters",
            },
            {
                href: "https://www.mcml.ai",
                src: "/assets/partners_sponsors/MCML_Logo_2.png",
                alt: "MCML",
                type: "enablers_supporters",
            },
            {
                href: "https://www.tngtech.com/index.html",
                src: "/assets/partners_sponsors/TNG_logo.png",
                alt: "TNG Tech",
                type: "enablers_supporters",
            },
            {
                href: "https://campusfounders.de/de/",
                src: "/assets/partners/enablers_and_supporters/campus_founders.png",
                alt: "campusfounders",
                width: 120,
                type: "enablers_supporters",
            },
            {
                href: "https://www.merantix.com/",
                src: "/assets/partners/enablers_and_supporters/merantix_black.svg",
                alt: "Merantix",
                type: "enablers_supporters",
            },
            {
                href: "https://www.cdtm.de/",
                src: "/assets/partners_sponsors/cdtm_logo.png",
                alt: "CDTM",
                width: 120,
                type: "enablers_supporters",
            },
            {
                href: "https://www.stmd.bayern.de",
                src: "/assets/partners/enablers_and_supporters/StMD_logo_grey.svg",
                alt: "ministry_for_digital_affairs",
                type: "enablers_supporters",
            },
            {
                href: "https://www.10xfounders.com/",
                src: "/assets/partners_sponsors/10xfounderslogo.png",
                alt: "10x Founders",
                type: "enablers_supporters",
            },
            {
                href: "https://www.burda.com/",
                src: "/assets/partners/enablers_and_supporters/Hubert_Burda_Media_2013_logo.svg.png",
                alt: "HubertBurda",
                type: "enablers_supporters",
            },
            {
                href: "https://kipark.de",
                src: "/assets/partners/enablers_and_supporters/KIPark.png",
                alt: "KIPark",
                type: "enablers_supporters",
            },
            {
                href: "https://www.startmunich.de/",
                src: "/assets/partners_sponsors/start_munich.png",
                alt: "Start Munich",
                type: "enablers_supporters",
            },
            {
                href: "https://www.aimunich.com",
                src: "/assets/partners/enablers_and_supporters/ai+munich.jpeg",
                alt: "ai+munich",
                type: "enablers_supporters",
            },

            // project_partners
            {
                href: "https://www.esa.int",
                src: "/assets/partners/project_partners/1ESA_logo.svg.png",
                alt: "ESA",
                type: "project_partners",
            },
            {
                href: "https://www.gresearch.com",
                src: "/assets/partners/project_partners/gresearch-logo.png",
                alt: "GResearch",
                width: 100,
                type: "project_partners",
            },
            {
                href: "https://www.bmw.com",
                src: "/assets/partners/project_partners/bmw-7.svg",
                alt: "BMW",
                width: 100,
                type: "project_partners",
            },
            {
                href: "https://cohere.com",
                src: "/assets/partners/project_partners/cohere_logo.svg",
                alt: "Cohere",
                type: "project_partners",
            },
            {
                href: "https://dai.ki",
                src: "/assets/partners/project_partners/daiki.png",
                alt: "Daiki",
                type: "project_partners",
            },
            {
                href: "https://www.genistat.ch/en/",
                src: "/assets/partners/project_partners/Genistat_Logo.png",
                alt: "Genistat",
                type: "project_partners",
            },
            {
                href: "https://www.microsoft.com/de-de/about",
                src: "/assets/partners_sponsors/Microsoft_Logo.png",
                alt: "Microsoft",
                type: "project_partners",
            },

            {
                href: "https://www.burda-forward.de",
                src: "/assets/partners/project_partners/burdaforward-logo.svg",
                alt: "BurdaForward",
                type: "project_partners",
            },
            {
                href: "https://www.unicreditgroup.eu/",
                src: "/assets/partners/project_partners/UniCredit_(logo).svg.png",
                alt: "UniCredit",
                type: "project_partners",
            },
            {
                href: "https://www.ibm.com/de-de",
                src: "/assets/partners_sponsors/ibm_logo.png",
                alt: "IBM",
                type: "project_partners",
            },
            {
                href: "https://www.roche.com",
                src: "/assets/partners/project_partners/Rochee.png",
                alt: "Roche",
                type: "project_partners",
            },
            {
                href: "https://www.muenchen.de",
                src: "/assets/partners/project_partners/muenchen.png",
                alt: "LandeshauptstadtMünchen",
                type: "project_partners",
            },
            {
                href: "https://quantco.com/",
                src: "/assets/partners_sponsors/quantco_logo.png",
                alt: "QuantCo",
                type: "project_partners",
            },
            {
                href: "https://www.avimedical.com/",
                src: "/assets/partners_sponsors/avi_medical_logo.png",
                alt: "Avi Medical",
                type: "project_partners",
            },
        ],
    });

    await prisma.project.createMany({
        data: [
            {
                title: "Recogni - ML on Custom Hardware",
                image: "/assets/industry/project_cards/recogni_white_bg.png",
                description: "Recogni is building a custom chip for perception in autonomous driving. In this project, the team will work on bringing a set of state of the art models to Recogni’s custom hardware.",
                organization: "Recogni",
                organizationLink: "https://www.recogni.com",
                time: "spring 2023",
            },
            {
                title: "Airbus - Big Data Analysis Framework",
                image: "/assets/industry/project_cards/airbus_white_bg.png",
                description: "Building a dynamic mission simulator for the Airbus Aircraft-as-a-Sensor initiative. This simulator will help Airbus to explore and simulate a wide range of Aircraft-as-a-Sensor opportunities. ",
                organization: "Airbus",
                organizationLink: "https://www.airbus.com/en",
                time: "spring 2023",
            },
            {
                title: "Roland Berger - Cloud-based Data Processing",
                image: "/assets/industry/project_cards/rolandberger_industry.png",
                description: "Implementation of cloud-based web services, containing NLP Machine Learning models - <LINK url=https://www.linkedin.com/in/stefanrmmr/ text=Stefan Rummer>, <LINK url=https://www.linkedin.com/in/robin-mittas-a29a11201/ text=Robin Mittas>, <LINK url=https://www.linkedin.com/in/vtq/ text=Tuan-Quang Vuong> built scalable APIs that were deployed to production globally. These enabled Roland Berger to automatically enrich their CRM systems with financial market insights and LinkedIn company data.",
                organization: "Roland Berger",
                organizationLink: "https://www.rolandberger.com/de/",
                time: "fall 2022",
            },
            {
                title: "QuantCo - Virtual Biopsy",
                image: "/assets/industry/project_cards/quantco.jpeg",
                description: "4x stellar students supported QuantCo in their mission to revolutionize the way prostate cancer is detected leveraging ML-based virtual biopsy. <LINK url=https://www.linkedin.com/in/richardgaus/ text=Richard Gaus>, <LINK url=https://www.linkedin.com/in/cedrik-laue-770682203/ text=Cedrik Laue> implemented algorithms for medical image processing, ranging from pre-processing, registration, all the way to the segmentation of MRI data.",
                organization: "QuantCo",
                organizationLink: "https://quantco.com/",
                time: "fall 2022",
            },
            {
                title: "TUM MRI Radiology - Klinikum Rechts der Isar",
                image: "/assets/industry/project_cards/radiologie.png",
                description: "The Institute for Diagnostic and Interventional Radiology performs and evaluates examinations using ultrasound, conventional X-ray technology, CT and MRI. Project participants collaborated with radiologists to learn about the specifics of medical imaging formats (such as DICOM) and the basics of medical knowledge required for the task.",
                organization: "TUM MRI",
                organizationLink: "https://www.mri.tum.de/", // Update if there's an actual link
                time: "fall 2022", // Update if there's an actual date
            },
            {
                title: "TURTLE - Maritime Matchmaking",
                image: "/assets/industry/project_cards/seafarer.png",
                description: "TURTLE empowers seafarers and enables a digital, efficient, and compliant market free from corruption and other illegal and immoral activities. We joined a team of industry professionals building a global online job marketplace that connects ship owners and seafarers directly, work in a fast-growing startup and with strong social impact!",
                organization: "TURTLE",
                organizationLink:
                    "https://www.linkedin.com/company/turtle-gmbh/?originalSubdomain=de",
                time: "spring 2022",
            },
            {
                title: "Leevi Health - Baby Health Monitoring",
                image: "/assets/industry/project_cards/leevi_baby.png",
                description: "During this project we contributed to Leevi's mission of providing digital health solutions for infants. Leevi helps parents accurately understand the wellbeing of their babies through individual insights via a wearable bracelet that collects the babies vital and sleep parameters.",
                organization: "Leevi",
                organizationLink: "https://leevi-health.com/",
                time: "spring 2022",
            },
            {
                title: "Cognote.ai - Medical Speech Recognition",
                image: "/assets/industry/project_cards/prev_cognote.png",
                description: "During this AI project, our team worked broadly on conversational speech recognition technology for the medical domain. This involved the assembly of a German speech dataset, training (and/or fine-tuning) large modern speech models on our compute infrastructure and evaluating their effectiveness relative to current cloud offerings.",
                organization: "Cognote",
                organizationLink: "https://www.cognote.ai/",
                time: "spring 2022",
            },
            {
                title: "Presize.ai - Clothing size recommender systems",
                image: "/assets/industry/project_cards/presize_resize.jpg",
                description: "We created a recommender system for clothing sizes and benchmarked it against Presize’s own technology. This way we actively contributed of Presize's s vision of reducing the amount of paercel-returns.",
                organization: "presize.ai",
                organizationLink: "https://www.presize.ai/",
                time: "fall 2021",
            },
            {
                title: "Heimkapital - Real estate price prediction",
                image: "/assets/industry/project_cards/heimkapital_resized.jpg",
                description: "We developed solutions to make an impact on the financial independence of homeowners by implementing an AI that can predict real estate prices based on population data.",
                organization: "Heimkapital",
                organizationLink:
                    "https://www.heimkapital.de/?gclid=Cj0KCQjwqKuKBhCxARIsACf4XuFcI2JnKY0mJUc5_abF6uqJlJyi1Uqi291fM6qQD6V0WSy3aKzhFGMaArIQEALw_wcB",
                time: "fall 2021",
            },
            {
                title: "DynaGroup & Veritas PR - NLP paraphrasing",
                image: "/assets/industry/project_cards/dyna_group_resize.jpg",
                description: "We created an NLP-based system that can paraphrase sequences of text while reliably preserving the meaning - making online content creation easier and less-time consuming for smaller companies and non-profits.",
                organization: "DynaGroup",
                organizationLink: "https://www.dynagroup.de/",
                time: "fall 2021",
            },
        ],
    });

    // Creation of some example startups
    const airbnb_founder = await prisma.person.create({
        data: {
            id: "brian-chesky",
            firstName: "Brian",
            lastName: "Chesky",
            role: "CEO, Co-founder",
            imgSrc: "",
            imgAlt: "Brian Chesky",
            x: "https://twitter.com/bchesky",
            linkedin: "https://www.linkedin.com/in/brian-chesky-5b695b",
            type: "founder"
        }
    })
    const airbnb_startup = await prisma.startup.create(
        {
            data: {
                id: "airbnb",
                name: "Airbnb",
                description: "Airbnb is an online marketplace for short-term homestays and experiences.",
                about: "Airbnb has revolutionized the travel industry by allowing homeowners to rent out their spaces to travelers. Founded in 2008, the company has grown from a small startup to a global phenomenon, operating in over 220 countries and regions. Airbnb's platform not only provides unique accommodation options for travelers but also empowers hosts to earn extra income. The company's success lies in its ability to create a trusted community marketplace and its continuous innovation in the travel and hospitality sector.",
                website: "https://www.airbnb.com",
                logo: "/assets/e-lab/startups/Airbnb_Logo_Bélo.svg.png",
                industry: "Travel & Hospitality",
                batch: "W09",
                tag: "Is Hiring",
                founders: {
                    connect: { id: airbnb_founder.id }
                }
            }
        }
    )
    const tesla_startup = await prisma.startup.create(
        {
            data: {
                id: "tesla",
                name: "Tesla",
                description: "Tesla, Inc. is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses. Founded in 2003 by a group of engineers who wanted to prove that people didn’t need to compromise to drive electric – that electric vehicles can be better, quicker and more fun to drive than gasoline cars.",
                website: "http://tesla.com",
                logo: "/assets/e-lab/startups/Tesla_Motors.svg.png",
                industry: "Automotive",
                batch: "S10",
                tag: "Is Hiring",
            }
        }
    )
    await prisma.job.createMany({
        data: [
            {
                startupId: airbnb_startup.id,
                name: "Staff Software Engineer, Checkr Pay",
                location: "San Francisco, CA",
                salary: "$200,000 - $250,000 a year",
                experience: "5+ years",
            },
            {
                startupId: tesla_startup.id,
                name: "Senior Autopilot Software Engineer",
                location: "Palo Alto, CA",
                salary: "$180,000 - $230,000 a year",
                experience: "4+ years",
            }
        ],
    });
    await prisma.latestNews.createMany({
        data: [
            {
                startupId: airbnb_startup.id,
                message: "Airbnb is hiring a Staff Software Engineer, Checkr Pay in San Francisco, CA. The salary is $200,000 - $250,000 a year and requires 5+ years of experience.",
                link: "https://www.theverge.com/2023/5/9/23716903/airbnb-ceo-brian-chesky-rooms-ai-travel-future-of-work-summer-2023",
                date: new Date("2023-05-09"),
            },
            {
                startupId: airbnb_startup.id,
                message: "Airbnb is hiring a Staff Software Engineer, Checkr Pay in San Francisco, CA. The salary is $200,000 - $250,000 a year and requires 5+ years of experience.",
                link: "https://www.theverge.com/2023/5/9/23716903/airbnb-ceo-brian-chesky-rooms-ai-travel-future-of-work-summer-2023",
                date: new Date("2023-06-09"),
            },
            {
                startupId: tesla_startup.id,
                message: "Tesla is looking for a Senior Autopilot Software Engineer in Palo Alto, CA. The salary range is $180,000 - $230,000 a year with a requirement of 4+ years of experience.",
                link: "https://www.tesla.com/blog/autopilot-future-of-driving",
                date: new Date("2023-04-15"),
            }, {
                startupId: tesla_startup.id,
                message: "Tesla announces a new project to expand its energy storage solutions, aiming to revolutionize the electric grid.",
                link: "https://www.tesla.com/blog/energy-storage-solutions",
                date: new Date("2023-05-20"),
            }
        ],
    });
    await prisma.metric.createMany({
        data: [
            {
                startupId: airbnb_startup.id,
                key: "Year Founded",
                value: "2008",
            },
            {
                startupId: airbnb_startup.id,
                key: "Valuation",
                value: "$113 billion",
            },
            {
                startupId: airbnb_startup.id,
                key: "Funding Raised",
                value: "$6.4 billion",
            },
            {
                startupId: airbnb_startup.id,
                key: "Employees",
                value: "6,132",
            },
            {
                startupId: tesla_startup.id,
                key: "Year Founded",
                value: "2008",
            },
            {
                startupId: tesla_startup.id,
                key: "Valuation",
                value: "$113 billion",
            },
            {
                startupId: tesla_startup.id,
                key: "Funding Raised",
                value: "$6.4 billion",
            },
            {
                startupId: tesla_startup.id,
                key: "Employees",
                value: "6,132",
            },
        ],
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally( () => {
        void prisma.$disconnect();
    });
