import Link from "next/link"

export default function Header(){

return(

<header className="bg-black border-b border-gray-800">

<div className="max-w-7xl mx-auto flex justify-between items-center p-4">

<h1 className="text-3xl font-bold tracking-widest">
🌙 THE MOON
</h1>

<nav className="space-x-6 text-gray-300">

<Link href="/">Home</Link>

<Link href="/world">World</Link>

<Link href="/technology">Tech</Link>

<Link href="/business">Business</Link>

</nav>

</div>

</header>

)

}
