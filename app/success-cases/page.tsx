import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Factory, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SuccessCases() {
  // 模拟成功案例数据
  const governmentCases = [
    {
      id: 1,
      title: "佛山陶瓷产业带出海计划",
      image: "/placeholder.svg?height=300&width=500&text=佛山陶瓷产业带",
      summary: "琴弦平台助力佛山陶瓷产业带实现数字化转型，通过大数据分析和AI选品，帮助100+陶瓷企业成功出海...",
    },
    {
      id: 2,
      title: "中山灯饰产业带全球营销方案",
      image: "/placeholder.svg?height=300&width=500&text=中山灯饰产业带",
      summary: "为中山灯饰产业带提供一站式出海解决方案，通过红人营销网络，帮助产业带产品在北美市场销量提升300%...",
    },
  ]

  const brandCases = [
    {
      id: 3,
      title: "某知名家电品牌全球化战略",
      image: "/placeholder.svg?height=300&width=500&text=家电品牌出海",
      summary: "为国内知名家电品牌提供全球市场分析和产品定位，通过智能选品和红人营销，成功开拓东南亚和中东市场...",
    },
    {
      id: 4,
      title: "美妆品牌TikTok爆款打造",
      image: "/placeholder.svg?height=300&width=500&text=美妆品牌TikTok",
      summary: "通过AI工具和红人网络，帮助国内美妆品牌在TikTok平台打造爆款产品，单月销售额突破100万美元...",
    },
  ]

  const sellerCases = [
    {
      id: 5,
      title: "跨境卖家从0到月销10万美金",
      image: "/placeholder.svg?height=300&width=500&text=跨境卖家成长",
      summary: "为初创跨境卖家提供智能选品和出海诊断服务，帮助其在6个月内实现从0到月销10万美金的快速增长...",
    },
    {
      id: 6,
      title: "多平台运营卖家效率提升300%",
      image: "/placeholder.svg?height=300&width=500&text=多平台运营",
      summary: "通过AI工具和智能分销Agent，帮助多平台运营的跨境卖家提升运营效率300%，销售额同比增长150%...",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-rose-50 to-white overflow-hidden">
          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-gray-900">成功</span>
                <span className="text-rose-500">案例</span>
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl">
                琴弦平台助力产业带政府、中国品牌和跨境卖家成功出海的真实案例
              </p>
            </div>
          </div>
        </section>

        {/* Government Cases Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="flex items-center mb-8">
              <Building className="w-6 h-6 text-purple-500 mr-2" />
              <h2 className="text-3xl font-bold">产业带服务</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {governmentCases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Cases Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="flex items-center mb-8">
              <Factory className="w-6 h-6 text-blue-500 mr-2" />
              <h2 className="text-3xl font-bold">品牌出海</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {brandCases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}
            </div>
          </div>
        </section>

        {/* Seller Cases Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="flex items-center mb-8">
              <ShoppingBag className="w-6 h-6 text-green-500 mr-2" />
              <h2 className="text-3xl font-bold">跨境卖家</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {sellerCases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function CaseCard({ caseItem }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col md:flex-row">
      <div className="md:w-2/5 relative">
        <div className="aspect-[4/3] relative">
          <Image src={caseItem.image || "/placeholder.svg"} alt={caseItem.title} fill className="object-cover" />
        </div>
      </div>
      <CardContent className="p-6 md:w-3/5 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3">{caseItem.title}</h3>
          <p className="text-gray-600 mb-4">{caseItem.summary}</p>
        </div>
        <Link
          href={`/success-cases/${caseItem.id}`}
          className="text-rose-500 hover:text-rose-600 text-sm font-medium transition-colors self-start"
        >
          查看详情
        </Link>
      </CardContent>
    </Card>
  )
}
