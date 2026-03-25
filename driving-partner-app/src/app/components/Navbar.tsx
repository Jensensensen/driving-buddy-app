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
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/partners" className="nav-link">Partners</Link>
            <Link href="/sign-up" className="nav-link">Sign up</Link>
            <Link href="/sign-in" className="sign-in-btn">Sign in</Link>
        </nav>
    )
}
