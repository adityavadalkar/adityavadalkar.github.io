import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="">
      <ul className="">
        <li><Link href="/">Home</Link></li>
        <li><a href="/Aditya Vadalkar Resume.pdf" className="hover:underline" target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li><Link href="https://github.com/adityavadalkar" target="_blank" rel="noopener noreferrer">GitHub</Link></li>
        <li><Link href="https://www.linkedin.com/in/aditya-vadalkar" target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
