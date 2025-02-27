type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
  handleClick?: () => Promise<void>;
};

function Button({ children, buttonType, handleClick }: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={` submit-btn h-[45px]  w-full text-white rounded-[5px] cursor-pointer ${
        buttonType === "secondary" ? "opacity-70 hover:opacity-60" : ""
      } `}
    >
      {children}
    </button>
  );
}

export default Button;
