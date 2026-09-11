import Card from "~/components/Card";
import useEducation from "~/hooks/useEducation";

const Education = () => {
  const educations = useEducation();
    return (
      <>
      <section className="py-20 w-full" id="education">
          <div className="text-center">
              <h2 className="text-5xl font-bold mb-5">Opleiding</h2>
                <div className="flex flex-wrap md:justify-center gap-5">
                {educations.map((x) => (
                    <Card key={x.course} title={x.course} date={x.date} content={x.school} />
                ))}
              </div>
          </div>
      </section>
      </>
    );
  };
  
  export default Education;