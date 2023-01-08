import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  console.log('router', router);
  return (
    <nav>
      <Link href="/">
        <span style={{ color: router.pathname === '/' ? 'red' : 'blue' }}>
          Home
        </span>
      </Link>
      <Link href="/about">
        <>about</>
      </Link>
    </nav>
  );
}
