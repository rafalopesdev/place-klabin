import Logo from '../assets/place-klabin.svg';
import Banner from '../assets/banner.jpg';

const Header = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-16 bg-black absolute">
        <div className="container m-auto flex justify-between">
          <a href="" className="">
            <img src={Logo} alt="Logo Place Kalbin" width={90} />
          </a>
          <nav className="mt-5 text-white">
            <a href="">Home</a>
            <a href="">Sobre Nós</a>
            <a href="">Serviços</a>
            <a href="">Contato</a>
          </nav>
        </div>
      </div>
      <img src={Banner} alt="" className="" />
    </div>
  );
};

export default Header;
