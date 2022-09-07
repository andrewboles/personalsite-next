import styles from "../styles/ProjectsSection.module.css";
import { Icon } from "@iconify/react";
import RevealAnimatedDiv from "./RevealAnimatedDiv";
const ProjectsSection = () => {

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectGallery}>
        <RevealAnimatedDiv className={styles.projectVideo}>
          <div className={styles.videoBackground} />
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
              <Icon icon="logos:prisma" />
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
        </RevealAnimatedDiv>
        <RevealAnimatedDiv className={styles.projectVideoReverse} >
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
              <Icon icon="bxl:tailwind-css" />
            </div>
            <div className={styles.projectButtons}>
              <a href="https://cityseeker.vercel.app">
                <button>Demo</button>
              </a>
              <a href="https://github.com/andrewboles/cityseeker">
                <Icon icon="ant-design:github-filled" />
              </a>
            </div>
          </div>
          </RevealAnimatedDiv>
          <RevealAnimatedDiv className={styles.projectVideo}>
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
              <Icon icon="simple-icons:remix" />
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
                <Icon icon="ant-design:github-filled" />
              </a>
            </div>
          </div>
          </RevealAnimatedDiv>
      </div>
    </section>
  );
};

export default ProjectsSection;
