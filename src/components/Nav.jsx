import "../index.css";

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">What Matters</a>
        </div>

        {/* Navbar Menu */}
        <div className="nav-box">
          <ul>
            {navLinks.map((link, index) => (
              <NavLink key={index} link={link} />
            ))}
            <li>
              <div className="input-box">
                <SearchIcon />
                <input type="text" placeholder="Search" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Meniu Hamburger */}
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">
        <svg
          style={{
            width: "28",
            height: "28",
          }}
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
        </svg>
      </label>

      {/* Dropdown Menu*/}
      <div className="dropdown-menu">
        <ul>
          {navLinks.map((link, index) => (
            <NavLinkHamburger key={index} link={link} />
          ))}
          <li>
            <div className="input-box">
              <SearchIcon />
              <input type="text" placeholder="Search" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const navLinks = [
  { name: "OKRs 101", href: "#" },
  { name: "Stories", href: "#" },
  { name: "Examples", href: "#" },
  { name: "Feedback", href: "#" },
  {
    name: "About",
    href: "#",
    submenu: [
      { name: "Editorial Team", href: "#" },
      { name: "The Book", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
];

const NavLink = ({ link }) => (
  <li>
    <a href={link.href} id="about">
      {link.name}
    </a>
    {link.submenu && (
      <ul id="dropdown-about">
        {link.submenu.map((subLink, index) => (
          <li key={index}>
            <a href={subLink.href}>{subLink.name}</a>
          </li>
        ))}
      </ul>
    )}
  </li>
);
const NavLinkHamburger = ({ link }) => (
  <li>
    <a href={link.href} id="about">
      {link.name}
    </a>
    {link.submenu && (
      <ul id="dropdown-about-subsection">
        {link.submenu.map((subLink, index) => (
          <li key={index}>
            <a href={subLink.href}>{subLink.name}</a>
          </li>
        ))}
      </ul>
    )}
  </li>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0,0,256,256"
  >
    <g fill="#ffffff">
      <g transform="scale(5.12,5.12)">
        <path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z" />
      </g>
    </g>
  </svg>
);
