import { Link, useNavigate, useMatch, useResolvedPath } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import enFlag from '../contents/images/flags/gb.svg';
import nlFlag from '../contents/images/flags/nl.svg';

const lngs = {
    en: { nativeName: 'English', icon: enFlag },
    nl: { nativeName: 'Nederlands', icon: nlFlag }
};

export default function NavBar() {
    const { t, i18n } = useTranslation();
    let navigate = useNavigate();
    return (
        <>
            <nav className="fixed top-0 bg-primary w-screen h-16 flex items-center gap-2 lg:gap-5 text-gray-300">
                <Link to={"/"} className="h-full" data-cy='NavBarHomeknop'>
                </Link>
                        <div className='hidden md:block'>
                            <NavItem name={t('components.navbar.link.dashboard')} path={'/dashboard'} />
                        </div>
                    <div className='hidden md:block'>
                        <NavItem name={t('components.navbar.link.customize')} path={"dashboard/personaliseeroverzicht"} />
                    </div>
                        <div className='hidden md:block'>
                            <NavItem name={t('components.navbar.link.template')} path={"dashboard/bewerktemplates"} />
                        </div>
                <div className='hidden md:block ml-auto'>
                    {Object.keys(lngs).map((lng) => (
                        <button data-cy="language" key={lng} className={`h-6 w-8 m-2 p-1 ${i18n.resolvedLanguage === lng ? 'font-bold ring-2 ring-secundary' : 'font-normal'}`} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                            <img src={lngs[lng].icon} alt={lngs[lng].nativeName} />
                        </button>
                    ))}
                </div>
            </nav>
        </>
    );
};

function NavItem({name="Empty", path="/"}) {
    return (
        <>
            <div className="hover:text-secundary">
                <NavLink to={path}>
                    {name}
                </NavLink>
            </div>
        </>
    );
};

function NavLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div className={match ? "underline text-secundary" : ""}>
            <Link
                to={to}
                {...props}
                data-cy="NavBarLink"
            >
                {children}
            </Link>
        </div>
    );
}