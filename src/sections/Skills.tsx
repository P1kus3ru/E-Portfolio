import useSkills from "~/hooks/useSkills";
import useTranslations from "~/i18n/useTranslations";

const Skills = () => {
  const {langs, proglangs} = useSkills();
  const t = useTranslations();
    return (
      <>
      <section className="py-20 w-full" id="skills">
          <div className="text-center">
              <h2 className="text-5xl font-bold mb-5">{t.nav.skills}</h2>
              <div className="flex flex-wrap gap-5 justify-center">
                <div className="card w-96 bg-base-200 dark:bg-neutral shadow-xl hover:bg-base-300 dark:hover:bg-base-200 animate-on-scroll">
                  <div className="card-body">
                    <h2 className="card-title">{t.sections.languagesHeading}</h2>
                    <div className="flex flex-col gap-5">
                      {langs.map((x)=>(
                        <div key={x.name} className="flex items-center justify-between">
                          <a>{x.name}</a>
                          <progress className="progress progress-primary w-56" value={x.level} max="100"></progress>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-200 dark:bg-neutral shadow-xl hover:bg-base-300 dark:hover:bg-base-200 animate-on-scroll">
                  <div className="card-body">
                    <h2 className="card-title">{t.sections.programmingLanguagesHeading}</h2>
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