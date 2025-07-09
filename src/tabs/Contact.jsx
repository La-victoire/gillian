import { Badge } from '@/components/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/components/ui/card'
import { Input } from '@/components/components/ui/input'
import { Label } from '@/components/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/components/ui/select'
import React, { useState, useRef } from 'react'
import { FAQ, projectTypes } from '../projectdata'
import { Textarea } from '@/components/components/ui/textarea'
import { Button } from '@/components/components/ui/button'
import { ArrowRight, Calendar, Clock, Mail, MapPin, MessageSquare, Phone, Zap } from 'lucide-react'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/components/ui/avatar'
import emailjs from "@emailjs/browser"
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Contact = () => {
  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We'll discuss your goals, challenges, and vision in a 30-minute strategy session.",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "I'll create a custom strategy and proposal tailored to your specific needs.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      step: "03",
      title: "Project Kickoff",
      description: "Once approved, we'll begin with research, planning, and timeline establishment.",
      icon: <Calendar className="h-6 w-6" />,
    },
  ]
  const [projectType, setProjectType] = useState("")
  const [buttonText, setButtonText] = useState("Send Project Details")
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [success, setSuccess] = useState(false)
  const formRef = useRef()

      useGSAP(() => {
        const projectAnimate = gsap.timeline({
        scrollTrigger: {
          trigger: '#faq',
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

  const sendEmailForm = (e) => {
    e.preventDefault()

    setButtonText("Sending...")
    setButtonDisabled(true)
    setSuccess(true)
    emailjs.sendForm(
      "Gillian_brendan","gillian_reply",formRef.current,"RBfDT3SKhRqcUd8SR"
      
    ).then(() => {
      setButtonText("Sent!")
      setSuccess(true)
      setProjectType("")
    },
  (error) => {
    console.error(error.text)
    alert("Failed to send message.")
  }).finally(() => {
    setTimeout(() => {
      setButtonText("Send Project Details")
      setButtonDisabled(false)
    }, 3000)
    })
  }

  if (success) {
     return(
        <div className='min-h-screen bg-background flex items-center justify-center px-6'>
          <div className='text-center max-w-2xl mx-auto'>
            <div className='text-6xl chillax mb-6'>
              🚀
            </div>
            <h1 className='text-4xl font-bold text-foreground mb-6'>Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your project inquiry has been received.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to={"/my-work"}>
              <Button 
               size="lg"
               className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-800 hover:to-purple-800">
                View My Work <ArrowRight />              
              </Button>
              </Link>

              <Link to={"/"}>
              <Button 
              size="lg"
              variant="outline"
              >
                Back to Home             
              </Button>
              </Link>
            </div>
          </div>
        </div>
      )
  }

  return (
    <>
    <section className='flex flex-col gap-5 justify-center items-center p-10 lg:px-40'>
      <Badge variant='outline'>Let's Work Together</Badge>
       <h1 className='md:text-7xl chillax text-center text-3xl'>
        Ready to Transform 
        <p className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
          Your Brand?
        </p>
      </h1>
      <p>
      Let's discuss your project and explore how strategic copywriting can drive measurable results for your business. Every great partnership starts with a conversation.
      </p>
    </section>
    <main className='p-5 flex flex-col gap-15'>
      <Card className='p-5 shadow-xl'>
        <CardHeader className='chillax text-2xl'>
          Start Your Project
        </CardHeader>
        <form 
          ref={formRef} 
          onSubmit={sendEmailForm}>
          <CardContent className='flex flex-col gap-5'>
            <div className='flex gap-5 md:flex-row flex-col w-full'>
              <div className='md:w-1/2 flex flex-col gap-2'>
                <Label htmlFor="text">Full Name*</Label>
                <Input name="user_name" type="text" placeholder="John Smith" required/>
              </div>
              <div className='md:w-1/2 flex flex-col gap-2'>
                <Label htmlFor="email">Email Address*</Label>
                <Input name="user_email" type="email" placeholder="Smith@company.com" required/>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <Label htmlFor="text">Company Name</Label>
              <Input name="company" type="text" placeholder="Your Company inc"/>
            </div>
            <div className='flex flex-col gap-2'>
              <Label htmlFor="project_type">Project Type*</Label>
              <Select 
                name="project_type"
                value={projectType}
                onValueChange={setProjectType}
                required
                >
                <SelectTrigger>
                  <SelectValue placeholder="Select Project Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Project Type</SelectLabel>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className='flex gap-5 md:flex-row flex-col w-full'>
              <div className='md:w-1/2 flex flex-col gap-2'>
                <Label htmlFor="text">Budget Range</Label>
                <Input name="budget" type="text" placeholder="Amount Range"/>
              </div>
              <div className='md:w-1/2 flex flex-col gap-2'>
                <Label htmlFor="text">Desired Timeline</Label>
                <Input name="timeline" type="text" placeholder="e.g, 6-8 weeks"/>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <Label htmlFor="text">Project Details*</Label>
              <Textarea name="message" placeholder="Tell me about your project goals current challenges, and what success looks like for you..." required />
            </div>
            <Button 
             type="submit"
             disabled={buttonDisabled}
             variant='outline' 
             className='border-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white chillax'
             >
              {buttonText}
              <ArrowRight />
            </Button>
          </CardContent>
        </form>
      </Card>
      <Card className='shadow-xl bg-muted'>
        <CardHeader className="chillax text-2xl">
          Get In Touch
        </CardHeader>
        <div className='flex flex-col border-border border-b pb-10 mx-10 gap-5'>
          <div className="flex gap-5 items-center">
            <Mail color='blue'/>
            <div>
              <p className='text-sm mb-2 text-muted-foreground'>Email</p>
              <a href="mailto:Gilliannbrendan@gmail.com" className='hover:text-blue-600'>Gilliannbrendan@gmail.com</a>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <Phone color='blue'/>
            <div>
              <p className='text-sm mb-2 text-muted-foreground'>Phone</p>
              <a href="tel:+2347035747166" className='hover:text-blue-600' >+234 7035 747 166</a>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <MapPin color='blue'/>
            <div>
              <p className='text-sm mb-2 text-muted-foreground'>Location</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <Clock color='blue'/>
            <div>
              <p className='text-sm mb-2 text-muted-foreground'>Response Time</p>
              <p>Within 24 hours</p>
            </div>
          </div>
        </div>
        <CardFooter className='flex flex-col gap-3 ml-5 items-start text-muted-foreground'>
          <p>Follow Me</p>
          <div className='flex gap-5'>
            <a href="https://www.linkedin.com/in/gillian-brendan-80095b199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <Badge variant="outline" className='border-0 hover:shadow-lg hover:cursor-pointer active:translate-2 duration-500 bg-white/50 w-10 h-10 rounded-2xl'>  
              <FaLinkedinIn />
              </Badge>
            </a>
            <a href="https://x.com/zoeyglams?t=L5GljY3uNo9vuKQNRV8AbQ&s=09" target="_blank" rel="noopener noreferrer">
              <Badge variant="outline" className='border-0 hover:shadow-lg hover:cursor-pointer active:translate-2 duration-500  bg-white/50 w-10 h-10 rounded-2xl'>
              <FaTwitter />
              </Badge>
            </a>
          </div>
        </CardFooter>
      </Card>
      <Card className='shadow-xl'>
        <CardHeader className="text-3xl chillax">
          How We'll Work Together
        </CardHeader>
        <CardContent className='flex flex-col gap-5'>
          {process.map(({step,description,title,icon})=> (
            <div key={title} className="flex gap-5 items-center">
              <Avatar>
                <AvatarFallback className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">{step}</AvatarFallback>
              </Avatar>
              <div className="text-muted-foreground flex flex-col">
                <p className="text-black text-xl chillax">{title}</p>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </main>
    <section className="py-20 px-10 mt-10 flex flex-col gap-10 bg-black/5">
      <div className='text-center'>
        <h2 className="chillax mb-5 text-5xl">Frequently Asked Questions</h2>
        <p className="text-muted-foreground telma-light">Common questions about working together</p>
      </div>
      <div id='faq' className="flex flex-col gap-5">
        {FAQ.map(({question,answer}) => (
          <div className='relative overflow-hidden'>
            <Card key={question} id='card' className="shadow-xl">
              <CardHeader className='text-xl -mb-5 chillax'>{question}</CardHeader>
              <CardContent>{answer}</CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Contact