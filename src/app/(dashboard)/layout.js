"use client";

import "../globals.css";

import { RiMenu2Line, RiCloseFill } from "react-icons/ri";
import { FiBell, FiPlus } from "react-icons/fi";
import { useState } from "react";
import { sidebarLink } from "@/constants/sidebar.link";
import { LogOut } from "lucide-react";

import avatar from "../../assets/img/avatar.jpg";
import upgrade from "../../assets/icons/upgrade.png";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({ children }) {
    const [toggle, setToggle] = useState(false);

    const handleToggleSidebar = () => {
        setToggle((prev) => !prev);
    };

    return (
        <main className="flex h-screen w-full bg-neutral-50">
            <aside
                className={`fixed flex h-screen w-full max-w-64 flex-col items-center border-r border-neutral-200/50 bg-white p-4 transition-all duration-200 ease-linear ${toggle ? "-translate-x-0" : "-translate-x-64 "} z-50 lg:static lg:-translate-x-0`}
            >
                <div className="flex w-full items-center justify-between pb-4 lg:justify-center">
                    <h1 className="text-2xl font-bold text-neutral-950 capitalize">
                        <span className="text-green-600">Nex</span>Arena
                    </h1>
                    <button
                        type="button"
                        aria-label="button"
                        role="button"
                        onClick={handleToggleSidebar}
                        className="mt-1 flex w-fit cursor-pointer items-center justify-center text-2xl text-neutral-950 lg:hidden"
                    >
                        <RiCloseFill />
                    </button>
                </div>
                <div className="mt-5 flex h-full w-full flex-col items-center justify-between">
                    <div className="h-fit w-full">
                        <Link
                            href={"/facilities/create"}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-3 text-base font-medium text-white transition-colors duration-200 ease-linear hover:bg-green-500"
                        >
                            <FiPlus className="text-xl" />
                            Create Facility
                        </Link>
                        <ul className="mt-5 flex w-full flex-col">
                            {sidebarLink.map((link) => (
                                <Link
                                    key={link?.id}
                                    href={link?.href}
                                    className="group inline-flex items-center gap-5 rounded-lg bg-transparent p-3 transition-colors duration-200 ease-linear hover:bg-green-50"
                                >
                                    <span className="inline-flex size-7 items-center justify-center rounded-full text-neutral-500 transition-colors duration-200 ease-linear group-hover:bg-green-100 group-hover:text-green-600">
                                        {link.icon}
                                    </span>
                                    <span className="text-base font-medium text-neutral-500 group-hover:text-green-600">
                                        {link?.label}
                                    </span>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="h-fit w-full">
                        <div className="flex w-full flex-col items-center justify-center gap-3 rounded-lg bg-green-50 p-4">
                            <div className="relative size-8 overflow-hidden">
                                <Image
                                    src={upgrade}
                                    alt="upgrade icons"
                                    fill={true}
                                    className="object-cover"
                                ></Image>
                            </div>
                            <h4 className="text-base font-semibold text-neutral-950">
                                Upgrade to pro
                            </h4>
                            <p className="text-center text-sm font-normal text-neutral-500">
                                Unlock more features and grow your business.
                            </p>
                            <button
                                type="button"
                                aria-label="button"
                                role="button"
                                className="w-full cursor-pointer rounded-md bg-green-600 p-2 text-sm font-medium text-white transition-all duration-200 ease-linear hover:bg-green-500"
                            >
                                Upgrade Now
                            </button>
                        </div>
                        <div className="my-4 h-px w-full bg-neutral-200/50"></div>
                        <button
                            type="button"
                            aria-label="button"
                            role="button"
                            className="group flex w-full cursor-pointer items-center gap-5 rounded-lg bg-transparent p-3 text-neutral-500 transition-colors duration-200 ease-linear hover:bg-red-50"
                        >
                            <span className="inline-flex size-7 items-center justify-center rounded-full text-neutral-500 transition-colors duration-200 ease-linear group-hover:bg-red-100 group-hover:text-red-600">
                                <LogOut size={18} />
                            </span>
                            <span className="text-base font-medium text-neutral-500 group-hover:text-red-600">
                                Logout
                            </span>
                        </button>
                    </div>
                </div>
            </aside>
            <div className="flex-1">
                <header className="flex w-full items-center justify-between border-b border-neutral-200/50 bg-white px-5 py-4 transition-all duration-200 ease-linear md:px-6 lg:px-7">
                    <button
                        type="button"
                        aria-label="button"
                        role="button"
                        onClick={handleToggleSidebar}
                        className="flex w-fit cursor-pointer items-center justify-center text-xl text-neutral-950 lg:cursor-default"
                    >
                        <RiMenu2Line />
                    </button>
                    <div className="flex items-center justify-center gap-6">
                        <button className="relative flex items-center justify-center text-xl text-neutral-950">
                            <FiBell />
                            <span className="absolute -top-1 -right-1 inline-flex size-3.5 items-center justify-center rounded-full bg-green-600 text-xs text-white">
                                1
                            </span>
                        </button>
                        <div className="flex w-fit items-center justify-center gap-2.5">
                            <div className="relative size-8 overflow-hidden rounded-full bg-neutral-200">
                                <Image
                                    src={avatar}
                                    alt="avatar"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="inline-flex flex-col text-xs leading-tight font-medium text-neutral-950">
                                Aisha Rahman
                                <span className="text-xs font-medium text-neutral-500">
                                    Owner
                                </span>
                            </p>
                        </div>
                    </div>
                </header>
                {children}
            </div>
        </main>
    );
}
