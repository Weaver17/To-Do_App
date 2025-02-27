type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
};

function Button({ children, buttonType }: ButtonProps) {
  return (
    <button
      className={` submit-btn h-[45px]  w-full text-white rounded-[5px] cursor-pointer ${
        buttonType === "secondary" ? "opacity-70 hover:opacity-60" : ""
      } `}
    >
      {children}
    </button>
  );
}

export default Button;
