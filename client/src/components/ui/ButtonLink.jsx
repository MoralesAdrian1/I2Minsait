import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} style={{ backgroundColor: '#04364A' }} className="bg-indigo-500 px-4 py-1 rounded-md">
    {children}
  </Link>
);
