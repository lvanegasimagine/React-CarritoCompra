import { NavLink } from 'react-router-dom';
import { Menu } from '../style-components/StyleApp';

const Header = () => {
  return (
    <Menu>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/tienda">Tienda</NavLink>
    </Menu>
  );
};

export default Header;
