import { FaGithub } from 'react-icons/fa'
import styles from './Footer.module.scss'
import Link from 'next/link'


const Footer = () => {

  return (
    <>
    <footer className={styles.footer}>
    <p>&copy; 2024 Shrinkr - Sarthak Patel. All rights reserved.</p>
    <Link href='https://github.com/Community-Programmer' target='_blank' className={styles.github}>
    <FaGithub fontSize={30}/>
    </Link>
    </footer>
    </>
  )
}

export default Footer