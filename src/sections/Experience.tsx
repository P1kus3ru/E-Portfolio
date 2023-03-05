import useExperience from "~/hooks/useExperience";

const Experience = () => {
    const experiences = useExperience();
    return (
      <>
      <section className="resume-section" id="experience">
          <div className="resume-section-content">
              <h2 className="mb-5">Ervaring</h2>
              {experiences.map((x) => (
                <>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">{x.type}</h3>
                        {x.projects.map((y) => (
                            <>
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="flex-grow-1">
                                    <div className="subheading mb-3">{y.name}</div>
                                    <p>{y.desc}</p>
                                </div>
                                <div className="flex-shrink-0"><span className="text-primary">{y.date}</span></div>
                            </div>
                            </>
                        ))}
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