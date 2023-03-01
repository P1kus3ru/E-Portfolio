
interface NavBarProps  { 
    children?: React.ReactNode 
}

const NavBar = ({ children } : NavBarProps) => {
    return (
        <>
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                <div className="flex flex-col">
                    <a className="text-center normal-case text-xl bg-base-300">Jona De Neve</a>
                    <div className="w-full navbar bg-base-200">
                        <div className="navbar-start ">
                            <div className="flex-none lg:hidden">
                                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                        </div>
                        <div className="navbar-center">
                            <div className="flex-none hidden lg:block">
                                <ul className="menu menu-horizontal">
                                    <li><a>Home</a></li>
                                    <li><a>Experience</a></li>
                                    <li><a>Education</a></li>
                                    <li><a>Skills</a></li>
                                    <li><a>Interests</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-end">
                        </div>
                    </div>
                </div>
                {children}
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-base-100">
                    <li><a>Home</a></li>
                    <li><a>Experience</a></li>
                    <li><a>Education</a></li>
                    <li><a>Skills</a></li>
                    <li><a>Interests</a></li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default NavBar;