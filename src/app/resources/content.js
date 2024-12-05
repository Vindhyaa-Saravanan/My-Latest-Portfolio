import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Vindhyaa',
    lastName:  'Saravanan',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/London',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Hindi', 'Tamil']  // optional: Leave the array empty if you don't want to display languages
}


const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Vindhyaa-Saravanan',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/vindhyaa-saravanan/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:vindhyaa.saravanan@yahoo.in',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio of work as a ${person.role}`,
    headline: <>Aspiring software engineer</>,
    subline: <>I'm Vindhyaa, an aspiring software engineer and integrated Masters student at University of Leeds, with cybersecurity and cloud security experience, and an avid interest in AI/ML and data science. Proficient in Python with a focus on delivering real customer impact.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Vindhyaa is a UK-based Final-year Computer Science student skilled in cybersecurity, cloud security experience, hands-on AI/ML, and software development.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Schneider Electric',
                timeframe: 'June 2024 - August 2024',
                role: 'Process Automation Intern',
                achievements: [
                    <>Worked with virtualization and application in industrial virtualized cybersecurity solution for SCADA systems.</>,
                    <>Facilitated Delivery Quality procedures and factory acceptance testing, contributed extensively to documentation.</>,
                    <>Tested SCADA software with simulated RTU devices to evaluate configuration accuracy and response times, improving testing efficiency by 20%.</>,
                    <>Created robust documentation for virtualized Acronis cybersecurity solution for emergency shutdown systems.</>,
                ],
                images: [ ]
            },
            {
                company: 'AVEVA Solutions',
                timeframe: 'June 2023 - August 2023',
                role: 'R&D Member of Staff - Apprentice',
                achievements: [
                    <>Built Security and Platform Operations DevOps team-specific centralized visualization Jira dashboard, improving team
                    performance and visibility.</>,
                    <>Monitored security alerts on Microsoft Azure Defender and AWS GuardDuty, improving team response time and incident
                    resolution efficiency.</>,
                    <>Performed a cost analysis of existing AWS Backup solutions and contributed changes to Terraform IaaS codebase in Azure
                    DevOps that reduced backup costs by 15%.</>
                ],
                images: [ ]
            },
            {
                company: 'Schneider Electric',
                timeframe: 'July 2022 - September 2022',
                role: 'Cybersecurity Intern',
                achievements: [
                    <>Gained hands-on experience in industrial control systems, network security, and cybersecurity within critical infrastructure.</>,
                    <>Delivered a training presentation on IEC-62443 cybersecurity standards to ensure compliance in industrial environments.</>,
                    <>Led a team of 9 in a qualitative analysis of SaaS licensing models for service providers, presented to company VPs, and secured 1st
place for presentation skills and content quality.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'University of Leeds',
                description: <>MEng BSc Computer Science - On track for a First-Class Honours degree.</>
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Python',
                description: <>Proficient in Python with experience in Flask, Django, and Streamlit for web development and data science applications.</>,
            },
            {
                title: 'Java',
                description: <>Experienced in Java for building robust backend systems and applications.</>,
            },
            {
                title: 'JavaScript',
                description: <>Skilled in JavaScript, with HTML, CSS and including frameworks like Next.js and React, for creating dynamic web applications.</>,
            },
            {
                title: 'SQL',
                description: <>Adept at using SQL for database management and data manipulation.</>,
            },
            {
                title: 'TensorFlow & Keras',
                description: <>Hands-on experience with TensorFlow and Keras for developing AI and machine learning models.</>,
            },
            {
                title: 'Microsoft Azure & AWS',
                description: <>Experienced with cloud platforms like Microsoft Azure and AWS for deploying scalable applications.</>,
            },
            {
                title: 'Git & GitHub',
                description: <>Proficient in version control using Git and GitHub for collaborative software development.</>,
            }
        ]
    }
}

const work = {
    label: 'Projects',
    title: 'My projects',
    description: `Software projects by ${person.name}`
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo gallery by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-15.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-16.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-17.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-18.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-19.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-20.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-21.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-22.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-23.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-24.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-25.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-26.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-27.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-28.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-29.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-30.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-31.jpg',
            alt: 'image',
            orientation: 'vertical'
        }
    ]
}

export { person, social, home, about, work, gallery };