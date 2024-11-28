"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { features, howItWorks } from "../utils/statData";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Testimonals from "@/components/testimonals";

export default function Home() {
  return (
    <div className="container px-2  mx-auto w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12  ">
        <div className="lg:w-1/2 mx-auto  py-20">
          <p className="text-7xl textGradient pb-4 pr-2">
            Simplify Your Scheduling
          </p>
          <p className="text-xl text-gray-600 my-10">
            Schedulrr helps you manage your time effectively. Create events, set
            your availability, and let others book time with you seamlessly.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="text-lg">
              Get Started <ArrowRight className="ml-2" />{" "}
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center ">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              layout="fill"
              objectFit="contain"
              src="/banner4.png"
              alt="app-info-logo"
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-3xl textGradient"> Key features</p>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3">
          {features.map((feature, index) => {
            return (
              <Card key={index} className="p-4 m-2 flex flex-col items-center ">
                <feature.icon className="h-14 w-14 text-blue-500" />
                <CardHeader className="font-semibold">
                  {feature.title}
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center mb-4">
        <p className="text-3xl textGradient">What People loved about</p>
        <Testimonals />
      </div>

      <div className="w-full flex flex-col justify-center items-center mb-4">
        <p className="text-3xl textGradient">How it works</p>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {howItWorks.map((step, index) => {
            return (
              <div key = {index} className="flex justify-center items-center flex-col">
                <div className="bg-blue-200 rounded-full h-10 w-10 flex justify-center items-center text-blue-600 font-bold">{index+1}</div>
                <h3 className="black font-bold text-md">{step.step}</h3>
                <p className="text-gray-500 text-sm text-center">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-blue-500 p-8 rounded-md text-white flex justify-center items-center flex-col w-full">
        <p className="text-2xl font-bold  text-center p-2">Ready to simplify Your Scheduling</p>
        <p className="text-center text-lg p-2"> Join with thousands of professionals who trust us for efficient time management</p>
        <Button size='lg' variant='secondary' className='text-blue-500 '> Start For Free<Link href={'/dashboard'}>
         <ArrowRight height='5' width='5'/>
        </Link></Button>
      </div>
    </div>
  );
}
