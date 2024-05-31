import { cx } from "class-variance-authority";

interface workshopPart {
  title: string;
  text: React.ReactNode;
  image: string;
}

interface workshopProps {
  workshopPart: workshopPart;
  step: number;
}

const EventComponent = ({ workshopPart, step }: workshopProps) => {
  const stepGradient = [
    "from-yellow-500 to-[#EF754E]",
    "from-[#EF754E] to-red-500",
    "from-red-500 to-purple-500",
    "from-purple-500 to-purple-500",
  ];
  const stepText = [
    "text-yellow-500",
    "text-[#EF754E]",
    "text-red-500",
    "text-purple-500",
  ];
  const stepBackground = [
    "bg-yellow-500",
    "bg-[#EF754E]",
    "bg-red-500",
    "bg-purple-500",
  ];
  const stepBorder = [
    "border-yellow-500",
    "border-[#EF754E]",
    "border-red-500",
    "border-purple-500",
  ];

  const TextRight = ({ className = "" }) => (
    <div className={cx("relative grid grid-cols-1", className)}>
      <div className="absolute h-full pl-8 md:pl-0">
        <span
          className={cx(
            "absolute right-0 z-10 -mr-8 -mt-8 rounded-full border-8",
            stepBorder[step - 1]
          )}
        >
          <span
            className={cx(
              "m-2 flex h-9 w-9 items-center justify-center rounded-full text-2xl font-bold",
              stepBackground[step - 1]
            )}
          >
            {step}
          </span>
        </span>
        <span
          className={cx(
            "absolute right-0 flex h-full w-2 bg-gradient-to-b",
            stepGradient[step - 1]
          )}
        />
      </div>
      <div className=" w-3/5 flex flex-row items-center gap-4 pb-32 pl-20 gap-x-10">
        <img src={workshopPart.image} className="rounded-xl h-[20vh] hidden sm:block "></img>
        <div>
          <h3
            className={cx("text-2xl uppercase md:text-4xl mb-10", stepText[step - 1])}
          >
            {workshopPart.title}
          </h3>
            {workshopPart.text}
        </div>
      </div>
    </div>
  );

  return <TextRight />;
};

interface Props {
  workshopParts: workshopPart[];
}

const Timeline = ({ workshopParts }: Props) => {
  return (
    <div className="pt-8">
      {workshopParts.map((workshopPart, i) => (
        <EventComponent key={workshopPart.title} workshopPart={workshopPart} step={i + 1} />
      ))}
    </div>
  );
};

export default Timeline;
