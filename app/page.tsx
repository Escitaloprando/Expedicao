import Link from 'next/link'

export default function home() {
    return <h1>Hello, Next.js!</h1>
    return <Link href="/dashboard">Dashboard</Link>
  }

  export function logo() {
    return <img src="src='./public/logo_incoflash.webp'" alt="Logo Incoflash" />
  }