import styles from "../styles/AboutSection.module.css";
import { Icon } from "@iconify/react";
import RevealAnimatedDiv from "./RevealAnimatedDiv";

const AboutSection = ({ aboutRef }) => {
  

  return (
    <section id="about" ref={aboutRef} className={styles.about}>
      <RevealAnimatedDiv className={styles.aside}>
        <h2>Who I am</h2>
        I&apos;m a self-taught, full stack developer who sees a blank webpage as
        an empty canvas. What I bring are positivity, curiosity, a collaborative
        attitude, and above all, a balance between the logical and the creative.
        I studied Aerospace Engineering, moved to Detroit for Automotive, then
        moved back home to Texas to become a part of the Austin electric vehicle
        and information explosions. Away from work, I&apos;m an
        <a href="https://noalarmsmusic.com"> indie rock songwriter</a>, a
        mountain biker, and an avid ping pong player. Falling in love with
        programming has been a welcome symptom of my desire to express myself
        creatively, and a self-ultimatum to bring that capacity into my
        professional life.
      </RevealAnimatedDiv>
      <RevealAnimatedDiv className={styles.skillsSection}>
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
     </RevealAnimatedDiv>
    </section>
  );
};

export default AboutSection;
