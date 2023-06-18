import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="header">
        <h1>NON-LINEAR OPTIMIZATION TECHNIQUES</h1>
      </div>
      <div className="nav">
        <div>
          <a href="" className="navSS">
            <Link to="/">Home</Link>
          </a>
        </div>
        <div className="methods">
          <a href="#" className="navSS">
            Methods
          </a>
          <div className="dropDownMethod">
            <div>
              <Link to="/steepestdescent"><a href="">Steepest Descent</a></Link>
            </div>
            <div>
                <a href=""><Link to="/newtonsmethod">Newton's Method</Link></a>
            </div>
          </div>
        </div>
        <div>
        <Link to="/about">About</Link>
        </div>
        <div>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
