export const navItems = [
    {
        name: "Home",
        path: "/",
        hoverLink: []
    },
    {
        name: "About",
        path: "/about",
        hoverLink: [
            { linkName: "About", path: "/about" },
            { linkName: "Advisory-committee", path: "/about/advisorycommittee" },
            { linkName: "Governing-body", path: "/about/governingbody" },
        ]
    },
    {
        name: "Membership",
        path: "/membership/individual",
        hoverLink: [
            { linkName: "Individual Membership", path: "/membership/individual" },
            { linkName: "Institutional Membership", path: "/membership/institutional" },
        ]
    },
    {
        name: "Chapters",
        path: "/chapters/about",
        hoverLink: [
            { linkName: "About Chapter", path: "/chapters/about" },
            { linkName: "Students Chapter", path: "/chapters/students" }
        ]
    },
    {
        name: "Awards",
        path: "/awards/2025",
        hoverLink: [
            { linkName: "Award 2025", path: "/awards/2025" },
            { linkName: "Award 2024", path: "/awards/2024" }
        ]
    },
    {
        name: "Events",
        path: "https://www.mttf.in/events-2/",
        hoverLink: []
    },
    {
        name: "Services",
        path: "/Services/dataanalytics",
        hoverLink: [
            { linkName: "Data Analytics", path: "/Services/dataanalytics" },
            
        ]
    },
    
];
