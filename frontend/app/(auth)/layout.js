import Link from "next/link";
import AuthCard from "@/app/(auth)/AuthCard";
import Image from "next/image";
import "../global.css"
import HeaderAuth from './../../components/HeaderAuth';

export const metadata = {
    title: "Laravel",
};

const Layout = ({ children }) => {
    return (
        <div className="">
            <HeaderAuth />
            <div className="font-sans text-gray-900 dark:text-gray-200 antialiased">
                <AuthCard
                    logo={
                        <Link href="/">
                            <Image
                                src={"./plura-logo.svg"}
                                width={85}
                                height={85}
                                alt="plura logo"
                            />
                        </Link>
                    }
                >
                    {children}
                </AuthCard>
            </div>
        </div>
    );
};

export default Layout;
