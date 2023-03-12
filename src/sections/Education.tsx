import Card from "~/components/Card";

function useEducation() {
  return [
    {
      school: 'HOGENT',
      course: 'Bachelor Toegepaste Informatica',
      date: 'September 2020 - Heden',
    },
    {
      school: 'Leiepoort campus Sint-Hendrik Deinze',
      course: 'ASO - Wetenschappen-Wiskunde',
      date: 'September 2014 - Juni 2020',
    },
  ]
}

const Education = () => {
  const educations = useEducation();
    return (
      <>
      <section className="py-20 w-full" id="education">
          <div className="text-center">
              <h2 className="text-5xl font-bold mb-5">Opleiding</h2>
                <div className="flex flex-wrap md:justify-center gap-5">
                {educations.map((x) => (
                  <>
                    <Card key={x.course} title={x.course} date={x.date} content={x.school} />
                  </>
                ))}
              </div>
          </div>
      </section>
      </>
    );
  };
  
  export default Education;