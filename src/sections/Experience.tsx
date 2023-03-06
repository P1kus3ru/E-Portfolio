import useExperience from "~/hooks/useExperience";

const Experience = () => {
    const experiences = useExperience();
    return (
      <>
      <section className="py-20" id="experience">
          <div className="text-center">
              <h2 className="text-5xl font-bold mb-5">Ervaring</h2>
              {experiences.map((x) => (
                <>
                <div className="flex flex-col md:flex-row justify-between mb-5">
                    <div className="flex-grow">
                        <h3 className="text-4xl font-semibold my-5">{x.type}</h3>
                        <div className="flex flex-wrap md:justify-center gap-5">
                        {x.projects.map((y) => (
                            <>
                                <div className="card max-w-lg bg-base-300 shadow-xl">
                                    <div className="card-body">
                                        <div className="flex flex-col md:flex-row gap-2">
                                            <div className="card-title mb-3 md:flex-grow text-center">{y.name}</div>
                                            <div className="flex-shrink-0 text-accent font-bold">{y.date}</div>
                                        </div>
                                        <p>{y.desc}</p>
                                    </div>
                                </div>
                            </>
                        ))}
                        </div>
                    </div>
                </div>
                </>
              ))}
          </div>
      </section>
      </>
    );
  };
  
  export default Experience;