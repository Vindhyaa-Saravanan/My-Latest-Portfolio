import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    const person = {
        firstName: 'Vindhyaa',
        lastName:  'Saravanan',
        get name() {
            return `${this.firstName} ${this.lastName}`;
        },
        role:      t("person.role"),
        avatar:    '/images/avatar.jpg',
        location:  'Europe/London',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
        languages: ['English', 'Hindi', 'Tamil']  // optional: Leave the array empty if you don't want to display languages
    }

    const newsletter = {
        display: false,
        title: <>{t("newsletter.title", {firstName: person.firstName})}</>,
        description: <>{t("newsletter.description")}</>
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
        label: t("home.label"),
        title: t("home.title", {name: person.name}),
        description: t("home.description", {role: person.role}),
        headline: <>{t("home.headline")}</>,
        subline: <>{t("home.subline")}</>
    }

    const about = {
        label: t("about.label"),
        title: t("about.label"),
        description: t("about.description", {name: person.name, role: person.role, location: person.location}),
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
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
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
            title: t("about.technical.title"),
            skills: [
                {
                    title: 'Figma',
                    description: <>{t("about.technical.skills.Figma.description")}</>,
                    images: [
                        {
                            src: '/images/projects/project-01/cover-02.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                        {
                            src: '/images/projects/project-01/cover-03.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
                    title: 'Next.js',
                    description: <>{t("about.technical.skills.Nextjs.description")}</>, // "." not accepted in next-intl namespace
                    images: [
                        {
                            src: '/images/projects/project-01/cover-04.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                    ]
                }
            ]
        }
    }

    const blog = {
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description", {name: person.name})
        // Create new blog posts by adding a new .mdx file to app/blog/posts
        // All posts will be listed on the /blog route
    }

    const work = {
        label: t("work.label"),
        title: t("work.title"),
        description: t("work.description", {name: person.name})
        // Create new project pages by adding a new .mdx file to app/blog/posts
        // All projects will be listed on the /home and /work routes
    }

    const gallery = {
        label: t("gallery.label"),
        title: t("gallery.title"),
        description: t("gallery.description", {name: person.name}),
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
        ]
    }
    return {
        person,
        social,
        newsletter,
        home,
        about,
        blog,
        work,
        gallery
    }
};

export { createI18nContent };