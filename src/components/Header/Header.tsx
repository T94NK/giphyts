/* eslint-disable jsx-a11y/anchor-is-valid */
import { Wrapper, Link } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Link to='/'>In trend</Link>
    <Link to='/search'>Find GIF`s</Link>
  </Wrapper>
);

export default Header;
