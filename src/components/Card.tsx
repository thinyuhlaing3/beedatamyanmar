interface Props {
  id: string;
  zIndex: number;
  margin: { left: string; right: string };
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
}
export default function Card({
  id,
  zIndex,
  margin,
  title,
  description,
  features,
  imageSrc,
}: Props) {
  return (
    <div
      className="scroll-card sticky"
      style={{
        bottom: `${zIndex * -20}px`,
        zIndex,
        marginLeft: margin.left,
        marginRight: margin.right,
      }}
      id={id}
    >
      <div className="shadow-lg scroll-card-content grid grid-cols-1 bg-gray-800 items-center md:grid-cols-2 gap-6 border border-gray-700 rounded-lg py-16 pr-12 p-2">
        <div className="row-start-2 md:row-start-1 p-6 px-10">
          <h3 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-white">
            {title}
          </h3>
          <p className="font-sans mt-2 mb-6 text-lg text-gray-400">
            {description}
          </p>
          <ul className="space-y-4">
            {features.map((feature: any, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span className="size-5 rounded-full bg-gray-700 text-white grid place-items-center">
                  <svg
                    width="1.5em"
                    height="1.5em"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className="w-3.5 stroke-2 h-3.5"
                  >
                    <path
                      d="M5 13L9 17L19 7"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <p className="font-sans text-base text-gray-400">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
        <img
          alt={title}
          loading="lazy"
          className="rounded-md md:h-128 object-cover object-center w-full"
          src={imageSrc}
        />
      </div>
    </div>
  );
}
