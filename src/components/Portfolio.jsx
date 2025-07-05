import React from 'react'
import { projects } from '../projectdata'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'
import {Card, CardContent } from './components/ui/card'
import { ArrowRight, Mail, Phone, Settings2, Star } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { FaLinkedin } from "react-icons/fa";

const Portfolio = () => {
  const filteredProjects = projects.filter((project) => 'testimonial' in project)
  return (
    <>
    <section className='-mt-[500px] px-5'>
      <div> 
        <h1 className='md:text-8xl text-5xl md:mt-15 flex chillax justify-center items-center'>
          Featured Work
        </h1>
        <h2 className='text-2xl telma-light text-center text-muted-foreground flex justify-center items-center mt-10'>
          Proof that the right strategies changes everything
        </h2>
        <div className='mt-16'>
          <div className=''>
            <div className='text-foreground justify-center items-center flex flex-col gap-5'>
              {projects.slice(0,4).map((project) => (
                <div key={project.id} className='group lg:h-[75dvh] gap-2 flex flex-col md:flex-row'>
                  <div  className=' md:w-1/2 flex flex-col flex-wrap mt-6 gap-5 p-5 h-full rounded-lg'>
                    <Badge variant={'outline'} className='text-base'>{project.category}</Badge>
                    <h2 className='text-5xl  '>{project.title}</h2>
                    <p className='text-xl'> {project.description}</p>
                    <div>{project.tags.map((tag)=> (
                      <Badge className='mr-2'>
                        {tag}
                      </Badge>
                    ))}</div>
                    <h2 className='text-base md:text-xl synonym'> {project.strategy}</h2>
                    <CardContent className='text-base border border-green-300 chillax p-3 rounded-xl md:text-xl bg-green-50 text-green-400 flex flex-col synonym'> <span>Result</span> {project.results}</CardContent>
                    <div className='flex'>
                     <Button variant='outline' className='p-3 opacity-0 duration-200 shadow-xl active:mt-1 active:ml-1 active:shadow-none group-hover:opacity-90 chillax rounded-lg '>
                       View Case Study 
                      </Button>
                    </div>
                  </div>
                  <div className='hidden lg:flex md:flex-col md:h-[79dvh]'>
                    <div className='p-2 bg-[#AE7DAC] relative -left-1 -top-4 rounded-full'/>
                    <div className='h-full relative -top-5 rounded-2xl w-2 bg-[#AE7DAC]' />
                  </div>
                  <div className={`${project.color} bg-gradient-to-br rounded-2xl md:w-1/2`}>
                    <div className='text-white p-8 flex flex-col gap-55'>
                      <div className='flex flex-col gap-3'>
                        <h1 className='text-6xl'>{project.icon}</h1>
                        <p>{project.category}</p>
                        <h1 className='text-5xl'>{project.title}</h1>
                      </div>
                      <div className='lg:flex-row flex flex-col justify-between'>
                        <p>{project.client}</p>
                        <p className='text-lg chillax pr-5'>{project.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div >
                <Button className='px-7 mt-5 bg-gradient-to-r from-blue-600 to-purple-600'>
                  View All Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='text-foreground mt-[70px] px-2 flex flex-col gap-15 py-[100px] rounded-2xl bg-accent'>
      <div className='flex flex-col gap-3 justify-center items-center'>
        <h1 className='md:text-8xl text-5xl chillax'>Testimonies</h1>
        <h2 className='text-2xl text-muted-foreground text-center telma-light'>What clients say about working with me</h2>
      </div>
      <div className='relative px-5 md:px-20 max-w-dvw'>
      <Carousel
      plugins={[
        Autoplay({
          delay:5000,
        })
      ]}
       opts={{
        loop: "true"
      }}
       >
        <CarouselContent >
        {filteredProjects.map((project)=> (
          <CarouselItem key={project.id} className={'md:basis-1/3 basis-4/5 lg:basis-1/4'}>
            <Card className="px-2 ">
              <CardContent className={'flex flex-col'}>
                <div className='flex mb-2 gap-0.5'>
                  <Star color='gold' /> 
                  <Star color='gold' /> 
                  <Star color='gold' /> 
                  <Star color='gold' /> 
                  <Star color='gold' />
                </div>
                <h1 className='text-5xl refin'>"</h1>
                <p className='text-muted-foreground synonym'>"{project.testimonial.quote}"</p>
                <div className='flex flex-col mt-3 gap-1'>
                  <h1 className='chillax'>{project.testimonial.author}</h1>
                  <p>{project.testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
        </CarouselContent>
      </Carousel>
      </div>
    </section>

    <section className='py-[100px] px-3' >
      <div className='flex flex-col gap-5 justify-center items-center'>
        <h1 className='text-3xl text-center chillax md:text-5xl'>Ready to Transform Your Brand?</h1>
        <h2 className='text-2xl text-center synonym text-muted-foreground'>Let's discuss how strategic copywriting can elevate your business</h2>
      </div>
      <div className='flex md:flex-row flex-col gap-5 mt-10 items-center justify-center'>
       <a href="mailto:gillianbrendan@gmail.com">
        <Card className={"bg-accent w-[70dvw] md:w-[25dvw] flex flex-col gap-2 justify-center items-center rounded-sm"}>
          <Mail color='blue'/>
          <p>Email</p>
          <p>gillianbrendan@gmail.com</p>
        </Card>
       </a>
       <a href="tel:+2347035747166">
        <Card className={"bg-accent w-[70dvw] md:w-[25dvw] flex flex-col gap-2 justify-center items-center rounded-sm"}>
          <Phone color='blue'/>
          <p>Phone</p>
          <p>+234 (70)35-747-166</p>
        </Card>
       </a>
       <a href="https://www.linkedin.com/in/gillian-brendan-80095b199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
       rel='noopener noreferrer'>
        <Card className={"bg-accent w-[70dvw] md:w-[25dvw] flex flex-col gap-2 justify-center items-center rounded-sm"}>
          <FaLinkedin color='blue' />
          <p>LinkedIn</p>
          <p>/in/gillian</p>
        </Card>
       </a>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <Button variant={'outline'} className='bg-gradient-to-r from-blue-600 to-violet-700 text-white '>
          Start Your Project <ArrowRight />
        </Button>
      </div>
    </section>
    </>
  )
}

export default Portfolio