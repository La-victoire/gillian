import { Badge } from '@/components/components/ui/badge'
import { Button } from '@/components/components/ui/button'
import { ArrowRight, Quote } from 'lucide-react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getNextProject, projects } from '../projectdata'
import { Card, CardContent } from '@/components/components/ui/card'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const PortfolioPage = () => {
  const {slug} = useParams()
  const currentProject = projects.filter((project) => (
    project.id === slug
  ))
  const nextProject = getNextProject(slug)

   useGSAP(() => {
     const projectAnimate = gsap.timeline({
      scrollTrigger: {
        trigger: '#results',
        start: 'top center',
        end: 'bottom bottom',
        scrub: true,
      }
    })

    projectAnimate.to("#results", 
      {
        marginTop:-200,
        ease: "expo.out",
        duration: 2.5
      }
    )

    projectAnimate.to("#main", {
      opacity: 0.3,
      ease:"expo.out",
      duration: 1.5
    })
  },[])

  return (
    <>
      <main className='flex flex-col z-0 gap-5 p-10'>
        {currentProject.map((data) => (
          <section id="main" key={data.id} className='flex flex-col gap-5'>
          <Badge variant='outline'>{data.category}</Badge>
          <h1 className='md:text-7xl chillax text-3xl'>
           {data.title}
          </h1>
          <p>
            {data.fullDescription}
          </p>
          <div className='flex'>
            <div className='w-1/2'>
              <p className='text-md text-muted-foreground'>Client</p>
              <p className=''>{data.client}</p>
            </div>
             <div className='w-1/2'>
              <p className='text-md text-muted-foreground'>Duration</p>
              <p className=''>{data.duration}</p>
            </div>
          </div>
          <div className='flex gap-2'>
            {data.tags.map((tag) => (
             <Badge key={tag} variant='outline'>{tag}</Badge>
            ))}
          </div>
          <div className={`bg-gradient-to-br ${data.color} z-0 h-1/2 pl-10 py-5 flex justify-between rounded-xl shadow-xl`}>
            <div>
              <p className='text-3xl mb-3'>{data.icon}</p>
              <p className='text-white border-0'>{data.category}</p>
              <h3 className='text-3xl chillax text-white'>{data.title}</h3>
            </div>
            <div className='text-white/25 flex flex-col justify-between'>
              <p className='text-5xl chillax'>{data.title.charAt(0)}</p>
              <div className='bg-white/25 rounded-full w-15 h-15 -mr-2 -mb-7'></div>
            </div>
          </div>
          </section>
        ))}
    </main>

    <section id='results' className='z-100 isolate'>
     {currentProject.map((data) => (
      <div key={data.id}>
        <div className='text-center z-100 bg-gray-300 py-10'>
          <h2 className='md:text-5xl mb-5 text-3xl chillax'>{data.results}</h2>
          <p className='text-muted-foreground telma-light'>Key Result Achieved</p>
        </div>
        <div className='flex flex-col py-20 px-10 gap-5'>
          <div className='flex flex-col gap-2 text-muted-foreground'>
           <p className='text-black text-2xl chillax'>The Challenge</p>
           <p>{data.challenge}</p>
          </div>
          <div className='flex flex-col gap-2 text-muted-foreground'>
           <p className='text-black text-2xl chillax'>The Solution</p>
           <p>{data.solution}</p>
          </div>
          <div className='flex flex-col gap-2 text-muted-foreground'>
           <p className='text-black text-2xl chillax'>The Outcome</p>
           <p>{data.outcome}</p>
          </div>
        </div>
        <div className='flex flex-col bg-gray-300 py-20 px-10 gap-5'>
          <h2 className='text-5xl text-center mb-5 chillax'>Project Highlights</h2>
          <div className='flex gap-5 justify-center items-center md:flex-row flex-col'>
            <Card className='w-full text-center px-5 text-muted-foreground'>
              <h3 className='text-black -mb-5 text-xl chillax'>{data.results}</h3>
              <p>Primary Result</p>
            </Card>
            <Card className='w-full text-center px-5 text-muted-foreground'>
              <h3 className='text-black -mb-5 text-xl chillax'>{data.duration}</h3>
              <p>Project Duration</p>
            </Card>
            <Card className='w-full text-center px-5 text-muted-foreground'>
              <h3 className='text-black -mb-5 text-xl chillax'>{data.category}</h3>
              <p>Service Type</p>
            </Card>
          </div>
        </div>
        {data.testimonial && (
        <div className='px-10 py-20'>
          <Card className="px-2 shadow-xl">
            <CardContent className={'flex flex-col gap-5 items-center text-center'}>
             <Quote className='text-muted-foreground '/>
              <p className='synonym'>"{data.testimonial?.quote}"</p>
              <div className='flex flex-col gap-1'>
                <h1 className='chillax'>- {data.testimonial?.author}</h1>
                <p className='text-muted-foreground'>{data.testimonial?.role}</p>
              </div>
            </CardContent>
          </Card>
        </div>
        )}
      </div>
     ))}
    </section>

    <section className='bg-accent px-10 py-20'>
      {[nextProject]?.map((data) => (
        <div>
          <h2 className='text-center text-5xl chillax mb-10'>Next Project</h2>
          <div>
            <div key={data.id} className='gap-2 flex flex-col-reverse md:flex-row-reverse'>
              <div  className=' md:w-1/2 flex flex-col flex-wrap mt-6 gap-5 p-5 h-full rounded-lg'>
                <h3 className='md:text-5xl text-3xl chillax '>{data.title}</h3>
                <p className='text-xl'> {data.description}</p>
                <p className='text-base md:text-xl synonym'> {data.strategy}</p>
                <Link to={`/my-work/${data.id}`} className='flex'>
                  <Button variant='outline' className='p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl chillax rounded-lg '>
                    View Case Study 
                    <ArrowRight />
                  </Button>
                </Link>
              </div>
              <div className={`${data.color} bg-gradient-to-br rounded-2xl md:w-1/2`}>
                <div className='text-white p-8 flex flex-col gap-55'>
                  <div className='flex flex-col gap-3'>
                    <h3 className='md:text-5xl text-3xl'>{data.icon}</h3>
                    <Badge variant={'outline'} className='text-white bg-white/15 border-0'>{data.category}</Badge>
                    <h3 className='md:text-5xl text-3xl chillax'>{data.title}</h3>
                  </div>
                  <div className='lg:flex-row flex flex-col justify-between'>
                    <p>{data.client}</p>
                    <p className='text-lg chillax pr-5'>{data.results}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>

    <section className='text-muted-foreground text-center py-20 justify-center items-center flex flex-col gap-5'>
      <h2 className='md:text-6xl text-4xl text-black chillax'>
        Ready to Transform Your Brand?
      </h2>
      <p>
        Let's discuss how strategic copywriting can transform your business
      </p>
      <Link to="/contact-me" className='flex gap-5'>
        <Button variant='outline' className='flex text-white bg-gradient-to-r from-blue-600 to-purple-600'>
          Start Your Project 
          <ArrowRight />
        </Button>
      </Link>
    </section>
    </>
  )
}

export default PortfolioPage