import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../assests/css/main.css";
import Nav from "./Nav";
function Header(props) {
  const { isLogin } = useSelector((state) => state.checkLoginReducer);
  return (
    <header
      className={`z-20 text-gray-600 body-font bg-black bg-opacity-50`}
      style={{ position: "-webkit-sticky", position: "sticky", top: 0 }}
    >
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center fl">
        <div className="flex flex-wrap gap-2 justify-center title-font font-medium items-center text-gray-900 md:mb-0">
          <Link to="/">
            <span className="ml-3 text-xl text-linear">MOVIES</span>
          </Link>

          {isLogin && (
            <div className="ml-4">
              <Link to="/">
                <span
                  style={{ fontSize: "1rem" }}
                  className="font-sans mx-4 text-white hover:text-gray-400"
                >
                  Home
                </span>
              </Link>
              <Link to="/">
                <span
                  style={{ fontSize: "1rem" }}
                  className="font-sans mx-4 text-white hover:text-gray-400"
                >
                  Films
                </span>
              </Link>
              <Link to="/">
                <span
                  style={{ fontSize: "1rem" }}
                  className="font-sans mx-4 text-white hover:text-gray-400"
                >
                  Contact
                </span>
              </Link>

              <Link to="/">
                <span
                  style={{ fontSize: "1rem" }}
                  className="font-sans mx-4 text-white hover:text-gray-400"
                >
                  About
                </span>
              </Link>
            </div>
          )}
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
