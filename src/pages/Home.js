import NavBar from '../NavBar';
import MainProfile from '../MainProfile';

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
