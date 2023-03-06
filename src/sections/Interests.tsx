import Image from "next/image";
import useInterests from "~/hooks/useInterests";


const Interests = () => {
  const interests = useInterests();
  let counter = 0;
    return (
      <>
      <section className="w-full p-20" id="interests">
          <div className="flex flex-col items-center text-center">
              <h2 className="text-5xl font-bold mb-5">Interesses</h2>
              <div className="carousel w-1/2">
                {interests.map((x)=> {
                  counter++;
                  console.log((((counter+interests.length)%interests.length)-1));
                  
                  return (<>
                  <div id={"slide" + counter.toString()} className="carousel-item flex flex-col relative w-full gap-3">
                    <h1 className="text-2xl">{x.name}</h1>
                    <p className="">{x.desc}</p>
                    <div className="">
                      <Image 
                      src={x.img.src}
                      alt={x.img.alt}
                      className="w-full" 
                      />
                      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={"#slide" + (((counter+interests.length)%interests.length)-1).toString()} className="btn btn-circle opacity-75">❮</a> 
                        <a href={"#slide" + ((counter%interests.length)+1).toString()} className="btn btn-circle opacity-75">❯</a>
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