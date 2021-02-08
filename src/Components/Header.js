import Logo from '../Asset/LOGO/Logo-01.png'
import '../Style/Components/Header/Header.css'
const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={Logo} alt="logo-josh" className="logo-image" />
            </div>
        </header>
    )
}

export default Header