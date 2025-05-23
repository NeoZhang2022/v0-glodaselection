"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Carousel() {
  const [current, setCurrent] = useState(0)

  const slides = [
    {
      id: 1,
      title: "港澳办夏宝龙主任、王伟中省长视察琴弦选品中心",
      description: "国家港澳办夏宝龙主任、广东省王伟中省长莅临琴弦跨境选品中心视察指导工作...",
      image: "/placeholder.svg?height=500&width=1200&text=政府领导视察",
      link: "/major-events",
    },
    {
      id: 2,
      title: "基于大数据+AI的商品出海诊断服务",
      description: "利用先进AI算法和大数据分析，为中国商品提供全面的出海潜力评估和市场定位...",
      image: "/placeholder.svg?height=500&width=1200&text=商品出海诊断",
      link: "/cross-border-services",
    },
    {
      id: 3,
      title: "基于海外达人分销网络",
      description: "连接10,000+全球红人资源，打造高效分销渠道，助力中国商品快速触达全球消费者...",
      image: "/placeholder.svg?height=500&width=1200&text=海外达人分销网络",
      link: "/influencer-network",
    },
  ]

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <section className="relative py-12 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-opacity duration-500 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <div className="relative aspect-[21/9] w-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h2>
                  <p className="text-sm md:text-base mb-4 max-w-2xl">{slide.description}</p>
                  <Link href={slide.link}>
                    <Button className="bg-rose-500 hover:bg-rose-600 text-white">了解更多</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">上一张</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">下一张</span>
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${index === current ? "bg-white" : "bg-white/50"}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
