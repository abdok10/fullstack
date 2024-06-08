'use client'

import animation from '@/public/animation_about_page.json'
import Lottie from 'react-lottie'
import { cn } from '@/lib/utils';
import { Dancing_Script } from 'next/font/google';
import { motion } from 'framer-motion';
import { LayoutGridDemo } from './../components/AboutCards';
import { fadeIn } from '@/lib/motion';

const font = Dancing_Script({
    subsets: ["latin"],
    weight : ['400', '500', '600', '700'] 
});

const About = () => {
    return (
        <section 
            id="about" 
            className="min-h-screen flex flex-col px-6 sm:px-10 lg:px-16"
        >

            <div 
                className="flex flex-col items-center justify-center gap-[20px] w-[100%]"
            >
                <div 
                    className="flex flex-col gap-[10px]"
                >
                    <motion.h1
                        style={{
                            fontSize:'50px',
                            letterSpacing:'2px',
                            color:'#3ABEF9' 
                        }}
                        variants={fadeIn("left", "spring", 0.4, 0.6)}
                        initial="hidden"
                        whileInView='show'
                        className={cn(`text-center text-black font-bold text-[40px] tracking-[2px]"`, font.className)}
                    >
                        ServeTogether
                    </motion.h1>
                    <motion.p 
                        variants={fadeIn("right", "spring", 0.5, 0.7)}
                        initial="hidden"
                        whileInView='show'
                        className="text-center text-muted-foreground text-[16px]"
                        style={{ width : '850px'}}
                    >
                        The donation page aims to provide users with an easy and secure way to support 
                        the web application. Donations help fund ongoing development, cover server 
                        and hosting costs, and enable the team to add new features, improve security, 
                        and enhance user experience.
                    </motion.p>
                </div>
                <motion.div
                    className="animation_about"
                    variants={fadeIn("down", "spring", 0.5, 0.7)}
                    initial="hidden"
                    whileInView='show'
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
                </motion.div>
            </div>
            
            <div 
                className='flex flex-col lg:flex-row justify-center lg:justify-between gap-[50px] w-full'
            >
                {/* TODO : CARDS ACERNITY UI */}
                <LayoutGridDemo />
            </div>
        </section>
    )
}

export default About