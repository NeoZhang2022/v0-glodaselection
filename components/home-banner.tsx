import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HomeBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/major-events" className="block group">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group-hover:border-rose-300 h-full">
              <div className="aspect-[16/9] relative">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=政府领导视察"
                  alt="港澳办夏宝龙主任、王伟中省长视察"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">港澳办夏宝龙主任、王伟中省长视察琴弦选品中心</h3>
                <p className="text-gray-600 text-sm mb-2">
                  国家港澳办夏宝龙主任、广东省王伟中省长莅临琴弦跨境选品中心视察指导工作...
                </p>
                <div className="flex items-center text-rose-500 group-hover:text-rose-600 transition-colors">
                  <span className="text-sm font-medium">了解更多</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cross-border-services" className="block group">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group-hover:border-rose-300 h-full">
              <div className="aspect-[16/9] relative">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=商品出海诊断"
                  alt="基于大数据+AI的商品出海诊断服务"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">基于大数据+AI的商品出海诊断服务</h3>
                <p className="text-gray-600 text-sm mb-2">
                  利用先进AI算法和大数据分析，为中国商品提供全面的出海潜力评估和市场定位...
                </p>
                <div className="flex items-center text-rose-500 group-hover:text-rose-600 transition-colors">
                  <span className="text-sm font-medium">了解更多</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/influencer-network" className="block group">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group-hover:border-rose-300 h-full">
              <div className="aspect-[16/9] relative">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=海外达人分销网络"
                  alt="基于海外达人分销网络"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">基于海外达人分销网络</h3>
                <p className="text-gray-600 text-sm mb-2">
                  连接10,000+全球红人资源，打造高效分销渠道，助力中国商品快速触达全球消费者...
                </p>
                <div className="flex items-center text-rose-500 group-hover:text-rose-600 transition-colors">
                  <span className="text-sm font-medium">了解更多</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
