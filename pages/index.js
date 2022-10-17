import Head from "next/head";
import {
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.jpg";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";

import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('berkcinar_resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'berkcinar_pdf.pdf';
            alink.click();
                })
            })
        }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Berk Çınar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-[85vh]">
          <nav className="py-10 mb-12 flex float-right dark:text-white">
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                  onClick={onButtonClick}
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 pt-32 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Berk Çınar
            </h2>
            <h3 className="text-2xl py-6 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <div lassName="text-md pt-4 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and lets get cracking!
            </div>
            <div className="text-5xl flex justify-center gap-16 py-8 text-gray-600 dark:text-gray-400">
            <a href="https://github.com/berk-cinar">
              <AiFillGithub/>
            </a>
            <a href="https://www.linkedin.com/in/berkcinr/">
              <AiFillLinkedin />
            </a>

            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full max-w-[15rem] max-h-[15rem]  w-80 h-80 relative overflow-hidden mt-20 md:h-70 md:w-70">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className="text-md leading-8 max-w-5xl mx-auto text-gray-800 dark:text-gray-200">
            <ul className="mx-auto max-w-[38rem] ">
              <div className="lg:pl-16">
              <h3 className="text-3xl pb-3 my-4  dark:text-white ">Project Experiences</h3>
              <li> &#8227;
               One year experience with Javascript, Typescript programming languages
            </li>
            <li>  &#8227; 
              Experience in using the basics of CSS, SASS, Tailwind SCSS</li>
            <li> &#8227; Solid understanding of RESTful API integrations</li>
            <li> &#8227; Knowledge of version control system (Git)</li>
            <li> &#8227; Developing scalable, reliable, maintainable and reusable code</li>
            <li> &#8227;Responsive web development</li>
            <li> &#8227;Experience with React and Redux</li>
              </div>
              </ul>
            </div>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-8  ">
              Design Tools
              </h3>
              <div className="py-2">
                Creating elegant designs suited for the project needs following core
                design theory.
              </div>

              <div className="text-gray-800 py-1">Photoshop</div>
              <div className="text-gray-800 py-1">Illustrator</div>
              <div  className="text-gray-800 py-1">Figma</div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
              Languages and Frameworks
              </h3>
              <div className="py-2">
                Im using different languages and tools with best fit to project.
              </div>
                <div className="text-gray-800 py-1">JavaScript</div>
                <div className="text-gray-800 py-1">React</div>
                <div className="text-gray-800 py-1">NextJs</div>
                <div className="text-gray-800 py-1">Redux</div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-8 ">UI Libraries</h3>
              <div className="py-2">
                Im using last technology UI libraries for the project
              </div>
              <div className="text-gray-800 py-1">BootStrap</div>
              <div className="text-gray-800 py-1">ReactStrap</div>
              <div className="text-gray-800 py-1">TailwindCSS</div>
              <div className="text-gray-800 py-1">Metarial Design</div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <div className=" mx-auto text-md py-2 leading-8 max-w-6xl text-gray-800 dark:text-gray-200">
            <h3 className="text-3xl py-1 dark:text-white  ">Portfolio</h3>

            </div>
          </div>
          <div className=" gap-10 py-6 grid grid-cols-1 lg:grid-cols-2">
            <div >
            <h3 className="text-lg font-bold lg:min-h-[60px] xl:min-h-[60px] 2xl:min-h-[40px]">1. Online food ordering platform</h3>

            <h3 className="min-h-[120px]  lg:min-h-[200px] xl:min-h-[180px] 2xl:min-h-[140px]" > I used the ReactJS framework for my online food ordering app Tasty Treat. state management
I used React Hooks and Redux for In the UI part, I took advantage of ReactStrap and React Slick. ReactStrapin
I created a responsive design view with the grid structure. Header in responsive design opens from the right
I aimed for a more functional use and space management by turning into a hamburger menu.</h3>
              <h4 >

               <br></br>
               <div className="min-h-[80px]">
              <span className="text-lg font-bold ">Used technologies:</span>  
              <span >
               JavaScript, React, Redux, React Hooks
              </span>
