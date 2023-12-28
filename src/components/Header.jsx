import Logo from '../assets/place-klabin.svg';
import Banner from '../assets/banner.jpg';

const Header = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full absolute">
        <div className="w-full h-full bg-black border-solid border-b-2 border-[#BB3A02]">
          <nav className="container h-16 flex justify-between m-auto ">
            <a href="" className="">
              <img src={Logo} alt="Logo Place Kalbin" width={90} />
            </a>
            <ul className="w-3/4 grid grid-cols-4 mt-3 mb-3 text-white items-center font-light uppercase">
              <a href="" className="text-right">
                Projeto
              </a>
              <a href="" className="text-right">
                Apartamentos
              </a>
              <a href="" className="text-right">
                Localização
              </a>
              <a href="" className="text-right">
                Institucional
              </a>
            </ul>
          </nav>
        </div>
        <div className="w-full bg-white/[.4] text-center p-3">
          Uma praça inteira no seu jardim
        </div>
      </div>
      <div className="w-full bg-black absolute bottom-0">footer</div>
      <img src={Banner} alt="" className="h-screen object-cover" />
    </div>
  );
};

export default Header;
