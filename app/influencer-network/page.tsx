import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Globe, Award } from "lucide-react"
import Image from "next/image"

export default function InfluencerNetwork() {
  // 生成12个示例达人
  const influencers = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `达人${i + 1}`,
    followers: Math.floor(Math.random() * 900000) + 100000,
    category: ["美妆", "时尚", "生活", "电子", "美食"][Math.floor(Math.random() * 5)],
    engagement: (Math.random() * 5 + 2).toFixed(1) + "%",
    platform: ["TikTok", "Instagram", "YouTube", "Facebook", "Twitter", "小红书"][Math.floor(Math.random() * 6)],
    avatar: `/placeholder.svg?height=200&width=200&text=Influencer+${i + 1}`,
  }))

  // 社交媒体平台数据
  const platforms = [
    {
      name: "TikTok",
      icon: "/placeholder.svg?height=60&width=60&text=TikTok",
      influencers: "5,000+",
      regions: "全球",
      description: "短视频内容创作，高互动率，年轻用户群体",
    },
    {
      name: "Instagram",
      icon: "/placeholder.svg?height=60&width=60&text=Instagram",
      influencers: "3,000+",
      regions: "欧美、中东",
      description: "图片和短视频内容，时尚、美妆、生活方式领域强势",
    },
    {
      name: "YouTube",
      icon: "/placeholder.svg?height=60&width=60&text=YouTube",
      influencers: "1,500+",
      regions: "全球",
      description: "长视频内容，产品深度评测和开箱，高转化率",
    },
    {
      name: "Facebook",
      icon: "/placeholder.svg?height=60&width=60&text=Facebook",
      influencers: "2,000+",
      regions: "东南亚、南美",
      description: "综合内容平台，成熟用户群体，家居、电子产品领域强势",
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
                <span className="text-gray-900">全球</span>
                <span className="text-rose-500">红人</span>
                <span className="text-gray-900">网络</span>
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl">
                连接10,000+优质全球社交媒体红人，覆盖TikTok、Instagram、YouTube等主流平台，助力中国品牌出海和产品推广
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-rose-500 hover:bg-rose-600 text-white">寻找达人</Button>
                <Button variant="outline">达人入驻</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Platforms */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">全球社交媒体平台</h2>
              <p className="text-gray-600 mt-4">覆盖主流社交媒体平台，触达全球目标消费者</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {platforms.map((platform) => (
                <Card key={platform.name} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 mr-4 relative">
                        <Image
                          src={platform.icon || "/placeholder.svg"}
                          alt={platform.name}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{platform.name}</h3>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="font-medium">达人数量：</span>
                        {platform.influencers}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">主要区域：</span>
                        {platform.regions}
                      </p>
                      <p className="text-sm text-gray-600">{platform.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-rose-500 mb-2">10,000+</div>
                  <p className="text-gray-600">合作达人</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-rose-500 mb-2">20+</div>
                  <p className="text-gray-600">覆盖行业</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-rose-500 mb-2">50+</div>
                  <p className="text-gray-600">覆盖国家</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-rose-500 mb-2">5亿+</div>
                  <p className="text-gray-600">总粉丝覆盖</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Influencers */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">精选红人</h2>
              <p className="text-gray-600 mt-4">来自全球各大平台的优质内容创作者</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {influencers
                .filter((_, i) => i < 8)
                .map((influencer) => (
                  <Card key={influencer.id} className="overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src={influencer.avatar || "/placeholder.svg"}
                        alt={influencer.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                        {influencer.platform}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-medium">{influencer.name}</h4>
                      <p className="text-sm text-gray-500">粉丝: {(influencer.followers / 10000).toFixed(1)}万</p>
                      <p className="text-sm text-gray-500">互动率: {influencer.engagement}</p>
                      <p className="text-sm text-gray-500">类别: {influencer.category}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">红人合作优势</h2>
              <p className="text-gray-600 mt-4">高效、透明、专业的红人合作流程</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">精准匹配</h3>
                  <p className="text-gray-600">AI算法精准匹配产品与红人，提高合作成功率和营销效果</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">全球覆盖</h3>
                  <p className="text-gray-600">覆盖全球主要市场的红人资源，助力品牌快速出海，拓展国际市场</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">专业服务</h3>
                  <p className="text-gray-600">提供从选品、内容策划到数据分析的一站式红人营销服务</p>
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
