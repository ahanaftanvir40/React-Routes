import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'
export const Header = () => {
    return (
        <header >
            <Link to='/' className='logo'>

                <img src={Logo} alt="React Router Logo" />
                <span>React Router</span>

            </Link>
            <nav className='navigation'>
                <NavLink to='/' className='link' end>Home</NavLink>
                <NavLink to='/products' className='link'>Products</NavLink>
                <NavLink to='/contact' className='link'>Contacts</NavLink>
            </nav>
        </header>
    )
}
