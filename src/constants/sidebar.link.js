import {
    Calendar,
    Gift,
    House,
    Settings,
    SquareChartGantt,
} from "lucide-react";

export const sidebarLink = [
    {
        id: 1,
        icon: <House size={20} />,
        label: "Home",
        href: "/",
    },
    {
        id: 2,
        icon: <Gift size={20} />,
        label: "Facilities",
        href: "/facilities",
    },
    {
        id: 3,
        icon: <Calendar size={20} />,
        label: "Bookings Facility",
        href: "/bookings",
    },
    {
        id: 4,
        icon: <SquareChartGantt size={20} />,
        label: "Manage Facility",
        href: "/facilities/manage",
    },
    {
        id: 5,
        icon: <Settings size={20} />,
        label: "Settings",
        href: "",
    },
];
