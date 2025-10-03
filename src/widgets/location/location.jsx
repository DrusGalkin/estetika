
const Locations = () => {
    return (
        <div >
            <div>
                <h1 className='text-5xl font-bold mb-4 text-gray-900 leading-tight'>
                    Где мы находимся
                </h1>
            </div>

            <div className="w-full flex flex-wrap justify-between items-start">

                <img
                    className='w-[691px] h-[702px'
                    src="https://avatars.mds.yandex.net/get-altay/15386900/2a00000197bb2319d338c0c81a687273626a/XXXL" alt=""/>

                <div className='flex flex-col gap-3'>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa90e112a2b315f4d3714dab2401a9fbb2222f4502cd93298e80e1fe3a0965ee4&amp;source=constructor"
                        width="646" height="450" frameBorder="0"></iframe>

                    <a
                        className='text-[#678AF4] font-medium text-[23px] transition-all hover:scale-105'
                        target='_blank'
                        href="https://yandex.ru/profile/4102753181?lang=ru&no-distribution=1&view-state=mini&source=wizbiz_new_map_single">Открыть Яндекс.Карты</a>
                </div>

            </div>
        </div>
    )
}

export default Locations