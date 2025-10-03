import {useEffect, useState} from "react";

export default function GalleryBlock() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="w-full flex justify-center flex-col mt-5 mb-5">
            <div className={(windowWidth > 1328) ? "" : "flex flex-col justify-center items-center"}>
                <h1 className={windowWidth > 1328 ? "text-5xl font-bold mb-4 text-gray-900 leading-tight" : "w-full text-5xl font-bold mb-4 text-gray-900 leading-tight max-w-[700px]"}>
                    Наша галерея
                </h1>

                <div className={`flex ${windowWidth > 1328 ? 'flex-row justify-between gap-4 sm:gap-6 lg:gap-8' : 'flex-col gap-4'}`}>
                    <div className={windowWidth > 1328 ? "w-[65%]" : "w-full max-w-[700px]"}>
                        <img
                            className="w-full rounded-2xl h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                            src="https://alterainvest.ru/upload/iblock/f83/tnjle37ux9lt18haq0kmlzumdcoiienb.png"
                            alt=""
                        />
                    </div>

                    <div className={windowWidth > 1328 ? "w-[30%]" : "w-full max-w-[700px]"}>
                        <img
                            className="w-full rounded-2xl h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                            src="https://avatars.mds.yandex.net/get-ydo/4079136/2a000001890b7af166d88d6fc575b23bb110/diploma"
                            alt=""
                        />
                    </div>
                </div>

                <br/>
                <br/>

                <button className={`text-white ${windowWidth> 1328 ? 'w-[250px]' : 'w-full max-w-[700px]'}  cursor-pointer bg-black p-3 rounded-2xl text-center text-[20px] transition-all hover:scale-105 hover:bg-[#2654DC]`}>
                    Показать все фото
                </button>
            </div>

        </div>
    );
}