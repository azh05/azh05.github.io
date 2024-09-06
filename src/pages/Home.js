import NavBar from '../components/NavBar';
import MainProfile from '../components/MainProfile';

function Home() {
  return (
    <div>
      <header className="py-6 px-1">
        <NavBar className=""/>
      </header>
      <MainProfile />
    </div>
  );
}

export default Home;
