import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/">
          <h1 className="text-2xl font-bold ">Auth App</h1>
        </Link>
        <ul className="flex gap-x-4">
          <Link to="/" className="text-slate-800 hover:text-slate-900">
            Home
          </Link>
          <Link to="/about" className="text-slate-800 hover:text-slate-900">
            About
          </Link>
          <Link to="/sign-in" className="text-slate-800 hover:text-slate-900">
            Sign In
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