<br></br>
              <span className="text-lg  font-bold ">
                UI:</span>  React Slick, Reactstrap, CSS
               </div>
              </h4> <br></br>
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"88%"}
                layout="responsive"
                src={web1}
              />
              <div className=" py-4 px-6 sm:px-16 lg:px-1  xl:px-4 2xl:px-12 mb-12  text-white flex justify-between dark:text-white">
              <a href="https://github.com/berk-cinar/best-food" target="_blank" rel="noreferrer">
              <button className="py-2 px-2 sm:w-48  lg:w-[10rem] xl:w-[14rem] 2xl:w-60 rounded-md bg-sky-500"> View in Github </button>
        </a>
              <a href="https://tasty-treat-foodapp.netlify.app/home" target="_blank" rel="noreferrer">
              <button className="py-2 px-2 sm:w-48  lg:w-[10rem] xl:w-[14rem] 2xl:w-60 rounded-md bg-sky-400"> View in Browser </button>
        </a>
              </div>
            </div>
            <div className="flex-1 ">
            <h3 className="text-lg font-bold lg:min-h-[60px] xl:min-h-[60px] 2xl:min-h-[40px]">2. Responsive web page to create pop-up</h3>
              <h4 >
                  <div className="min-h-[120px]  lg:min-h-[200px] xl:min-h-[180px] 2xl:min-h-[140px]">While creating my JavaScript project, which I created with the idea of ​​creating
                     your own popup, I used the ReactJS framework and I used TypeScript. I didnt need a 
                     library for the UI part, I used Tailwind SCSS. It was also sufficient for the mobile view of my app. I used React Hooks and Redux for state management.
                    I have stored the users information in the popup component in LocalStorage. </div> <br></br>
              <span className="text-lg py-6 font-bold ">Used technologies:</span> TypeScript, React, Redux, Rest Api, Axios, LocalStorage, React Hooks
<br></br>
<span className="text-lg py-2 font-bold ">UI:</span>  CSS, SCSS, Tailwind
              </h4>
              <br></br>
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"90%"}
                layout="responsive"
                src={web2}
              />
              <div className=" py-4 px-6 sm:px-16 lg:px-1  xl:px-4 2xl:px-12 mb-12  text-white flex justify-between dark:text-white">
              <a href="https://github.com/berk-cinar/popupmaker" target="_blank" rel="noreferrer">
              <button className="py-2 px-2 sm:w-48   lg:w-[10rem] xl:w-[14rem] 2xl:w-60 rounded-md bg-sky-500"> View in Github </button>
        </a>
              <a href="https://popupmaker.netlify.app" target="_blank" rel="noreferrer">
              <button className="py-2 px-2 sm:w-48   lg:w-[10rem] xl:w-[14rem] 2xl:w-60 rounded-md bg-sky-400"> View in Browser </button>
        </a>
              </div>
              
            </div>
            <div className="flex-1">
            <h3 className="text-lg font-bold lg:min-h-[60px] xl:min-h-[80px] 2xl:min-h-[40px]">3. Online shopping platform</h3>
            <h3 className=" min-h-[120px] lg:min-h-[150px] xl:min-h-[180px] 2xl:min-h-[140px]">While writing Online Shopping Platform, Azco, I used ReactJS framework and JavaScript language. A new UI
I wanted to try the library, I preferred React-Bootstrap. It was my first encounter with SCSS. SCSS variable
definitions, dynamically changing image sizes with hovers, etc.
it was a project.</h3>
              <h4 >
              <span className="text-lg h- py-6 font-bold ">Used technologies:</span> JavaScript, React, Redux
<br></br>
<span className="text-lg py-2 font-bold ">UI:</span> React-bootstrap, CSS, SCSS
              </h4> <br></br>
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"90%"}
                layout="responsive"
                src={web3}
              />
              <div className=" py-4 px-6 sm:px-16 lg:px-1  xl:px-4 2xl:px-12 mb-12  text-white flex justify-between dark:text-white">
              <a href="https://github.com/berk-cinar/azco-clothing" target="_blank" rel="noreferrer">
              <button className="py-2 px-2 sm:w-48   lg:w-[10rem] xl:w-[14rem] 2xl:w-60 rounded-md bg-sky-500"> View in Github </button>
        </a>
              <a href="https://azco-clothing.netlify.app" target="_blank" rel="noreferrer">
              <button className="py-2 px-2 sm:w-48  lg:w-[10rem] xl:w-[14rem] 2xl:w-60 rounded-md bg-sky-400"> View in Browser </button>
        </a>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}