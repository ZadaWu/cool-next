"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MainHeader() {
    const path = usePathname();
    return (
        <header id="main-header">
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/news" className={path.startsWith('/news') ? 'active' : ''}>News</Link>
                    </li>
                    <li>
                        <Link href="/archive" className={path.startsWith('/archive') ? 'active' : ''}>archive</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}