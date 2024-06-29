// page.js
"use client";
import { useState } from 'react';
import OffCanvas from './components/OffCanvas';
import Projects from './components/Projects';
import Typewriter from "typewriter-effect";
import Tooltip from './components/Tooltip';
import Image from 'next/image';

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='h-screen w-screen flex overflow-x-hidden items-center justify-center'>
      {/* Profile Section */}
      <div className="w-full lg:w-2/3 h-full p-6 flex flex-col items-center justify-center relative">
        <div className='relative flex'>
          <Image
            src="/Profile pic.jpg"
            alt="Aditya Vadalkar"
            className="profile-image w-64 h-64 object-cover object-top z-10"
            width={256}
            height={256}
          />
            <a href="/Aditya Vadalkar Resume.pdf" target="_blank" className="link">
            <Tooltip title="Resume" position="left">

              <svg id="cv" className="absolute svg-link top-0 left-0" width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 68V1.5H32L51.5 21V68H1Z" fill="#FFF6EB"/>
                <path className="svg-path" d="M210 68H51.5M32 1.5H1V68H51.5M32 1.5L51.5 21M32 1.5V21H51.5M51.5 21V68M10.5 42H41.5M10.5 52H41.5M18.5 10C20 10 23 10.8 23 14C23 15.6667 22.1 18.9 18.5 18.5C17.1667 18.3333 14.5 17.2 14.5 14C14.3333 12.8333 14.9 10.4 18.5 10ZM26.5 31H10.5C10.5 26.8333 12.1 18.9 18.5 20.5C21.5 19.8333 27.3 21 26.5 31Z" stroke="#647973" strokeWidth="3"/>
              </svg>     
              </Tooltip>
      
            </a>
            <a href="https://linkedin.com/in/aditya-vadalkar" target="_blank" className="link">
            <Tooltip title="LinkedIn" position="left">
              <svg id="linkedin" className="absolute svg-link bottom-0 left-0" width="216" height="52" viewBox="0 0 216 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 51V1H54V51H1Z" fill="#FFF6EB"/>
                <path className="svg-path" d="M216 1H54M54 1H1V51H54V1ZM13.5 19.5V41M23.5 17.5V29.25M23.5 41V29.25M23.5 29.25C24 23.8333 27.9 14.3 39.5 19.5C40.3333 21.3333 41.5 27.9 39.5 39.5" stroke="#647973" strokeWidth="3"/>
              </svg>
              </Tooltip>
            </a>
            <a href="https://github.com/adityavadalkar" target="_blank" className="link">
            <Tooltip title="GitHub" position="right">

              <svg id="github" className="absolute svg-link top-0 right-0" width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 97H111.524V87.0257M111.524 87.0257C105.13 89.163 90.68 89.3055 84.0305 72.7766C86.588 79.6637 95.6672 92.1553 111.524 87.0257ZM111.524 87.0257C111.524 81.801 112.419 71.2092 116 70.6393C120.475 69.9268 95.5394 74.2015 89.1455 46.4159C82.7517 18.6303 101.933 20.0552 95.5394 20.0552C89.1455 20.0552 95.5394 4.38128 95.5394 1.53147C95.5394 -0.748377 106.196 4.85624 111.524 7.94354C119.41 6.51863 136.332 4.52377 140.935 7.94354C146.69 12.2182 138.378 4.38128 157.559 1.53147C159.478 3.43133 162.547 9.7959 159.478 20.0552C162.888 22.905 168.685 32.4519 164.593 47.8408C160.501 63.2298 144.985 69.4519 137.739 70.6393C140.083 71.1142 144.388 77.0513 142.854 97" fill="#FFF6EB"/>
                <path className="svg-path" d="M0 98H111.524V88.0257M111.524 88.0257C105.13 90.163 90.68 90.3055 84.0305 73.7766C86.588 80.6637 95.6672 93.1553 111.524 88.0257ZM111.524 88.0257C111.524 82.801 112.419 72.2092 116 71.6393C120.475 70.9268 95.5394 75.2015 89.1455 47.4159C82.7517 19.6303 101.933 21.0552 95.5394 21.0552C89.1455 21.0552 95.5394 5.38128 95.5394 2.53147C95.5394 0.251623 106.196 5.85624 111.524 8.94354C119.41 7.51863 136.332 5.52377 140.935 8.94354C146.69 13.2182 138.378 5.38128 157.559 2.53147C159.478 4.43133 162.547 10.7959 159.478 21.0552C162.888 23.905 168.685 33.4519 164.593 48.8408C160.501 64.2298 144.985 70.4519 137.739 71.6393C140.083 72.1142 144.388 78.0513 142.854 98" stroke="#647973" strokeWidth="3"/>
              </svg>
              </Tooltip>

            </a>
            <a href="mailto:vadalkar@usc.edu" className="link">
            <Tooltip title="Email: vadalkar@usc.edu" position="right">

              <svg id="mail" className="absolute svg-link bottom-0 right-0" width="177" height="52" viewBox="0 0 177 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M176 1.5V51H115V1.5H176Z" fill="#FFF6EB"/>
                <path className="svg-path" d="M0.5 1.5H115M176 1.5V51H115V1.5M176 1.5H115M176 1.5L145.5 25.5L115 1.5" stroke="#647973" strokeWidth="3"/>
              </svg>
              </Tooltip>

            </a>
        </div>
        <header className="text-4xl mt-4 mb-2 font-handwritten">Aditya Vadalkar</header>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Software Engineer")
              .pauseFor(1000)
              .typeString(" - Generative AI")
              .pauseFor(1000)
              .deleteChars(16)
              .pauseFor(1000)
              .typeString(" - Full Stack")
              .pauseFor(1000)
              .deleteChars(13)
              .pauseFor(1000)
              .typeString(" - Machine Learning")
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(1000)
              .typeString('<span className="font-game-text">Game Developer</span>')
              .pauseFor(1000)
              .deleteChars(14)
              .typeString('<span class="anime-text">Anime Enthusiast</span>')
              .pauseFor(1000)
              .deleteChars(16)
              .pauseFor(1000)
              .deleteAll()
              .pauseFor(1000)
              .start();
          }}
          options={{
            delay: 50,
            loop: true,
            wrapperClassName: "text-2xl mt-4"
          }}
        />
        <main className="w-3/4 mt-4 text-md text-gray-600 font-handwritten">
        I&apos;m based in Los Angeles, where I graduated from University of Southern California with a Master&apos;s in Computer Science. My journey includes spearheading the engineering team at Raven as a Founding Software Engineer to advancing machine learning applications at RTI International as a Data Scientist, focusing on applying AI to solve problems in the fashion and public health sector. Beyond my professional endeavors, I immerse myself in side projects, from AI-powered sports highlight generator to intelligent tutoring systems. In my downtime, I play and create video games, art, and music, and indulge in anime.
        </main>
      </div>

      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 lg:hidden">
        <button
          className="bg-blue-500 text-white rounded-l-md py-1 px-2"
          onClick={handleShow}
        >
          →
        </button>
      </div>

      {/* Off-Canvas Component for smaller devices */}
      <div className="lg:hidden">
        <OffCanvas show={show} handleClose={handleClose} />
      </div>

      {/* Projects Section for larger devices */}
      <div className="hidden lg:block lg:w-1/3 h-full p-6 z-50 overflow-y-auto color-cycle">
        <Projects />
      </div>
    </div>
  );
}