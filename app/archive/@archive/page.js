import { getAvaiableNewsYears } from '@/lib/news';
import Link from 'next/link';
export default function ArchivePage() {
    const availableYears = getAvaiableNewsYears();
    return (
        <header id="archive-header">
            <h1>Archive</h1>
            <ul>
                {availableYears.map((year) => <li key={year}><Link href={`/archive/${year}`}>{year}</Link></li>)}
            </ul>
        </header>
    );
}   