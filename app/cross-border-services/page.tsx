import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Package, Globe, Microscope } from "lucide-react"
import Image from "next/image"

export default function CrossBorderServices() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-rose-50 to-white overflow-hidden">
          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-gray-900">一站式</span>
                <span className="text-rose-500">跨境电商</span>
                <span className="text-gray-900">服务</span>
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl">
                从选品、物流到营销，提供全链路跨境电商解决方案，助力品牌出海
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-rose-500 hover:bg-rose-600 text-white">咨询服务</Button>
                <Button variant="outline">查看方案</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">跨境服务体系</h2>
              <p className="text-gray-600 mt-4">全方位支持您的跨境电商业务</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Microscope className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">选品服务</h3>
                  <p className="text-gray-600">基于大数据分析，帮助您发现高潜力产品，把握市场趋势</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Package className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">供应链服务</h3>
                  <p className="text-gray-600">对接优质供应商，提供产品定制、质检、包装等一站式服务</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Truck className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">物流服务</h3>
                  <p className="text-gray-600">提供全球仓储、配送、清关等一体化物流解决方案</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">营销服务</h3>
                  <p className="text-gray-600">提供TikTok达人营销、社交媒体运营、广告投放等全球营销服务</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Global Markets */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">全球市场覆盖</h2>
              <p className="text-gray-600 mt-4">助力品牌出海，拓展全球市场</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["北美", "欧洲", "东南亚", "中东", "南美", "俄罗斯"].map((region) => (
                <Card key={region} className="overflow-hidden">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-bold mb-2">{region}</h3>
                    <div className="w-16 h-16 mx-auto">
                      <Image
                        src={`/placeholder.svg?height=64&width=64&text=${region}`}
                        alt={region}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
