import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex gap-4'>
      <Link to="/">Home</Link>
      <Link to="/cycle">LifeCycle</Link>
    </header>
  );
}

export default Header;