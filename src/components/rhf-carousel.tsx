import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import RhfDialog from "./rhf-dialog";
import { Video } from "lucide-react";

const RHFCarousel = ({
  items,
  className,
  itemClassName,
  imgClassName,
  withPreview,
  vidoes,
  card = false,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
  imgClassName?: string;
  card?: boolean;
  withPreview?: (img: string) => void;
  vidoes?: string[];
}) => {
  return (
    <Carousel
      className={cn("w-full relative", className)}
      opts={{ direction: "rtl" }}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className={itemClassName}
            onClick={() => withPreview && withPreview(item)}
          >
            <div
              className={cn("mx-auto max-w-4xl h-full", {
                "border border-gray-100 shadow-lg": card,
                "cursor-pointer": withPreview,
              })}
            >
              <img
                src={item}
                className={cn("mx-auto h-full w-auto rounded-md", imgClassName)}
              />
            </div>
          </CarouselItem>
        ))}
        {vidoes?.map((video, index) => (
          <CarouselItem
            key={index}
            className={cn("flex justify-center items-center", itemClassName)}
          >
            <RhfDialog
              trigger={
                <div className="mx-auto max-w-4xl h-full">
                  <Video />
                </div>
              }
              content={
                <video controls className="w-full h-full rounded-lg">
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              }
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="absolute right-0" />
      <CarouselPrevious className="absolute left-0" />
    </Carousel>
  );
};

export default RHFCarousel;
