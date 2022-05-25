import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className=" text-7xl mb-10"> P1kus3ru's Arcade</h1>
                <Link to="login" ><button className="relative border-collapse border-2 border-solid border-black rounded-full text-lg px-6 py-2 bg-opacity-80 hover:bg-opacity-50 bg-blue-300 dark:bg-opacity-80 dark:hover:bg-opacity-50 dark:bg-green-500">Log in</button></Link>
            </div>
        </>
    );
}