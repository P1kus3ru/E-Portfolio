import Card from "~/components/Card";
import useQualifications from "~/hooks/useQualifications";
import useTranslations from "~/i18n/useTranslations";

const Qualifications = () => {
  const qualifications = useQualifications();
  const t = useTranslations();
    return (
      <>
      <section className="py-20 w-full" id="qualifications">
          <div className="text-center">
              <h2 className="text-5xl font-bold mb-5">{t.nav.qualifications}</h2>
                <div className="flex flex-wrap md:justify-center gap-5">
                {qualifications.map((x) => (
                    <Card key={x.title} title={x.title} date={x.date} content={x.institution} />
                ))}
              </div>
          </div>
      </section>
      </>
    );
  };
  
  export default Qualifications;