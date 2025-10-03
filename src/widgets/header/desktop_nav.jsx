import {nav} from "../../features/nav.jsx";

export default function DesktopNav() {
    let navStyles = "transition-all hover:scale-110"
    return (
        <div className="flex items-center text-[20px] justify-between gap-5">
            {
                nav.map((item, i) => (
                    <a className={navStyles}
                       href={item.path}
                       key={i}
                    >
                        {item.name}
                    </a>
                ))
            }
        </div>
    )
}