import { Link } from "react-router-dom";
import { useContext } from "react";
import Favouritcontext from "../../store/favourite-context";

import classes from "./Mainnavigation.module.css"

function Mainnavigation() {
  const favouritctx = useContext(Favouritcontext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/"> All Meetups</Link>
          </li>
          <li>
            <Link to="/newmeetups"> Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourits"> My favourits
            <span className={classes.badge}>{favouritctx.totalfavourits}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Mainnavigation;
