import {useEffect, useState} from "react";
import SpecialistCard from "./specialist_card.jsx";

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
        <div className="w-full flex justify-center flex-col mt-[50px] mb-[50px]">
            <div className={(windowWidth > 1328) ? "" : "flex flex-col justify-center items-center"}>
                <h1 className={windowWidth > 1328 ? "text-5xl font-bold mb-4 text-gray-900 leading-tight" : "w-full text-5xl font-bold mb-4 text-gray-900 leading-tight max-w-[700px]"}>
                    Наши Специалисты
                </h1>

                <div className={`flex ${windowWidth > 1328 ? 'flex-row justify-between gap-4 sm:gap-6 lg:gap-8' : 'flex-col gap-4'}`}>

                    <SpecialistCard image="https://avatars.mds.yandex.net/i?id=089a8f7b78ae8e8c6cbaabcef1e1484f_l-9036873-images-thumbs&n=13" description="Врач-косметолог" name="Стороженко Ольга Сергеевна"/>
                    <SpecialistCard image="https://avatars.mds.yandex.net/i?id=089a8f7b78ae8e8c6cbaabcef1e1484f_l-9036873-images-thumbs&n=13" description="косметолог" name="Стороженко Ольга Сергеевна"/>
                    <SpecialistCard image="https://avatars.mds.yandex.net/i?id=089a8f7b78ae8e8c6cbaabcef1e1484f_l-9036873-images-thumbs&n=13" description="Врач" name="Стороженко Ольга Сергеевна"/>

                </div>

                <br/>
                <br/>

                <button className={`text-white ${windowWidth> 1328 ? 'w-[250px]' : 'w-full max-w-[700px]'}  cursor-pointer bg-black p-3 rounded-2xl text-center text-[20px] transition-all hover:scale-105 hover:bg-[#2654DC]`}>
                    Показать всех
                </button>
            </div>

        </div>
    );
}
