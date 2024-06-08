import Image from 'next/image'
import logo from '@/public/plura-logo.svg'
import { Dancing_Script } from 'next/font/google';
import { cn } from "@/lib/utils";
import { icons__footer } from "@/constants/index";
import Link from "next/link";


const font = Dancing_Script({ 
    subsets: ["latin"],
    weight : ['400', '500', '600', '700'] 
});

const Footer = () => {
    return (
        <footer 
            className="px-6 sm:px-10 lg:px-16 flex flex-col pb-[40px] gap-[25px]" 
            style={{
                position : 'relative',
            }}
        >
            <div 
                className="py-[30px] flex flex-col lg:flex-row items-center justify-center lg:justify-between p-[30px] gap-[23px]"
            >
                <Link href={"/"} className="flex items-center gap-2">
                    <img
                        src={"./plura-logo.svg"}
                        width={40}
                        height={40}
                        alt="plura logo"
                    />
                    <span className="text-xl font-bold"> Serve <span className="text-[#3572EF]">Together.</span></span>
                </Link>
                <div className="flex items-center gap-[30px]">
                    <h1 className={cn("text-[16px] font-semibold", font.className)}>
                        &copy; 2024 Mehdi & Abdessamad, Inc.
                    </h1>
                    <div className="flex items-center gap-[10px]">
                        {
                            icons__footer.map((item) => {
                                const { icon, id, url } = item
                                return (
                                    <Link 
                                        href={url} 
                                        key={id} 
                                        className="text-muted-foreground hover:text-slate-700 text-[20px] transition-all hover:scale-75"
                                        target={"_blank"}
                                        >
                                            {icon}
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer