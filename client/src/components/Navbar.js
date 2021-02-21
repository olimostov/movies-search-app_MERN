import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper orange darken-3'>
        <div className='container'>
          <Link to='/' className='brand-logo'>
            <i className='fas fa-film fa-lg'> </i>
            Movie Finder
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <Link to='/top250'>Top 250</Link>
            </li>
            <li>
              <Link to='/lists'>My Lists</Link>
            </li>
            <li>
              <Link to='collapsible.html'>JavaScript</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
