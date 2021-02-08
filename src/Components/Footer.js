import '../Style/Components/Section/Section.css'
import Facebook from '../Asset/Icon/Icons/Icons-01.png'
import Instagram from '../Asset/Icon/Icons/Icons-02.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-cpy">
                <h4 className="footer-h4">&#169; 2021 Joshua Ramin. All Rights Reserved</h4>
                <div className="footer-linked">
                    <a href="https://www.facebook.com/joshua.ramin013">
                        <img src={Facebook} alt="facebook" className="image-footer" />
                    </a>
                    <a href="https://www.instagram.com/raminjoshua/">
                        <img src={Instagram} alt="facebook" className="image-footer" />
                    </a>
                </div>
            </div>

        </div>)
}
export default Footer