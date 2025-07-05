import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { services } from '../projectdata'
const Hero = () => {
  
  useGSAP(() => {
    const profSplit = new SplitText('#profession', {type:'chars, words'});
    const paragraphSplit = new SplitText('#subtitle', {type: 'lines'})
    
    gsap.from(profSplit.chars, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    })

    gsap.from(paragraphSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.70,
      delay: 2.3,
    })

    gsap.from("#gilly",
      {
        xPercent:500,
        duration:1.8,
        ease: 'expo.out'
      }
    )

        gsap.from("#prof-text",
      {
        xPercent:-500,
        duration:1.8,
        ease: 'expo.out'
      }
    )

    const serviceAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#intro',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
        pin: true,
      }
    })

    serviceAnimation.to('#hero-text', 
      {
        opacity: 0.3,
        duration: 500,
        ease: "power1.out"
      }
    )

    serviceAnimation.fromTo('#service',
      {
        scale: 0,
        width: '10vw'
      },
      {
        yPercent: -20,
        width: '100vw',
        scale: 1,
        borderRadius: '20px',
        duration: 500,
        ease: 'expo.out'
      }
    )

  },[])
  return (
    <>
    <main id='intro' className='bg-[#F3DADF]'>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <div className='first_image hidden lg:flex opacity-20 ml-20 rounded-full size-21' alt="gilly" />
          <div id='hero-text' className='text-4xl w-full lg:w-1/2 flex justify-center items-center chillax font-bold'>
            <h1 id='profession' className='flex flex-wrap'>Freelance - Copywriter</h1>
          </div>
        </div>
        <div className='flex h-dvh lg:justify-between '>
          <div className='rounded-full lg:w-1/5 w-2/5 h-1/3 lg:h-2/5 top-23 left-21 flex animate-bounce [animation-duration:30s] opacity-30 relative first_image'></div>
          <div className='text-black refin absolute md:flex md:w-full lg:w-2/5 top-25 lg:top-35 ml-5 '>
            <div id="hero-text" className='flex flex-col justify-center items-center sm:gap-5 md:gap-20 lg:gap-5 h-1/2'>
              <h1 id='prof-text' className='text-6xl md:text-8xl lg:text-5xl chillax flex gap-2 items-center justify-center flex-wrap w-full md:w-3/4'><p>Words That</p>  <span className="bg-gradient-to-r from-blue-600 to-purple-600  bg-clip-text text-transparent"> Convert</span>  </h1>
              <div id='subtitle' className='text-2xl  synonym text-foreground mx-auto flex flex-col flex-wrap w-full lg:w-4/5'>
                <h2 className=' md:px-[50px] lg:px-0 text-center'>Copywriter & Brand consultant helping businesses craft compelling narratives<br />  that drive results.</h2>
                <div className='flex justify-center items-center sm:gap-15 lg:gap-5 text-bold mt-15'>
                  <Button variant='outline' className='rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-2 px-5'>View My Work</Button>
                  <Button variant='outline' className='rounded-lg border bg-transparent hover:bg-[#000010] hover:text-white px-4 py-2'>Get in Touch</Button>
                </div>
              </div>
            </div>
          </div>
          <div id='gilly' className='hidden lg:flex w-2/5 h-3/5'>
            <div className='rounded-r-full rounded-tl-full w-full h-full top-27 relative first_image'></div>
            <img  src="/images/removebg-1.png" className='absolute  -ml-20' alt="geelyann--img" />
            </div> 
            <img src="/images/removebg-4.png" className='absolute lg:flex hidden bottom-2 right-11 size-48' alt="squiggly"/>
        </div>
      </div>
    </main>

    <section id='service' className='flex justify-center items-center pb-30 relative bg-[#fdf8f7] text-black'>
      <div className='mt-5'>
        <div className='text-[#444]'>
          <div className='flex flex-col md:flex-row justify-around gap-5 p-10'>
            <div className='flex flex-col md:w-1/2 flex-wrap gap-5'>
            <h1 className='text-5xl md:text-[7vw] chillax leading-none text-start '>Crafting Stories That <br /> <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>Sell</span></h1>
            <h2 className='text-xl text-wrap'>With over 5 years of experience in copywriting and brand strategy, I help businesses find their unique voice and communicate it effectively across all touchpoints.</h2>
            <h2 className='text-xl text-wrap'>From startups to Fortune 500 companies, I've helped brands increase conversions, build trust, and create lasting connections with their audiences.</h2>
            <div className='flex gap-10'>
              <div className="flex flex-col gap-5">
                <h1 className='telma-bold text-2xl'>50+</h1>
                <h2>Projects completed</h2>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className='telma-bold text-2xl'>30%</h1>
                <h2>Avg. Conversion Increase</h2>
              </div>
            </div>
            </div>

            <div className="md:w-1/2 h-full">
              <img 
              className='object-cover h-3/4 w-11/12 shadow-2xl rounded-xl'
              src="images/gil-2.jpg" alt="gilly-img-2" />
            </div>

          </div>
          <div className="mt-10 flex md:flex-row flex-col px-10 justify-center items-center gap-10 chillax">
            <h1 className="md:text-8xl text-5xl flex flex-wrap md:w-1/2">
              Services That Shape Your Brand
            </h1>
            <h2 className="telma-light text-muted-foreground flex text-2xl md:w-1/2">
              Here's how i help you win
            </h2>
          </div>
          <div className='p-6 rounded-2xl flex flex-col gap-10 mt-10'>

            <div className='grid lg:grid-cols-2 gap-10'>
              {services.map(({title,description,format,media})=> (
             <Card key={title} className='flex group w-full bg-[#ede9f6] border-0 shadow-lg hover:shadow-xl gap-5 h-[90dvh] rounded-2xl'>
              {format === 'mp4' ? (
                <video 
                className=' h-1/2 object-cover m-3  rounded-2xl' 
                src={`videos/${media}.mp4`} 
                autoPlay
                loop
                muted
                />
              ) : (
                <img 
                className=' h-1/2 object-cover m-3 rounded-2xl' 
                src={`images/${media}.jpg`} alt="image" />
              )}
              <CardContent className='text-[#444] ml-5 flex flex-col gap-5'>
              <h2 className='text-5xl text-bold'>{title}</h2>
              <p className='text-xl text-muted-foreground flex flex-wrap w-full'> 
                {description}
              </p>
              <div>
                <Button variant='outline' className='p-3 text-black opacity-0 group-hover:opacity-90 mt-10 group-hover:mt-5 duration-200 rounded-lg '>
                  See my work
                </Button>
              </div>
              </CardContent>
             </Card>
              ))}
            </div>
        
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Hero