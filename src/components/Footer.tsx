import useSocials from "~/hooks/useSocials";

const Footer = () => {
    const socials = useSocials();
    return (
        <>
        <footer className="footer items-center p-4 bg-neutral text-neutral-content bottom-0">
            <div className="grid-flow-col gap-4 md:place-self-center justify-self-end">
                {socials.map((x) => (
                    <>
                    <a href={x.link} target="_blank" rel="noreferrer">
                        <x.Icon />
                    </a>
                    </>
                ))}
            </div>
        </footer>
        </>
    );
};

export default Footer;