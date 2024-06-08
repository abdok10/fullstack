'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"

const HeroSection = () => {
  const router = useRouter()

  return (
    <section className="h-screen flex flex-col items-center justify-center gap-[30px]">
      <div
          className="flex flex-col text-center gap-[40px] items-center w-[600px]"
          style={{
              position : 'relative',
          }}
      >
          <h1
              style={{ 
                  fontSize:"45px", 
                  letterSpacing:"2px" ,
                  width:'800px'
              }}
              className={`font-semibold w-[500px]`}
          >
              Introducing the future Donations With <br className="hidden lg:block"/>
              Support Our <span className="text-[#3572EF]">Project</span>
          </h1>
          <p
              className="text-muted-foreground text-[20px] tracking-[1px]"
              style={{ width : '800px' }}
          >
            Your support helps us maintain and improve our web application. 
            Donations fund server costs, development time, and feature enhancements 
            to ensure we continue providing value to our users.
          </p>
          <div
          >
            <Button
                className='w-[300px] relative' variant='outline'
                onClick={() => router.push('/login')}
            >
                Get Started
            </Button>
          </div>
      </div>
    </section>
  )
}

export default HeroSection