import {useEffect, useState} from "react";

import MobileNav from "./mobile_nav.jsx";
import DesktopNav from "./desktop_nav.jsx";
import WOW from 'wowjs';
import 'animate.css';

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    useEffect(() => {
        new WOW.WOW({
            live: false,
        }).init();
    }, []);

    return (
        <div className="w-full text-white flex justify-center items-center p-6 bg-[#2654DC]">

            <div className="w-full max-w-[1440px] flex justify-between items-center">
                <h1 className="animate__animated animate__fadeIn sm:text-7xl text-5xl">
                    Эстетика
                </h1>

                {
                    windowWidth > 922
                        ? <DesktopNav />
                        : <MobileNav/>

                }
            </div>
        </div>
    )
}