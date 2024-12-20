// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer flex justify-center items-center">
      Created By  
      <span> ❤️ </span>
      <a className="font-bold"
        href="/"
        target="_blank"
        title="Shrikant Kushwah Linkedin Profile"
      >
         Shrikant Kushwah
      </a>
      <span className="font-bold text-lg gap-2">&#169;</span>
        <span className="m-[5px]">{year}</span>
        <strong>
          <span className="text-[#14C004]">Online</span>
          <span className="text-[#ec913c]">Food</span>
        </strong>
    </div>
  );
};

export default Footer;