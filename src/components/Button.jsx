const Button = ({ btnText, btnStyles }) => {
  return (
    <button
      className={`py-3 px-5 text-2xl text-black bg-[#7BCFCD] outline-none rounded-2xl ${btnStyles} font-bold`}
    >
      {btnText}
    </button>
  );
};

export default Button;
