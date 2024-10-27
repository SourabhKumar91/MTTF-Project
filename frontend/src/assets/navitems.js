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
            { linkName: "Governing-body", path: "/about/governingbody" },
            { linkName: "Advisory-committee", path: "/about/advisorycommittee" },
            { linkName: "Coordinators", path: "/about/coordinators" }
        ]
    },
    {
        name: "Membership",
        path: "/membership/individual",
        hoverLink: [
            { linkName: "Individual Membership", path: "/membership/individual" },
            { linkName: "Institutional Membership", path: "/membership/institutional" },
            { linkName: "MTTF Community", path: "/membership/community" }
        ]
    },
    {
        name: "Chapters",
        path: "/chapters",
        hoverLink: [
            { linkName: "About Chapter", path: "/chapters/about" },
            { linkName: "Students Chapter", path: "/chapters/students" }
        ]
    },
    {
        name: "Awards",
        path: "/awards",
        hoverLink: [
            { linkName: "Award 2025", path: "/awards/2025" },
            { linkName: "Award 2024", path: "/awards/2024" }
        ]
    },
    {
        name: "Events",
        path: "/events",
        hoverLink: []
    }
];
