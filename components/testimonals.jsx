import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "../utils/statData";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const Testimonals = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonials.map((testimonal, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardContent className="p-6">
                <p className="text-center text-gray-600 text-md">
                  {testimonal.content}
                </p>
                <div className="flex items-center justify-center pt-4">
                  <div className="px-3">
                    <Avatar className="w-12">
                      <AvatarImage
                        className="h-12 w-12 rounded-full"
                        src={testimonal.image}
                        alt={testimonal.name}
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="text-md font-bold">{testimonal.name}</p>
                    <p className="text-sm text-gray-500">{testimonal.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Testimonals;
