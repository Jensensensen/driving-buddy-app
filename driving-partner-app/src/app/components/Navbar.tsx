import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="border-b p-4 flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/partners">Partners</Link>
            <Link href="/signup">Sign up</Link>
            <Link href="/signin">Sign in</Link>
        </nav>
    )
}