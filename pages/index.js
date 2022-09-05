import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Dots from "../components/Dots";
import Navbar from "../components/Navbar";
import StyledButton from "../components/StyledButton";
import { useRef } from "react";
import Head from "next/head";
import { Icon } from "@iconify/react";

export default function Home() {
  const aboutRef = useRef(null);
  return (
    <>
      <Head></Head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
      />
      <div className={styles.hero}>
        <Canvas
          style={{ width: "100vw", height: "100vh" }}
          orthographic
          camera={{ zoom: 20 }}
        >
          <color attach="background" args={["white"]} />
          <Dots />
        </Canvas>

        <h3 className={styles.heroText}>
          Hi, I&apos;m
          <br />
          <strong className={styles.strong}>
            Andrew Boles.
            <br />
          </strong>
          I&apos;m a full stack web developer. Let&apos;s get creative.
        </h3>
        <StyledButton
          text={"See My Work"}
          style={{ position: "absolute", zIndex: 1, top: "75vh" }}
          onClick={() => aboutRef.current.scrollIntoView()}
        />
        <Navbar />
        <section ref={aboutRef} className={styles.about}>
          <aside>
            <h2>Who I am</h2>
            I&apos;m a self-taught, full stack developer who sees a blank
            webpage as an empty canvas. What I bring are positivity, curiosity,
            a collaborative attitude, and above all, a balance between the
            logical and the creative. I studied Aerospace Engineering, moved to
            Detroit for Automotive, then moved back home to Texas to become a
            part of the Austin electric vehicle and information explosions. Away
            from work, I&apos;m an
            <a href="https://noalarmsmusic.com"> indie rock songwriter</a>, a
            mountain biker, and an avid ping pong player. Falling in love with
            programming has been a welcome symptom of my desire to express
            myself creatively, and a self-ultimatum to bring that capacity into
            my professional life.
          </aside>
          <div className={styles.skillsSection}>
            <h2>Skills</h2>
            <h5>frontend</h5>
            <div className={styles.skillSet}>
              <div className={styles.skillsCard}>
                <i className={"devicon-html5-plain-wordmark"}></i>
                <h6>html5</h6>
              </div>
              <div className={styles.skillsCard}>
                <i className={"devicon-css3-plain-wordmark"}></i>
                <h6>css3</h6>
              </div>
              <div className={styles.skillsCard}>
                <i className={"devicon-javascript-plain"}></i>
                <h6>javascript</h6>
              </div>
              <div className={styles.skillsCard}>
                <i className={"devicon-react-original"}></i>
                <h6>react</h6>
              </div>
              <div className={styles.skillsCard}>
                <i className={"devicon-nextjs-original"}></i>
                <h6>nextjs</h6>
              </div>
              <div className={styles.skillsCard}>
                <Icon icon="simple-icons:remix" style={{ color: "#a95144" }} />
                <h6>remixjs</h6>
              </div>
              <div className={styles.skillsCard}>
                <i className="devicon-tailwindcss-plain"></i>

                <h6>tailwind</h6>
              </div>
            </div>
            <h5>backend</h5>
            <div className={styles.skillSet}>
              <div className={styles.skillsCard}>
                <i className="devicon-nodejs-plain"></i>
                <h6>nodejs</h6>
              </div>
              <div className={styles.skillsCard}>
                <i className="devicon-express-original"></i>
                <h6>express</h6>
              </div>
              <div className={styles.skillsCard}>
                <i className="devicon-mongodb-plain"></i>
                <h6>mongodb</h6>
              </div>
              <div className={styles.skillsCard}>
                <Icon icon="logos:prisma" style={{ color: "#a95144" }} />
                <h6>prisma</h6>
              </div>
              <div className={styles.skillsCard}>
                <i className="devicon-firebase-plain"></i>
                <h6>firebase</h6>
              </div>
            </div>
            <h5>miscellaneous</h5>
            <div className={styles.skillSet}>
              <div className={styles.skillsCard}>
                <i className="devicon-git-plain"></i>
                <h6>git</h6>
              </div>
              <div className={styles.skillsCard}>
                <i className="devicon-npm-original-wordmark"></i>
                <h6>npm</h6>
              </div>
              <div className={styles.skillsCard}>
                <i className="devicon-yarn-plain"></i>
                <h6>yarn</h6>
              </div>
              <div className={styles.skillsCard}>
                <i className="devicon-webpack-plain"></i>
                <h6>webpack</h6>
              </div>
              <div className={styles.skillsCard}>
                <i className="devicon-github-original"></i>
                <h6>github</h6>
              </div>
              <div className={styles.skillsCard}>
                <Icon
                  icon="teenyicons:bitbucket-solid"
                  style={{ color: "#a95144" }}
                />
                <h6>bitbucket</h6>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className={styles.projects}>
          <h2>Projects</h2>
          <div className={styles.projectGallery}>
            <div className={styles.projectVideo}>
              <div className={styles.videoBackground}/>
              <a href="https://flickflock.xyz">
                <video
                  className={styles.videoPreview}
                  playsinline
                  loop
                  muted
                  autoPlay
                  preload="metadata"
                >
                  <source src="./flickflock.m4v" type="video/mp4" />
                </video>
              </a>

              <div className={styles.projectDescription}>
                <h3>FlickFlock Social Video App</h3>
                <h4>
                  Full stack video-centric social media application with custom
                  authentication, social OAuth2 login, comments and followers
                </h4>
                <div className={styles.techUsed}>
                  <i className="devicon-nextjs-original"></i>
                  <i className="devicon-react-original"></i>
                  <i className="devicon-express-original"></i>
                  <i className="devicon-mongodb-plain"></i>
                  <Icon icon="logos:prisma"/>
                </div>
                <div className={styles.projectButtons}>
                  <a href="https://flickflock.xyz">
                    <button>Demo</button>
                  </a>
                  <a href="https://github.com/andrewboles/flickflock">
                    <Icon icon="ant-design:github-filled" />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.projectVideoReverse} >
              <div className={styles.videoBackground}></div>
              <a href="https://cityseeker.vercel.app">
                <video
                  className={styles.videoPreview}
                  playsinline
                  loop
                  muted
                  autoPlay
                  preload="metadata"
                >
                  <source src="./introvid.mov" type="video/mp4" />
                </video>
              </a>

              <div className={styles.projectDescription}>
                <h3>Cityseeker</h3>
                <h4>
                  Frontend-focused US city comparison tool built with Next.js,
                  RapidAPI, Mantine Components, & Tailwind CSS
                </h4>
                <div className={styles.techUsed}>
                  <i className="devicon-nextjs-original"></i>
                  <i className="devicon-react-original"></i>
                  <Icon icon="bxl:tailwind-css"/>
                </div>
                <div className={styles.projectButtons}>
                  <a href="https://cityseeker.vercel.app">
                    <button>Demo</button>
                  </a>
                  <a href="https://github.com/andrewboles/cityseeker">
                    <Icon icon="ant-design:github-filled"/>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.projectVideo}>
              <div className={styles.videoBackground}></div>
              <a href="https://fueleconomyremixdemo.fly.dev/">
                <video
                  className={styles.videoPreview}
                  playsinline
                  loop
                  muted
                  autoPlay
                  preload="metadata"
                >
                  <source src="./fuelecon.m4v" type="video/mp4" />
                </video>
              </a>

              <div className={styles.projectDescription}>
                <h3>Fuel Economy App</h3>
                <h4>
                  Data file processing full stack business-minded app built with
                  Remix.js. Features OAuth2 Microsoft login & Mapbox integration
                </h4>
                <div className={styles.techUsed}>
                  <Icon icon="simple-icons:remix"/>
                  <i className="devicon-react-original"></i>
                  <i className="devicon-nodejs-plain"></i>
                  <i className="devicon-css3-plain-wordmark"></i>
                  <span className="iconify" data-icon="simple-icons:mapbox"></span>
                </div>
                <div className={styles.projectButtons}>
                  <a href="https://fueleconomyremixdemo.fly.dev/">
                    <button>Demo</button>
                  </a>
                  <a href="https://github.com/andrewboles/fueleconomy-remix">
                  <Icon icon="ant-design:github-filled"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
