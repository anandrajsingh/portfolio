"use client"

import { usePathname } from "next/navigation";


const NavigationSection = () => {

    const currentPath = usePathname()

    const navItems = [
        {
            name: "Index",
            url: "/"
        },
        {
            name: "Projects",
            url: "/projects"
        },
        {
            name: "Blogs",
            url: "/blogs"
        },
        {
            name: "Resources",
            url: "/resources"
        },
    ];

    return (
        <header className="flex justify-center items-center py-4">
            <nav>
                <ul className="flex gap-6 text-lg font-medium group">
                    {navItems.map((item) => (
                        <li key={item.url} className="relative">
                            <a
                                href={item.url}
                                className={`px-4 py-2 rounded-sm transition-all duration-300
                                ${currentPath === item.url ? "bg-black text-white pointer-events-none" : "text-black hover:bg-black hover:text-white"}
                                ${currentPath === item.url ? "group-hover:bg-transparent group-hover:text-black " : ""}
                                `}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default NavigationSection;
