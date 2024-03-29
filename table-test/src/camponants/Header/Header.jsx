import headerimg from "../../assets/hero-banner.jpeg";
import "./header.css";

function Header() {
  return (
    <div className="headerpart">
         <img src={headerimg} alt="hero-banner" className="bannerimg"/>
    </div>
  )
}

export default Header