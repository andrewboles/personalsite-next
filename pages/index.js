import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Canvas } from '@react-three/fiber'
import Dots from '../components/Dots'
import Navbar from '../components/Navbar'



export default function Home() {
  return (
    <div className={styles.hero}>
    <Canvas style={{width: '100vw', height: '100vh'}} orthographic camera={{ zoom: 20 }}>
      <color attach="background" args={['white']} />
     
      <Dots />
    </Canvas>
    
      <h3 className={styles.heroText}>
            Hi, I&apos;m<br /><strong className={styles.strong}>Andrew Boles.<br /></strong>I&apos;m a
            full stack web developer. Let&apos;s get creative.
          </h3>
          <Navbar/>
    
    <div style={{height: '200vh', width: '100vw', backgroundColor: '#8c1a3d'}}>

    </div>
    </div>
  )
}