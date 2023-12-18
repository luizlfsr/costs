import styles from "./Contact.module.css";

import { BsGithub } from 'react-icons/bs'

import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className={styles.contact_container}>
      <h1>Contatos</h1>
      <div className={styles.contacts}>
        <p>
          <BsGithub /> <span>Github:</span> <Link className={styles.link} to="https://github.com/luizlfsr">luizlfsr</Link>
        </p>
      </div>
    </div>
  );
}

export default Contact;
