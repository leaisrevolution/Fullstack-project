import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Hello </h1>
      <style jsx global>{`
        span {
          color: red;
        }
      `}</style>
    </div>
  );
}
