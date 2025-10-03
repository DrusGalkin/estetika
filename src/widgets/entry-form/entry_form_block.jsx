import {useEffect, useState} from "react";

export default function EntryForm() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    let pStyle = 'w-full max-w-[450px] text-[20px]'
    let inputStyle = "border-b-2 outline-0 transition-all focus:text-[#2654DC] text-gray-400 p-3 border-b-gray-400"
    let blockStyle = 'w-full mt-[50px]  lg:gap-0 gap-[50px] flex-col-reverse items-center justify-around p-6'

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })


    return (
        <div className={(windowWidth > 1328) ?  `${blockStyle} flex lg:flex-row` : `${blockStyle} flex flex-col`}>
            <form className='flex flex-col gap-[30px] w-full max-w-[500px] p-5'>

                <input
                    type="text"
                    className={inputStyle}
                    placeholder="Номер телефона"/>

                <input
                    type="email"
                    className={inputStyle}
                    placeholder="Почта"/>

                <input
                    type="text"
                    className={inputStyle}
                    placeholder="Сообщение"/>


                <button className='bg-black text-white p-2 rounded-2xl transition-all cursor-pointer hover:scale-105 hover:bg-[#2654DC]'>
                    Отправить
                </button>
            </form>


            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className='text-5xl text-center font-bold text-gray-900 leading-tight'>
                    Запишитесь к нам!
                </h1>

                <br/>

                <p className={pStyle}>
                     "Мы рады пригласить вас в наш салон красоты, где вы сможете насладиться <span className='text-[#2654DC]'>качественными</span> услугами и
                    профессиональным обслуживанием."
                </p>

                <p className={pStyle}>
                    "Наша команда опытных мастеров готова сделать <span className='text-[#2654DC]'>все</span>, чтобы вы почувствовали себя красивыми и
                    уверенными!"
                </p>
            </div>
        </div>
    )
}