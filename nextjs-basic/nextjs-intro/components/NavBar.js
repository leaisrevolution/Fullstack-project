import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  // console.log('router', router);
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <span style={{ color: router.pathname === '/' ? 'red' : 'blue' }}>
          Home
        </span>
      </Link>
      <Link href="/about">
        <span style={{ color: router.pathname === '/about' ? 'red' : 'blue' }}>
          About
        </span>
      </Link>
    </nav>
  );
}
