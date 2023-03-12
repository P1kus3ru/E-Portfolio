import Image from "next/image";
import useInterests from "~/hooks/useInterests";


const Interests = () => {
  const interests = useInterests();
  let counter = -1;
    return (
      <>
      <section className="w-full py-20" id="interests">
          <div className="flex flex-col items-center text-center">
              <h2 className="text-5xl font-bold mb-5">Interesses</h2>
              <div className="carousel max-w-5xl">
                {interests.map((x)=> {
                  counter++;
                  
                  return (<>
                  <div key={x.name} id={"slide" + counter.toString()} className="carousel-item flex flex-col relative w-full gap-3 justify-between">
                    <h1 className="text-2xl">{x.name}</h1>
                    <p className="">{x.desc}</p>
                    <div className="">
                      <Image 
                      src={x.img.src}
                      alt={x.img.alt}
                      className="w-full aspect-[6/4] object-cover"
                      />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={"#slide" + ((counter + interests.length -1)%interests.length).toString()} className="btn btn-circle opacity-75">❮</a> 
                        <a href={"#slide" + ((counter+1)%interests.length).toString()} className="btn btn-circle opacity-75">❯</a>
                      </div>
                    </div>
                  </div> 
                  </>)
                })}
              </div>
          </div>
      </section>
      </>
    );
  };
  
  export default Interests;