import type { NextPage } from 'next'
import Link from 'next/link'
const links = [
    {loc: 'Home', link: '/'},
    {loc: 'Add-Blog', link: '/add-blog'}
]
const Navigation: NextPage = () => {
    return (
        <nav>
           <ul className="flex justify-around px-4 py-2 bg-gray-300">
            
                {links.map(({loc, link}) => 
                <li key={loc} className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-70">
                <Link  href={link}>
                    {loc}
                </Link>
                </li>
                )}
            
           </ul>
        </nav>
    )
}
export default Navigation