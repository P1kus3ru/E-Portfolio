// import stranded from '../contents/images/Stranded-in-space-1240x2270.jpg';
import unsplash from '../contents/images/ian-chen-wrrgZwI7qOY-unsplash.jpg';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function NotFound() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <>
            <div className=" -mt-16 md:gap-4 md:flex md:items-center md:justify-center h-screen ">
                <div className="flex flex-col items-center justify-center h-full md:w-1/2 w-full">
                    <h1 className="font-bold text-9xl">404</h1>
                    <p className="mb-2 text-2xl font-bold text-center md:text-3xl">
                        <span className="text-red-500 mr-1">{t('pages.notfound.oops')}</span>{t('pages.notfound.desc.big')}
                    </p>
                    <p className="mb-8 text-center md:text-lg">
                        {t('pages.notfound.desc.small')}
                    </p>
                    <button className="formbutton font-semibold px-6 py-3 rounded-md mr-6" onClick={()=> navigate(-1)}>
                        {t('pages.notfound.button.back')}
                    </button>
                </div>
                <div className="hidden md:block h-full w-1/2">
                    <img
                        src={unsplash}
                        alt="Unsplash by Ian Chen on Unsplash"
                        className="object-cover w-full h-full" //object-bottom for stranded
                    />
                </div>
            </div>
        </>
    );
}