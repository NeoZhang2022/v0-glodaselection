import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Rocket, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-rose-50 to-white overflow-hidden">
          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-gray-900">关于</span>
                <span className="text-rose-500">琴弦</span>
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl">
                琴弦（Gloda Selection）是在琴澳深合区政府指导下，数说故事（Datastory）基于AI+大数据打造的一站式跨境电商智能选品和达人营销的产业互联网平台，致力于帮助中国品牌一件卖全球。
              </p>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">我们的使命</h2>
                <p className="text-lg text-gray-600 mb-4">
                  连接中国品牌与全球消费者，打破跨境电商壁垒，促进中国优质商品出海。
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  通过AI技术和大数据分析，我们为中国品牌和商家提供智能选品、达人营销和全链路跨境服务，助力中国制造在全球市场取得成功。
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mr-3 shrink-0">
                      <Target className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">愿景</h3>
                      <p className="text-gray-600 text-sm">成为全球领先的跨境电商智能服务平台</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mr-3 shrink-0">
                      <Award className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">价值观</h3>
                      <p className="text-gray-600 text-sm">创新、专业、诚信、共赢</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Company+Image"
                  alt="公司形象"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Advantages */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">核心优势</h2>
              <p className="text-gray-600 mt-4">我们的独特价值</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">AI技术驱动</h3>
                  <p className="text-gray-600">自主研发的AI算法，为跨境电商提供智能选品、内容生成和营销决策支持</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">全球达人网络</h3>
                  <p className="text-gray-600">拥有10,000+优质TikTok达人资源，覆盖全球主要市场和行业</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">一站式服务</h3>
                  <p className="text-gray-600">从选品、内容创作到达人营销，提供跨境电商全链路解决方案</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">联系我们</h2>
              <p className="text-gray-600 mt-4">期待与您合作</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 flex items-start">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">公司地址</h3>
                    <p className="text-gray-600">广东省珠海市横琴新区环岛东路3000号 ICC国际商务中心2座10楼</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 flex items-start">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mr-4 shrink-0">
                    <Phone className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">联系电话</h3>
                    <p className="text-gray-600">020-38061725</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 flex items-start">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mr-4 shrink-0">
                    <Mail className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">电子邮箱</h3>
                    <p className="text-gray-600">contact@glodaselection.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
