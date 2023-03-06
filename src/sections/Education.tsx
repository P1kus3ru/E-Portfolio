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
      <section className="py-20" id="education">
          <div className="text-center">
              <h2 className="text-5xl font-bold mb-5">Opleiding</h2>
                <div className="flex flex-wrap md:justify-center gap-5">
                {educations.map((x) => (
                  <>
                    <div className="card max-w-lg bg-base-300 shadow-xl">
                        <div className="card-body">
                            <div className="flex flex-col">
                                <div className="card-title mb-3 md:flex-grow">{x.school}</div>
                                <div className="flex-shrink-0 text-accent font-bold">{x.date}</div>
                            </div>
                            <p>{x.course}</p>
                        </div>
                    </div>
                  </>
                ))}
              </div>
          </div>
      </section>
      </>
    );
  };
  
  export default Education;