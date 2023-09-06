import  {Nav, Navbar} from "react-bootstrap"
import { useState } from 'react';
function NavMenu(){
    const [activeLink, setActiveLink] = useState('about');
    const onUpdateActiveLink = (link) =>{
        setActiveLink(link );
      }
    return(
        <nav className="nav flex-column d-none d-md-block">
            <li className={activeLink === 'about' ? 'active-nav-item' : 'nav-item'}>
                <a className="nav-link" href="#about" onClick={() => onUpdateActiveLink('about')}>
                    About
                </a>
            </li>
            <li className={activeLink === 'projects' ? 'active-nav-item' : 'nav-item'}>
                <a className="nav-link" href="#projects" onClick={() => onUpdateActiveLink('about')}>
                    Projects
                </a>
            </li>
            <li className={activeLink === 'experience' ? 'active-nav-item' : 'nav-item'}>
                <a className="nav-link" href="#experience" onClick={() => onUpdateActiveLink('about')}>
                    Experience
                </a>
            </li>
        </nav>
    )
}
export default NavMenu;
// className={activeLink === 'AboutMe' ? 'active-navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('AboutMe')}