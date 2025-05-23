import { Header } from "@/components/header"
import { AgentServices } from "@/components/agent-services"
import { AiTools } from "@/components/ai-tools"
import { InfluencerNetwork } from "@/components/influencer-network"
import { Footer } from "@/components/footer"
import { Carousel } from "@/components/carousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-rose-50 to-white overflow-hidden">
          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="text-gray-900">跨境选品</span>
                <span className="text-rose-500">更智能</span>
                <span className="text-gray-900">，全球营销</span>
                <span className="text-rose-500">更精准</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                链接中国品牌与全球卖家及红人网络，依托AI+大数据重塑跨境电商链路，驱动中国商品快速触达全球
              </p>
            </div>
          </div>
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,99,132,0.2),transparent_70%)]"></div>
          </div>
        </section>

        {/* Banner Section (now Carousel) */}
        <Carousel />

        {/* Agent Services */}
        <AgentServices />

        {/* AI Tools */}
        <AiTools />

        {/* Influencer Network */}
        <InfluencerNetwork />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
