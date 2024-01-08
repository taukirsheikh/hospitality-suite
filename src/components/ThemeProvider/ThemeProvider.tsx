'use client'
import { useEffect, useState } from "react"
import ThemeContext from "@/context/ThemeContext"

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const localStorageAvailable = typeof localStorage !== "undefined";
    const themeFromStorage: boolean = localStorageAvailable
        ? JSON.parse(localStorage.getItem("hotel-theme")!) : false


    const [darkTheme, setDarkTheme] = useState<boolean> (themeFromStorage);

        <ThemeContext.Provider  value = {{ darkTheme, setDarkTheme }
}>
    <div className={`${darkTheme ? 'dark' : ""} min-h-screen`}>
        <div className="dark:text-white dark:bg-black text-[#1E1E1E]">

            {children}
        </div>

    </div>
      </ThemeContext.Provider>


}
// const themeFromStorage = typeof localStorage !== "undefined" && localStorage.getItem("hotel-theme") ? JSON.parse(localStorage.getItem("hotel-theme")!) : false