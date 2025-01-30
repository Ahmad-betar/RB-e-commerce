import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const RHFCarousel = ({
  items,
  className,
  itemClassName,
  card = false,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
  card?: boolean;
}) => {
  return (
    <Carousel
      className={cn("w-full relative", className)}
      opts={{ direction: "rtl" }}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className={itemClassName}>
            <div
              className={cn("mx-auto max-w-4xl h-full", {
                "border border-gray-100 shadow-lg": card,
              })}
            >
              <img src={item} className="mx-auto h-full w-auto" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="absolute right-0" />
      <CarouselPrevious className="absolute left-0" />
    </Carousel>
  );
};

export default RHFCarousel;
