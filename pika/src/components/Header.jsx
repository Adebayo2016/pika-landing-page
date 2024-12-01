import logo from "../assets/Logo.svg";

const Header = ({windowWidth}) => {
  return (
    <header className="fixed top-8 left-4 md:top-[65px] md:left-[60px] z-20">
    <img src={logo} alt="Pika Logo" loading="lazy"
      className={(windowWidth > 768 ? "logo-default" : "logo-primary")  + " h-6 w-[70px] md:h-[29px] md:w-[84px]"} />
  </header>
  );
};

export default Header;