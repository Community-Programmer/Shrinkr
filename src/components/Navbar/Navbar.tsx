import Link from 'next/link'
import styles from './Navbar.module.scss'
import Navlinks from './Navlinks/Navlinks'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href={'/'}>Shrinkr</Link>
        </div>

        <div className={styles.navlinks}>
            <Navlinks/>
        </div>
    </nav>
  )
}

export default Navbar