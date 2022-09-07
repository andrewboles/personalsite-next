import styles from "../styles/ContactSection.module.css";
import StyledButton from "./StyledButton";
import { useForm, ValidationError } from "@formspree/react";
import RevealAnimatedDiv from "./RevealAnimatedDiv";
import { AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mjvzgrlq");

  return (
    <footer id="contact" className={styles.contact}>
      <AnimatePresence>
        {state.succeeded === false ? (
          <RevealAnimatedDiv
            key={"contactForm"}
            className={styles.mainContainer}
          >
            <p>
              I&apos;m always up to talk professional and collaborative
              opportunities, music, gaming, sci-fi books, or whatever&apos;s on
              your mind. You can check out my{" "}
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
              <input id="contactname" type="text" name="contactname" required />
              <ValidationError
                prefix="contactname"
                field="contactname"
                errors={state.errors}
              />
              <label htmlFor="message">message</label>
              <textarea id="message" type="text" name="message" required></textarea>
              <ValidationError
                prefix="message"
                field="message"
                errors={state.errors}
              />
              <StyledButton
                text="submit"
                type="submit"
                disabled={state.submitting}
              />
            </form>
          </RevealAnimatedDiv>
        ) : (
          <RevealAnimatedDiv
            style={{
              height: "600px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
            key={"thank you message"}
          >
            <h6>thanks for reaching out, I&apos;ll get back to you shortly!</h6>
          </RevealAnimatedDiv>
        )}
      </AnimatePresence>

      <h6>
        big thanks to <a href="https://feathericons.com/">feathericons.com, </a>
        <a href="https://devicon.dev/">devicon.dev, </a>
        <a href="https://icon-sets.iconify.design/">iconify, </a>
        <a href="https://threejs.org/">threejs.org,</a> and threejs&apos;s
        ingenious contributors
      </h6>
    </footer>
  );
};

export default ContactSection;
