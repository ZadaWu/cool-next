import Link from 'next/link';
import NavLink from './nav-link';

export default function MainHeader() {
    return (
        <header id="main-header">
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <NavLink href="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink href="/archive">archive</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}