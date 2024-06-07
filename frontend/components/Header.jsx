import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

function Header() {
    return (
        <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
            <Link href={"/"} className="flex items-center gap-2">
                <img
                    src={"./plura-logo.svg"}
                    width={40}
                    height={40}
                    alt="plura logo"
                />
                <span className="text-xl font-bold"> ExamBuilder.</span>
            </Link>
            <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <ul className="flex items-center justify-center gap-8">
                    <Link
                        href={"/"}
                        className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                        aria-current="page"
                    >
                        Home
                    </Link>
                    <Link
                        href={'/login'}
                        className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Login
                    </Link>
                </ul>
            </nav>
            <aside className="flex gap-2 items-center">
                <Link
                    href={'/login'}
                    className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
                >
                    Login
                </Link>
                <Link
                    href={'/register'}
                    className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
                >
                    Register
                </Link>
                <ModeToggle />
            </aside>
        </div>
    );
}
export default Header;
