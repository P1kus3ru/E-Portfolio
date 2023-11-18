import Image from "next/image";
import useSocials from "~/hooks/useSocials";
import avatar from '../../public/images/Avatar.png';
import ThemeButton from "./ThemeButton";

interface NavBarProps  { 
    children?: React.ReactNode 
}

const NavBar = ({ children } : NavBarProps) => {
    const socials = useSocials();
    return (
        <>
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                <div className="flex flex-col">
                    <div className="w-full navbar fixed top-0 z-10 bg-neutral text-neutral-content dark:bg-base-200 dark:text-base-content">
                        <div className="navbar-start">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <a className="normal-case text-xl mx-auto">Jona De Neve</a>
                        </div>
                        <div className="hidden lg:block flex-grow">
                            <div className="flex-none">
                                <ul className="menu menu-horizontal">
                                    <li key="about"><a href="#about">About</a></li>
                                    <li key="experience"><a href="#experience">Experience</a></li>
                                    <li key="projects"><a href="#projects">Projects</a></li>
                                    <li key="education"><a href="#education">Education</a></li>
                                    <li key="skills"><a href="#skills">Skills</a></li>
                                    <li key="interests"><a href="#interests">Interests</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden lg:flex justify-end">
                            <ThemeButton />
                            <button className="btn btn-circle btn-ghost">L</button>
                        </div>
                    </div>
                </div>
                {children}
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-base-100 text-lg">
                    <div className='flex flex-col gap-2'>
                        <div className="avatar">
                            <div className="w-24 rounded-xl">
                                <Image 
                                src={avatar}
                                alt="Profile picture"
                                priority
                                />
                            </div>
                        </div>
                        <a className="mt-auto text-3xl">Jona De Neve</a>
                    </div>
                    <div className="divider"></div>
                    <div className='grow flex flex-col'>
                        <li key="about"><a href="#about">About</a></li>
                        <li key="experience"><a href="#experience">Experience</a></li>
                        <li key="projects"><a href="#projects">Projects</a></li>
                        <li key="education"><a href="#education">Education</a></li>
                        <li key="skills"><a href="#skills">Skills</a></li>
                        <li key="interests"><a href="#interests">Interests</a></li>
                    </div>
                    <div className="divider"></div>
                    <div className='flex gap-3 justify-around'>
                        {socials.map((x) => (
                            <>
                            <a key={x.name} href={x.link} target="_blank" rel="noreferrer">
                                <x.Icon size={25}/>
                            </a>
                            </>
                        ))} 
                    </div>
                </ul>
            </div>
        </div>
        </>
    );
};

export default NavBar;