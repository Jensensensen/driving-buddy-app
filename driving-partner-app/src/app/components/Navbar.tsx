import Link from 'next/link'
import '../globals.css'

export default function Navbar() {
    return (
        <nav style={{
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e8e8e8',
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            height: '60px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            overflow: 'visible',
        }}>
            <Link href="/" className="logo">DrivePass</Link>
            <Link href="/become-a-partner" className="nav-link">Become a Partner</Link>
            <Link href="/partners" className="nav-link">Browse Partners</Link>
            <Link href="/partners" className="nav-link">FAQs</Link>
            <Link href="/sign-up" className="nav-link">Sign up</Link>
            <Link href="/sign-in" className="sign-in-btn">Sign in</Link>
        </nav>
    )
}
