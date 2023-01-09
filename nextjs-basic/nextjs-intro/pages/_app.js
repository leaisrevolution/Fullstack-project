import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <span>hello</span>;
    </>
  );
}
