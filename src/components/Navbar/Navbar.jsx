"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
    const pathName = usePathname()
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl"><span className="font-bold">Keen</span>Keeper</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link className={`${pathName === "/" ? "bg-[#244D3F] text-white":""}`} href="/"><FaHome/>Home</Link>
                    </li>
                    <li>
                        <Link className={`${pathName === "/timeline" ? "bg-[#244D3F] text-white":""}`} href="/timeline"><IoTimerOutline />Timeline</Link>
                    </li>
                    <li>
                        <Link className={`${pathName === "/stats" ? "bg-[#244D3F] text-white":""}`} href="stats"><TfiStatsUp />Stats</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
