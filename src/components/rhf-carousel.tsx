import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RHFCarousel = () => {
  return (
    <Carousel className="w-full " opts={{ direction: "rtl" }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="mx-auto max-w-4xl">
              <img src={''} className="mx-auto" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
};

export default RHFCarousel;
