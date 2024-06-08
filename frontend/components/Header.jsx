'use client'

import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavbarLinks } from './../constants/index';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";

function Header() {
    return (
        <nav className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10 backdrop-blur-3xl">
            <div className="hidden md:flex gap-[80px]">
                <Link href={"/"} className="flex items-center gap-2">
                    <img
                        src={"./plura-logo.svg"}
                        width={40}
                        height={40}
                        alt="plura logo"
                    />
                    <span className="text-xl font-bold"> Serve <span className="text-[#3572EF]">Together.</span></span>
                </Link>
                <ul className="flex items-center gap-[40px]">
                    {
                        NavbarLinks.map((item) => {
                            const { id, route, link } = item
                            return (
                                <li className="text-muted-foreground text-[16px]" key={id}>
                                    <Link
                                        href={route}
                                    >
                                        { link }
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            {/* Mobile Navbar */}
            <div className="block md:hidden">
                <Sheet className="block md:hidden">
                    <SheetTrigger>
                        <Menu className="w-5 h-5 object-contain" />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetTitle>
                            <Link href={"/"} className="flex items-center gap-2">
                                <img
                                    src={"./plura-logo.svg"}
                                    width={40}
                                    height={40}
                                    alt="plura logo"
                                />
                                <span className="text-xl font-bold"> Serve <span className="text-[#3572EF]">Together .</span></span>
                            </Link>
                        </SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col items-center h-full">
                            <ul className="flex flex-col items-center justify-center gap-[10px]">
                                {
                                    NavbarLinks.map((item) => {
                                        const { id, route, link } = item
                                        return (
                                            <li className="text-[17px]" key={id}>
                                                <Link
                                                    href={route}
                                                >
                                                    { link }
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <ModeToggle />
                        </div>
                    </SheetContent>
                </Sheet>

            </div>
            <div className="flex gap-2 items-center">
                <ModeToggle />
            </div>
        </nav>
    );
}
export default Header;
