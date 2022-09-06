import styles from "../styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Dots from "../components/Dots";
import Navbar from "../components/Navbar";
import StyledButton from "../components/StyledButton";
import { useRef } from "react";
import ContactSection from "../components/ContactSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  const aboutRef = useRef(null);
  return (
    <>
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
          style={{ position: "absolute", zIndex: 1, bottom: "10vh" }}
          onClick={() => aboutRef.current.scrollIntoView()}
        />
        </div>
        <Navbar />
        <AboutSection {...{ aboutRef }} />
        <ProjectsSection />
        <ContactSection />
      
    </>
  );
}
