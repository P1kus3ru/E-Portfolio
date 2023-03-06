import Card from "~/components/Card";
import useProjects from "~/hooks/useProjects";

const Projects = () => {
    const types = useProjects();
    return (
      <>
      <section className="py-20" id="projects">
          <div className="text-center">
              <h2 className="text-5xl font-bold mb-5">Projecten</h2>
              {types.map((x) => (
                <>
                <div className="flex flex-col md:flex-row justify-between mb-5">
                    <div className="flex-grow">
                        <h3 className="text-4xl font-semibold my-5">{x.type}</h3>
                        <div className="flex flex-wrap md:justify-center gap-5">
                        {x.projects.map((y) => (
                            <>
                                <Card title={y.name} date={y.date} content={y.desc}/>
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
  
  export default Projects;