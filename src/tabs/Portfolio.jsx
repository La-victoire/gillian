import { Badge } from '@/components/components/ui/badge'
import { Button } from '@/components/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { projects } from '../projectdata'
import { Card, CardContent } from '@/components/components/ui/card'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <>
    <section className='flex flex-col gap-5 justify-center items-center p-10 lg:px-40'>
      <Badge variant='outline'>Portfolio</Badge>
       <h1 className='md:text-7xl chillax text-center text-3xl'>
        Strategic Work That 
        <p className='bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>Delivers</p>
      </h1>
      <p>
        Explore my complete collection of copywriting and brand strategy projects. Each case study demonstrates measurable results and strategic thinking that drives business growth.
      </p>
    </section>
    <main>
      <div className='grid md:grid-cols-2 grid-cols-1 p-10 gap-10'>
        {projects.map((project) => (
          <Card className='h-[70dvh] pt-0 '>
            <div className={`bg-gradient-to-br ${project.color} h-1/2 pl-10 pt-5 flex justify-between rounded-t-xl`}>
              <div>
                <p className='text-3xl mb-3'>{project.icon}</p>
                <Badge variant='outline' className='text-white border-0 bg-white/20'>{project.category}</Badge>
              </div>
              <div className='text-white/25 flex flex-col justify-between'>
                <p className='text-5xl chillax'>{project.title.charAt(0)}</p>
                <div className='bg-white/25 rounded-full w-15 h-15 -mr-2 -mb-2'></div>
              </div>

            </div>
            <CardContent className='flex flex-col gap-3 text-muted-foreground'>
              <h2 className='text-blue-600 chillax text-2xl'>{project.title}</h2>
              <p>{project.description}</p>
              <div>
                {project.tags.map((tag)=>(
                  <Badge variant='outline'>
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className='text-base border border-green-300 p-3 rounded-xl bg-green-50 text-green-400 flex flex-col'>
               <span>Result</span> {project.results}
              </div>
              <div className='flex justify-between'>
                <p>{project.client}</p>
                <p>{project.duration}</p>
              </div>
              <Link to={`/my-work/${project.id}`}>
              <Button variant='outline' className='border-0 text-blue-600 chillax'>
                View Case Study
                <ArrowRight />
              </Button>
              </Link>
              
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
    <section className='bg-accent text-muted-foreground py-20 justify-center items-center flex flex-col gap-5'>
        <h2 className='md:text-6xl text-4xl text-black chillax'>
          Ready to Create Your Success Story?
        </h2>
        <p>
          Let's discuss how strategic copywriting can transform your business like it did for these clients
        </p>
        <div className='flex gap-5'>
          <Button variant='outline' className='flex text-white bg-gradient-to-r from-blue-600 to-purple-600'>
            Start Your Project 
            <ArrowRight />
          </Button>
          <Button variant="outline">
            View My Work
          </Button>
        </div>
      </section>
    </>
  )
}

export default Portfolio