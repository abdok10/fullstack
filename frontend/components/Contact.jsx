'use client';

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Lottie from 'react-lottie'
import animation from '@/public/contact_animation.json'
import { ContactCard } from './ContactCard';

const Contact = () => {
    return (
        <section className="pb-20">
            <div 
                className="flex items-center justify-center w-full"
            >
                <div 
                    className="rounded-xl border border-dashed border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] contact_card p-4 flex items-center justify-between" 
                    style={{ 
                        width: '1000px', 
                        height : '300px' 
                    }}
                >
                    <div className="flex flex-col items-center justify-center lg:justify-start gap-[30px] m-10 w-[100%] lg:w-[500px]">
                        <div className="info flex flex-col items-center justify-center lg:justify-start gap-[5px] md:gap-[10px] w-full">
                            <Label className='font-semibold text-center lg:text-start text-[20px] tracking-[2px]'>
                                Start now, <br />
                                <span className={cn('text-[44px] tracking-[2px] text-[#864AF9]')}>No strings attached</span> 
                            </Label>
                            <h1 className="text-muted-foreground">
                                A user-friendly contact form is provided, allowing you to input your name, email address, and a message. 
                            </h1>
                            <ContactCard />
                        </div>
                    </div>
                    <div
                        className="flex"
                    >
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true, 
                                animationData: animation
                            }}
                            style={{
                                width : '420px'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact