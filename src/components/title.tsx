import { t } from "i18next";

const Title = ({ text }: { text: string }) => {
  return (
    <div className="w-20 md:w-40 text-sm md:text-md lg:w-60 lg:text-lg h-4 bg-secondary rounded-tl-sm rounded-bl-sm relative my-10">
      <h1 className="absolute -top-4 left-1 text-2xl font-extrabold">
        {t(text)}
      </h1>
    </div>
  );
};

export default Title;
