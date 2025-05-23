import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Zap, Droplet, ThumbsDown } from "lucide-react"
import Image from "next/image"

export default function IntelligentSelection() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-rose-50 to-white overflow-hidden">
          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-gray-900">AI驱动的</span>
                <span className="text-rose-500">智能选品</span>
                <span className="text-gray-900">平台</span>
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl">
                基于大数据分析和AI算法，帮助您发现高潜力产品，把握市场趋势，提升销售业绩
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-rose-500 hover:bg-rose-600 text-white">开始选品</Button>
                <Button variant="outline">了解更多</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">智能选品功能</h2>
              <p className="text-gray-600 mt-4">全方位的选品工具，助您找到最适合的产品</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">爆款跟卖</h3>
                  <p className="text-gray-600">智能识别热销爆款产品，分析竞争情况，助您快速跟进市场热点</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">新品趋势</h3>
                  <p className="text-gray-600">预测新兴产品趋势，发现早期增长机会，抢占市场先机</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Droplet className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">蓝海选品</h3>
                  <p className="text-gray-600">发掘竞争较少但需求旺盛的蓝海产品，避开红海竞争</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <ThumbsDown className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">差评优化</h3>
                  <p className="text-gray-600">分析竞品差评原因，发现改进机会，打造更具竞争力的产品</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">热门产品类别</h2>
              <p className="text-gray-600 mt-4">覆盖全球主流电商平台热销品类</p>
            </div>

            <Tabs defaultValue="fashion" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                <TabsTrigger value="fashion">时尚服饰</TabsTrigger>
                <TabsTrigger value="beauty">美妆个护</TabsTrigger>
                <TabsTrigger value="home">家居生活</TabsTrigger>
                <TabsTrigger value="electronics">电子产品</TabsTrigger>
                <TabsTrigger value="sports">运动户外</TabsTrigger>
              </TabsList>

              <TabsContent value="fashion" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src={`/placeholder.svg?height=200&width=200&text=Fashion+${item}`}
                          alt={`Fashion product ${item}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-medium truncate">时尚产品 {item}</h4>
                        <p className="text-sm text-gray-500">热销指数: ★★★★☆</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Other tabs content would be similar */}
              <TabsContent value="beauty" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src={`/placeholder.svg?height=200&width=200&text=Beauty+${item}`}
                          alt={`Beauty product ${item}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-medium truncate">美妆产品 {item}</h4>
                        <p className="text-sm text-gray-500">热销指数: ★★★★★</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Other tabs would be implemented similarly */}
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
