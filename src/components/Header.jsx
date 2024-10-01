import "../index.css";

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <div className="title">
          <h1>Stories</h1>
          <p>Stories about triumph and failure and moments in between.</p>
        </div>
        <div className="featured">
          <p className="featured-title">Featured</p>
          <a href="/" className="featured-description">
            <p>Creating Synergy between Roles and Goals</p>
            <p className="featured-description2">
              Explore how HumanFirst, a pioneering SaaS startup, leverages OKRs
              (Objectives and Key Results) to revolutionize clinical trials and
              pharmaceutical technology. Discover how OKRs, combined with Tours
              of Duty (TODs), help them drive success through flexibility,
              alignment, and leadership collaboration in a dynamic healthcare
              landscape.
            </p>
            <p className="featured-date">Feb 29, 2024</p>
          </a>
          <a href="/" className="featured-read-more">
            Read More
          </a>
        </div>
      </div>
    </header>
  );
}
