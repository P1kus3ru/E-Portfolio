import Card from "~/components/Card";
import useExperiences from "~/hooks/useExperiences";
import useTranslations from "~/i18n/useTranslations";

const Experience = () => {
    const experience = useExperiences();
    const t = useTranslations();
    return (
      <>
      <section className="py-20 w-full" id="experience">
          <div className="text-center">
              <h2 className="text-5xl font-bold mb-5">{t.nav.experience}</h2>
                <div className="flex flex-wrap md:justify-center gap-5">
                {experience.map((x) => (
                    <Card key={x.name + x.function} title={`${x.function} ${t.sections.experienceConnector} ${x.name}`} date={x.date} content={x.desc} />
                ))}
              </div>
          </div>
      </section>
      </>
    );
  };
  
  export default Experience;