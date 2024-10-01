import "../index.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* LOGO SVG */}
        <svg style={{ width: "97px", height: "58px" }} id="logo">
          <polygon
            points="32.2 0.39 31.04 0.39 11.19 56.65 0 56.65 0 58 23.28 58 23.28 56.65 12.56 56.65 32.2 0.39"
            fill="#FFF"
            fillRule="evenodd"
          ></polygon>
          <polygon
            points="47.92 0.39 32.44 44.7 16.39 1.35 23.28 1.35 23.28 0 0 0 0 1.35 6.69 1.35 27.94 57.61 29.1 57.61 49.08 0.97 47.92 0.39"
            fillRule="evenodd"
          ></polygon>
          <polygon
            points="50.95 50.04 68.29 0.39 66.93 0.39 50.16 47.94 32.2 0.39 27.35 12.37 43.56 56.65 35.89 56.65 35.89 58 59.17 58 59.17 56.65 53.45 56.65 50.95 50.04"
            fill="#FFF"
            fillRule="evenodd"
          ></polygon>
          <polygon
            points="72.94 0 72.94 1.35 83.47 1.35 68.34 44.7 52.47 1.35 60.14 1.35 60.14 0 35.89 0 35.89 1.35 42.58 1.35 63.83 57.61 65.18 57.61 85.03 1.35 96.22 1.35 96.22 0 72.94 0"
            fillRule="evenodd"
          ></polygon>
          <polygon
            points="89.34 56.65 68.29 0.39 63.44 12.37 79.64 56.65 72.94 56.65 72.94 58 96.22 58 96.22 56.65 89.34 56.65"
            fill="#FFF"
            fillRule="evenodd"
          ></polygon>
        </svg>
        {/* LOGO SVG */}
        <div className="footer-menu">
          <div className="menu-column">
            <p>Resources</p>
            <ul>
              {leftLinksData.map((link, index) => (
                <LeftLink key={index} link={link} />
              ))}
            </ul>
          </div>
          <div className="menu-column">
            <p>Informations</p>
            <ul>
              {rightLinksData.map((link, index) => (
                <RightLink key={index} link={link} />
              ))}
            </ul>
          </div>
        </div>
        <div className="newsletter-container">
          <p>Newsletter</p>
          <form action="">
            <label id="label_text">
              Get exclusive guidance from John, Ryan, and the What Matters team
              by signing up for our weekly newsletter, Audacious.
            </label>
            <div className="email-input">
              <input type="text" placeholder="Your email adress..." />
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="copyrights-container">
        <div className="copyrights">
          <p>Copyright ©2020 What Matters</p>
          <div className="copyrights-right-box">
            <a href="stan-cosmin.com">Update Cookie Preferences</a>
            <div className="socials">
              <a id="first-icon" href="/">
                {" "}
                {/* X Icon */}
              </a>
              <a href="/">{/* Facebook Icon */}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
const leftLinksData = [
  { name: "OKRs 101", href: "#" },
  { name: "Stories", href: "#" },
  { name: "Examples & Resources", href: "#" },
  { name: "Feedback", href: "#" },
];
const rightLinksData = [
  { name: "About", href: "#" },
  { name: "Editorial Team", href: "#" },
  { name: "Buy The Book", href: "#" },
  { name: "Contact", href: "#" },
];

const LeftLink = ({ link }) => (
  <li>
    <a href={link.href}>{link.name}</a>
  </li>
);

const RightLink = ({ link }) => (
  <li>
    <a href={link.href}>{link.name}</a>
  </li>
);
