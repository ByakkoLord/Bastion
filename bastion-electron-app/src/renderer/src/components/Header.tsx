import img from '../assets/pixil-frame-0 (1).png';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header(): JSX.Element {
  return (
    <header id="header">
      
      <div id='logoBlock'>
          <img className='logos' src={img} alt="" />
      </div>
          <FontAwesomeIcon size='2x' id='hamburguer' icon={faBars} />
      
    </header>
  )
}
