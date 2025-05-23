import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, ImageIcon, Video, Sparkles, Wand2, MessageSquare } from "lucide-react"

export default function AiTools() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-rose-50 to-white overflow-hidden">
          <div className="container max-w-7xl mx-auto relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="text-gray-900">跨境电商</span>
                <span className="text-rose-500">AI工具</span>
                <span className="text-gray-900">平台</span>
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl">
                一站式AI工具集，提升跨境电商运营效率，让内容创作和产品优化更简单
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-rose-500 hover:bg-rose-600 text-white">免费体验</Button>
                <Button variant="outline">查看演示</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Tools Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">AI工具集</h2>
              <p className="text-gray-600 mt-4">全方位提升跨境电商运营效率</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group h-full">
                <div className="h-48 bg-gradient-to-r from-rose-400 to-pink-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="w-16 h-16 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Listing 优化</h3>
                  <p className="text-gray-600 mb-4">
                    AI智能分析市场热门关键词，优化产品标题和描述，提升搜索排名和点击率。支持亚马逊、eBay、Shopee等主流平台。
                  </p>
                  <Button variant="outline" className="w-full border-rose-300 text-rose-500 hover:bg-rose-50">
                    立即使用
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group h-full">
                <div className="h-48 bg-gradient-to-r from-purple-400 to-indigo-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="w-16 h-16 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">图片生成</h3>
                  <p className="text-gray-600 mb-4">
                    一键生成专业电商主图和详情页，多风格可选，提升产品视觉吸引力。支持白底图、场景图、Lifestyle图等多种风格。
                  </p>
                  <Button variant="outline" className="w-full border-rose-300 text-rose-500 hover:bg-rose-50">
                    立即使用
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group h-full">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-cyan-500 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="w-16 h-16 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">视频生成</h3>
                  <p className="text-gray-600 mb-4">
                    智能生成TikTok短视频，多模板可选，无需专业技能，轻松制作爆款内容。支持产品展示、开箱、使用教程等多种类型。
                  </p>
                  <Button variant="outline" className="w-full border-rose-300 text-rose-500 hover:bg-rose-50">
                    立即使用
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">更多AI工具</h2>
              <p className="text-gray-600 mt-4">满足跨境电商全链路需求</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">客户评论分析</h3>
                  <p className="text-gray-600">AI自动分析产品评论，提取关键洞察，发现产品优势和改进点</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Wand2 className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">产品描述生成</h3>
                  <p className="text-gray-600">一键生成专业、吸引人的产品描述，多语言支持，提升转化率</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">AI营销文案</h3>
                  <p className="text-gray-600">生成引人注目的营销文案，适用于广告、社交媒体和电子邮件营销</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">使用流程</h2>
              <p className="text-gray-600 mt-4">简单三步，轻松使用AI工具</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-rose-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">选择工具</h3>
                <p className="text-gray-600">根据您的需求选择合适的AI工具</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-rose-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">输入需求</h3>
                <p className="text-gray-600">提供产品信息或需求描述</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-rose-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">获取结果</h3>
                <p className="text-gray-600">AI自动生成高质量内容，可直接使用或编辑</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
