const spanStyles = "md:hidden block bg-black w-8 h-0.5 rounded-md my-1.5"

const HamburgerMenu = () => {
  return (
    <div>
      <span className={spanStyles}></span>
      <span className={spanStyles}></span>
      <span className={spanStyles}></span>
    </div>
  );
};

export default HamburgerMenu;
