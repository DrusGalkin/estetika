import image from './../../images/about_photo.png'

const About = () => {
    return (
        <div className="relative mt-[100px] mb-[50px]">
            <img
                className='absolute z-50 top-[-118px] w-[750px] h-[540px]'
                src={image}
                alt=""/>

            <div className="rounded-4xl w-full flex justify-between items-center relative bg-[#2654DC] h-[422px]">
                <div>

                </div>

                <div className="text-white">
                    <h1 className='font-bold text-4xl'>
                        О нас
                    </h1>

                    <p className="w-full max-w-[650px] text-2xl mt-[30px]">
                        Добро пожаловать в наш салон красоты, где мы предлагаем широкий спектр услуг для мужчин и
                        женщин! Наша цель — создать атмосферу уюта и комфорта, где каждый клиент сможет расслабиться и
                        насладиться процедурами, направленными на улучшение внешнего вида и самочувствия.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default About