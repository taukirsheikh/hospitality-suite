'use client'
import Link from "next/link"
import { FaUserCircle } from 'react-icons/fa'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useContext } from "react"
import ThemeContext from "@/context/ThemeContext"
import { useThemeContext } from "../ThemeProvider/ThemeProvider"

const Header = () => {
    const { darkTheme, setDarkTheme } = useThemeContext();

    return (
        <header className="py-10 px-4 container mx-auto text-xl flex  md:flex-nowrap items-center justify-between">
            <div className='flex items-center w-full flex-wrap  md:2/3'>
                <Link href="/" className='font-black text-tertiary-dark'    >
                    Hotal
                </Link>
                <ul className="flex items-center ml-5">
                    <li>
                        <Link href='/auth'>
                            <FaUserCircle className='cursor-pointer' />
                        </Link>

                    </li>
                    <li className="ml-2 cursor-pointer">
                        {
                            darkTheme ? <MdOutlineLightMode onClick={() => {
                                setDarkTheme(false);
                                localStorage.removeItem("hotel-theme");
                            }} /> :
                                <MdDarkMode onClick={() => {
                                    setDarkTheme(true);
                                    localStorage.setItem("hotel-theme", "true");
                                }} />
                        }
                    </li>

                </ul>
                <ul className="flex justify-between ml-auto w-full md:w-1/3 ">
                    <li className="hover:-translate-y-2 duration-500 transition-all">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:-translate-y-2 duration-500 transition-all">
                        <Link href="/rooms">Rooms</Link>
                    </li>
                    <li className="hover:-translate-y-2 duration-500 transition-all">
                        <Link href="/">Contact</Link>
                    </li>

                </ul>

            </div>
        </header>
    )
}

export default Header