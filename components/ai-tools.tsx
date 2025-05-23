import { Card, CardContent } from "@/components/ui/card"
import { FileText, ImageIcon, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AiTools() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">AI 工具服务</h2>
          <p className="text-gray-600 mt-4">人工智能赋能，提升跨境电商运营效率</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group h-full">
            <div className="h-48 bg-gradient-to-r from-rose-400 to-pink-500 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <FileText className="w-16 h-16 text-white" />
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Listing 优化</h3>
              <p className="text-gray-600 mb-4">AI智能分析市场热门关键词，优化产品标题和描述，提升搜索排名和点击率</p>
              <Button variant="outline" className="w-full border-rose-300 text-rose-500 hover:bg-rose-50">
                了解更多
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
              <p className="text-gray-600 mb-4">一键生成专业电商主图和详情页，多风格可选，提升产品视觉吸引力</p>
              <Button variant="outline" className="w-full border-rose-300 text-rose-500 hover:bg-rose-50">
                了解更多
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
              <p className="text-gray-600 mb-4">智能生成TikTok短视频，多模板可选，无需专业技能，轻松制作爆款内容</p>
              <Button variant="outline" className="w-full border-rose-300 text-rose-500 hover:bg-rose-50">
                了解更多
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
