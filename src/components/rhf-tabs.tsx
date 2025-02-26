import { t } from "i18next";
import { Label } from "./ui/label";
import { Tabs, TabsTrigger, TabsList } from "./ui/tabs";
import { cn } from "@/lib/utils";

const RhfTab = ({
  label,
  elements,
  images,
}: {
  label: string;
  images: boolean;
  elements: string[];
}) => {
  return (
    <div className="flex flex-col items-start gap-2 px-5 md:px-20">
      <Label className="font-bold">{t(label)} :</Label>

      <Tabs defaultValue="account">
        <TabsList className="flex justify-start h-fit flex-wrap gap-2 w-full">
          {elements.map((element) => (
            <TabsTrigger
              className={cn(
                "p-0 w-10 h-10 rounded-full border data-[state=active]:border-black",
                { "rounded-sm text-xs p-0 w-7 h-7": !images }
              )}
              value={element}
            >
              {images && <img src={element} />}
              {!images && element}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default RhfTab;
