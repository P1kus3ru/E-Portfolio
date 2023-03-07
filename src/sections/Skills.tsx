import useSkills from "~/hooks/useSkills";

const Skills = () => {
  const {langs, proglangs} = useSkills();
    return (
      <>
      <section className="py-20" id="skills">
          <div className="text-center">
              <h2 className="text-5xl font-bold mb-5">Skills</h2>
              <div className="flex gap-5">
                <div className="card w-96 bg-base-200 dark:bg-neutral shadow-xl hover:bg-base-300 dark:hover:bg-base-200">
                  <div className="card-body">
                    <h2 className="card-title">Talen</h2>
                    <p className="flex flex-wrap gap-3 items-center justify-between">
                      {langs.map((x)=>(
                        <>
                          <a>{x.name}</a>
                          <progress className="progress progress-primary w-56" value={x.level} max="100"></progress>
                        </>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="card w-96 bg-base-200 dark:bg-neutral shadow-xl hover:bg-base-300 dark:hover:bg-base-200">
                  <div className="card-body">
                    <h2 className="card-title">Programeertalen</h2>
                    <p className="flex flex-wrap gap-3">
                      {proglangs.map((x)=>(
                        <x.Icon key={x.name} size={50}/>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
          </div>
      </section>
      </>
    );
  };
  
  export default Skills;