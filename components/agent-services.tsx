import { Card, CardContent } from "@/components/ui/card"
import { Microscope, Search, ShoppingCart, Share2 } from "lucide-react"

export function AgentServices() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">跨境业务 Agent 服务</h2>
          <p className="text-gray-600 mt-4">智能代理助您轻松应对跨境电商各个环节的挑战</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-rose-300 h-full">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                <Microscope className="w-7 h-7 text-rose-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">出海诊断 Agent</h3>
              <p className="text-gray-600 text-sm">全面分析产品市场潜力，评估竞争力，提供优化建议</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-rose-300 h-full">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                <Search className="w-7 h-7 text-rose-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">智能选品 Agent</h3>
              <p className="text-gray-600 text-sm">基于大数据分析，智能推荐高潜力产品，把握市场趋势</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-rose-300 h-full">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                <ShoppingCart className="w-7 h-7 text-rose-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">智能分销 Agent</h3>
              <p className="text-gray-600 text-sm">自动化上架流程，多平台同步发布，高效管理库存</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-rose-300 h-full">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                <Share2 className="w-7 h-7 text-rose-500" />
              </div>
              <h3 className="text-lg font-bold mb-3">红人营销 Agent</h3>
              <p className="text-gray-600 text-sm">智能匹配产品与达人，自动化分销流程，提升转化率</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
