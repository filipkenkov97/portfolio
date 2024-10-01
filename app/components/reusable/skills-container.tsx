import Image from "next/image";
type SKillProps = {
  title: string;
  img: string;
};

const Skills = ({ title, img }: SKillProps) => {
  
  return (
    <div
      id="skills-container"
      className="p-4 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300 hover:cursor-pointer"
    >
      <div className="grid grid-cols-2 gap-4 justify-between items-center">
        <div
          className={
            img === "/static/nextjs.png" || img === "/static/aws.png"
              ? "m-auto bg-white"
              : "m-auto"
          }
        >
          <Image src={img} alt="img" width="200" height="200" />
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="text-sm md:text-xl text-blue-800 font-bold">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
