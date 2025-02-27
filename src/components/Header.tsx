import Counter from "./Counter";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 col-[1/3] row-[1/2] bg-[#ead4fa] border-b border-black/[0.25]  ">
      <Logo />

      <Counter />
    </header>
  );
}

export default Header;
