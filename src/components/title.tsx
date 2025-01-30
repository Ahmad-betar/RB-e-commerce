import { cn } from "@/lib/utils";
import { t } from "i18next";

const Title = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div
      className={cn(
        "w-36 md:w-40 lg:w-60 h-4 bg-secondary rounded-tl-sm rounded-bl-sm relative my-5",
        className
      )}
    >
      <h1 className="absolute -top-4 left-1 text-lg md:text-2xl font-extrabold">
        {t(text)}
      </h1>
    </div>
  );
};

export default Title;
