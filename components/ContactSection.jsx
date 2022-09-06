import styles from "../styles/ContactSection.module.css";
import { useState, useEffect} from 'react'
import StyledButton from "./StyledButton";

const ContactSection = () => {
 const [formSubmitted, setFormSubmitted] = useState(false)

 const handleSubmit = e => {
    e.preventDefault()
    setFormSubmitted(true)
    console.log(e.target[0].value)
    console.log(e.target[1].value)
 }
 
  return (
    <footer id="contact" className={styles.contact}>
    {formSubmitted === false ? <>
      <p>
        I&apos;m always up to talk professional and collaborative opportunities,
        music, gaming, sci-fi books, or whatever&apos;s on your mind. You can
        check out my{" "}
        <a href="andrewboles-fullstackdeveloper-resume.pdf" target="_new">
          resume here
        </a>{" "}
        and shoot me an email here
        <svg
          viewBox="0 0 20 20"
          stroke="#cf9535"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="css-i6dzq1"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input id="name" type="text" />
        <label htmlFor="message">message</label>
        <textarea id="message" type="text"></textarea>
        <StyledButton text="submit" type="submit"/>
      </form>
      </> : <h6>thanks for reaching out!</h6>}
      <h6>
        big thanks to <a href="https://feathericons.com/">feathericons.com,</a>
        <a href="https://devicon.dev/">devicon.dev,</a>
        <a href="https://icon-sets.iconify.design/">iconify,</a>
        <a href="https://threejs.org/">threejs.org,</a> and threejs&apos;s
        ingenious contributors
      </h6>
    </footer>
  );
};

export default ContactSection;
