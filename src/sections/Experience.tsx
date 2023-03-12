import Card from "~/components/Card";
import useExperiences from "~/hooks/useExperiences";

const Experience = () => {
    const experience = useExperiences();
    return (
      <>
      <section className="py-20" id="experience">
          <div className="text-center">
              <h2 className="text-5xl font-bold mb-5">Ervaring</h2>
                <div className="flex flex-wrap md:justify-center gap-5">
                {experience.map((x) => (
                  <>
                    <Card key={x.name} title={x.function + " bij " + x.name} date={x.date} content={x.desc} />
                  </>
                ))}
              </div>
          </div>
      </section>
      </>
    );
  };
  
  export default Experience;