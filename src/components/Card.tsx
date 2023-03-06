interface CardProps { 
    title: string,
    date: string,
    content: string
}

const Card = ({title, date, content}: CardProps) => {
    return (
        <>
        <div className="card max-w-lg bg-base-200 shadow-xl hover:bg-base-300 dark:hover:bg-neutral">
            <div className="card-body">
                <div className="flex flex-col items-center gap-2">
                    <div className="text-primary dark:text-accent font-bold">{date}</div>
                    <div className="card-title mb-3 text-center">{title}</div>
                </div>
                <p>{content}</p>
            </div>
        </div>
        </>
    );
}

export default Card;