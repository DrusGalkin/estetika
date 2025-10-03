import {useState} from "react";
import {nav} from "../../features/nav.jsx";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)
    let iconStyle = 'w-[50px] h-[50px] transition-all hover:scale-110'
    let scale = 'scale-120 hover:scale-130'

    return (
        <div>
            {
                !isOpen
                    ?
                    <svg
                        className={iconStyle}
                        onClick={() => setIsOpen(!isOpen)}
                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                        </g>
                    </svg>
                    :
                    <svg
                        className={(isOpen) ? `${iconStyle} ${scale}` : iconStyle}
                        onClick={() => setIsOpen(!isOpen)}
                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M4 6H20M4 12H14M4 18H9" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"></path>
                        </g>
                    </svg>
            }

            {
                isOpen
                    ?
                    <div className='absolute border-2 rounded bg-[#1f75fe] w-[250px] p-5 -translate-x-[250px]'>
                        <div className='flex w-full flex-col text-2xl grow'>
                            {nav.map((item, i) => (
                                <a
                                    className='flex-1 p-1 w-full transition-all hover:border-b-2'
                                    href={item.path}
                                    key={i}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                    </div>
                    : null
            }
        </div>
    )
}