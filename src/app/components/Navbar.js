import Link from "next/link"

export default function Navbar(){
  return(
    <aside>
      <nav className="w-">
        <Link href="/" className>
          Dashboard
        </Link>
        <Link href="/products">
          Products
        </Link>
        <Link href="/">
          Orders
        </Link>
        <Link href="/">
          Settings
        </Link>
      </nav>
    </aside>
  )
}