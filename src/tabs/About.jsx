import { Badge } from '@/components/components/ui/badge'
import { Button } from '@/components/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/components/ui/card'
import { ArrowRight, Download } from 'lucide-react'
import React from 'react'
import { careerTimeline, myDrive } from '../projectdata.js'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const About = () => {

     useGSAP(() => {
       const projectAnimate = gsap.timeline({
        scrollTrigger: {
          trigger: '#career',
          start: 'top center',
          end: 'bottom bottom',
          scrub: true,
        }
      })
  
      projectAnimate.from("#card", 
        {
          xPercent: 200,
          opacity: 0,
          stagger: 0.5,
          ease: "expo.out",
          duration: 1.5
        }
      )
    },[])

  return (
    <>
    <main className='flex flex-col gap-5 p-10 bg-accent'>
      <Badge variant='outline'>
        About Gillian
      </Badge>
      <div className='md:text-8xl chillax text-3xl'>
        <h1>Turning Words into</h1> 
        <p className='bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>Revenue</p>
      </div>
      <p className='text-muted-foreground'>
        I'm a strategic copywriter and brand consultant with over 5 years 
        of experience helping businesses find their voice and multiply their revenue through the power of persuasive storytelling
      </p>
      <div className='flex gap-5'>
        <Link to="/my-work">
          <Button className='text-white bg-gradient-to-r from-blue-600 to-purple-600'> View My Work </Button>
        </Link>
        <a href='src/assets/Gillian copycv.pdf' download="Gillian_Brendan.pdf">
          <Button variant='outline'> <Download /> Download Resume</Button>
        </a>
      </div>
      <div className="md:w-1/2 h-full">
        <img 
        className='object-cover h-3/4 w-11/12 shadow-2xl rounded-xl'
        src="images/gil-2.jpg" alt="gilly-img-2" />
      </div>
        <div className='flex md:flex-row gap-10 mt-10 md:justify-start md:items-start justify-center items-center flex-col'>
        <div>
          <p className='md:text-3xl text-5xl telma-medium text-center'>
            50+
          </p>
          <p className='text-muted-foreground'>
            Projects Completed
          </p>
        </div>
        <div>
          <p className='md:text-3xl text-5xl telma-medium text-center'>
            30%
          </p>
          <p className='text-muted-foreground'>
            Avg. Conversion Increase
          </p>
        </div>
        <div>
          <p className='md:text-3xl text-5xl telma-medium text-center'>
            5+
          </p>
          <p className='text-muted-foreground'>
            Years Experience
          </p>
        </div>
      </div>
    </main>
    <section className='p-10 my-10 text-muted-foreground flex flex-col gap-5 justify-center items-center'>
      <h2 className='md:text-7xl text-black chillax text-3xl'> My Story</h2>
      <h3 className='telma-light'>  Inspired by legacy.</h3>
      <div className='mt-5'>
      <p className="mb-4">
        Growing up, I was deeply influenced by my late mother. She was a thoughtful documentarian who always took the time to record both big and small moments. Watching her gave me a strong appreciation for detail and the power of storytelling to make memories last.
      </p>
      <p className="mb-4">
        Her way of communicating went beyond words. It was about intention and meaning. Whether she was writing something down or simply explaining a lesson, she knew how to make it stick. That shaped how I see communication today not as just talking, but as connecting.
      </p>
      <p>
        Her legacy drives everything I do. It reminds me to stay focused, aim higher, and bring clarity to every project I touch. She taught me that when words are used well, they can move people and make real change. That belief is now the core of my work.
      </p>
      </div>
    </section>
    <section id="career" className='md:p-10 p-3 my-10 flex flex-col bg-accent text-muted-foreground justify-center items-center gap-5'>
      <h2 className='text-black md:text-7xl text-center text-3xl chillax'>Professional Journey</h2>
      <h3 className='telma-light'>Key milestones that shaped my expertise</h3>
      <div className='mt-5'> 
        {careerTimeline.map(({summary,company,highlights,title,year}) => (
          <div key={title} className='flex'>
            <div className='flex flex-col'>
              <div className='p-2 bg-[#AE7DAC] relative -left-1.5 -top-5 rounded-full'/>
            </div>
            <div className='relative overflow-hidden'>
              <Card id="card" className='mb-10'>
                <CardHeader className='flex md:flex-row flex-col gap-2 md:gap-5 chillax'>
                  <Badge className='bg-[#ae7dac]/70 border-0'>{year}</Badge>
                  <h4>{title}</h4>
                </CardHeader>
                <CardContent className='text-muted-foreground  flex flex-col md:gap-3'>
                  <p className='text-sky-500'>{company}</p>
                  <p>{summary}</p>
                  <div>
                    {highlights.map((list) => (
                      <li key={list}>{list}</li>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className='text-muted-foreground'>
      <div className='text-center py-10'>
        <h2 className=' md:text-6xl text-3xl chillax text-foreground'>
        What Drives Me
        </h2>
        <h3 className='telma-light py-5'>
        The principle that guide every project i take on
        </h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pb-20 px-15 text-center'>
        {myDrive.map(({title,description,logo})=> (
          <Card key={title} className='shadow-xl'>
            <CardHeader>
              <p className='text-3xl mb-3'>{logo}</p>
              <h3 className='text-xl chillax'>{title}</h3>
            </CardHeader>
            <CardContent>
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    <section className='bg-accent text-center text-muted-foreground py-20 justify-center items-center flex flex-col gap-5'>
      <h2 className='md:text-6xl text-4xl text-black chillax'>
        Ready to Work Together?
      </h2>
      <p>
        Let's discuss how strategic copywriting can transform your business
      </p>
      <div className='flex gap-5'>
        <Link to={"/contact-me"}>
          <Button variant='outline' className='flex text-white bg-gradient-to-r from-blue-600 to-purple-600'>
            Start Your Project 
            <ArrowRight />
          </Button>
        </Link>
        <Link to={"/my-work"}>
          <Button variant="outline">
            View My Work
          </Button>
        </Link>
      </div>
    </section>
    </>
  )
}

export default About