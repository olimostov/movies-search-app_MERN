import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';

M.AutoInit();

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='nav-wrapper orange darken-3'>
          <div className='container'>
            <Link to='/' className='brand-logo'>
              <i className='fas fa-film fa-lg'> </i>
              Movie Finder
            </Link>
            <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <NavLink exact activeClassName='active' to='/top250'>
                  Top 250
                </NavLink>
              </li>
              <li>
                <NavLink exact activeClassName='active' to='/bookmarked'>
                  Bookmarked
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul className='sidenav blue-grey darken-3' id='mobile-demo'>
        <li>
          <NavLink exact activeClassName='active' to='/top250'>
            Top 250
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='active' to='/bookmarked'>
            Bookmarked
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
