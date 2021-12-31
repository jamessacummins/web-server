import './Nav.css';
import logo from '../../assets/logo.png';
import homeIcon from '../../assets/home.png';
import findIcon from '../../assets/find.png';
import messagesIcon from '../../assets/messages.png';
import notifictionsIcon from '../../assets/notifications.png';
import searchIcon from '../../assets/search.svg';
import profileIcon from '../../assets/profile.jpg';

function Nav() {
    return (
      <div id="Nav-container">
        <div id="Nav-wrapper">
            <div id="Nav-logo-wrapper" className='growable-child'>
                <img id="Nav-logo" src={logo} />
            </div>
            <div id="Nav-search-wrapper" className='growable-child'>
                <div id="Nav-search-box">
                    <img id="Nav-search-icon" src={searchIcon} />
                    Search
                </div>
            </div>
            <div id="Nav-icons-wrapper" className='growable-child'>
                <img src={homeIcon} className='icon'/>
                <img src={messagesIcon} className='icon'/>
                <img src={findIcon} className='icon'/>
                <img src={notifictionsIcon} className='icon'/>
                <img src={profileIcon} id="Nav-profile-icon"  className="icon" />
            </div>
        </div>
      </div>
    );
  }
  
export default Nav;