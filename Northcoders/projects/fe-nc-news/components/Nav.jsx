import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/articles">Articles</Link>
            <a>User</a>
        </nav>
    )
}