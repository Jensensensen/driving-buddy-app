import Link from 'next/link'

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
        }}>
            <Link href="/" style={linkStyle}>Home</Link>
            <Link href="/partners" style={linkStyle}>Partners</Link>
            <Link href="/sign-up" style={linkStyle}>Sign up</Link>
            <Link href="/sign-in" style={{
                ...linkStyle,
                backgroundColor: '#111',
                color: '#fff',
                padding: '8px 18px',
                borderRadius: '6px',
                marginLeft: 'auto',
            }}>Sign in</Link>
        </nav>
    )
}

const linkStyle: React.CSSProperties = {
    color: '#111111',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 500,
    letterSpacing: '0.01em',
}