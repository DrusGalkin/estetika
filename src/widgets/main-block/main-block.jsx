import middlePhoto from './../../images/middle_photo.png'
import {useEffect, useState} from "react";

export default function MailBlock() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    let buttonStyle = 'text-white bg-black p-3 rounded-2xl text-center text-[20px] transition-all hover:scale-110 hover:bg-[#2654DC]'

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
        <div className={(windowWidth > 1328) ? 'w-full flex justify-between items-center mt-[40px] p-6' : 'w-full flex justify-center items-center mt-[40px] p-6'}>
            <div className='flex flex-col gap-6'>
                <h1 className={(windowWidth > 1328) ? 'text-5xl font-bold text-gray-900 leading-tight' : 'text-5xl font-bold text-center text-gray-900 leading-tight'}>
                    Салон красоты “Эстетика”
                </h1>

                <br/>

                <p className='max-w-[700px] text-[22px]'>
                    Добро пожаловать в наш салон красоты, где мы предлагаем широкий спектр услуг для мужчин и женщин!
                    Наша цель — создать атмосферу уюта и комфорта, где каждый клиент сможет расслабиться и насладиться
                    процедурами, направленными на улучшение внешнего вида и самочувствия.
                </p>

                {
                    windowWidth < 1328
                        ? <Photo/>
                        : null
                }

                <br/>
                <a
                    className={
                    windowWidth > 1328 ? `${buttonStyle} w-[300px]` :  `${buttonStyle} w-full`
                    }
                    href="">К каталогу услуг</a>
            </div>



            {
                windowWidth > 1328
                ? <Photo/>
                : null
            }


        </div>
    )
}

function Photo() {
    return (
        <img
            className='rounded-2xl h-[466px] object-cover object-center'
            src={middlePhoto}
            alt=""
        />
    )
}