import { t } from "i18next";
import { Label } from "./ui/label";
import { Tabs, TabsTrigger, TabsList } from "./ui/tabs";
import { cn } from "@/lib/utils";
import { Controller, useFormContext } from "react-hook-form";

const RhfTab = ({
  label,
  elements,
  images,
  name, // Name of the field in the form
  required = false, // Optional required prop, default is false
}: {
  label: string;
  images: boolean;
  elements: string[];
  name: string; // Name of the field in the form
  required?: boolean; // Optional required prop
}) => {
  const { control } = useFormContext(); // Access the form control from the context

  return (
    <div className="flex flex-col items-start gap-2 px-5 md:px-20">
      <Label className="font-bold">{t(label)} :</Label>

      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: required ? t("form.required") : false }} // Add validation rules
        render={({ field, fieldState: { error } }) => (
          <div>
            <Tabs
              defaultValue={field.value}
              onValueChange={(value) => field.onChange(value)} // Update form value on tab change
            >
              <TabsList className="flex justify-start h-fit flex-wrap gap-2 w-full">
                {elements.map((element) => (
                  <TabsTrigger
                    key={element} // Add a key for React rendering
                    className={cn(
                      "p-0 w-fit h-10 rounded-full border data-[state=active]:border-black",
                      { "rounded-sm text-xs p-2 w-fit h-7": !images }
                    )}
                    value={element}
                  >
                    {images && <img src={element} />}
                    {!images && element}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            {error && (
              <p className="text-sm text-red-500 mt-1">{error.message}</p> // Display error message
            )}
          </div>
        )}
      />
    </div>
  );
};

export default RhfTab;
