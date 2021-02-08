import { Link } from 'react-router-dom'
const Navigation = () => {
    return (
        <nav>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/My-Playlist">Playlist</Link>
            </li>
        </nav>
    )
}
export default Navigation;