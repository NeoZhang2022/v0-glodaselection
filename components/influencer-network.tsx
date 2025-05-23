import Image from "next/image"
import { Button } from "@/components/ui/button"

export function InfluencerNetwork() {
  // Generate 30 placeholder influencer avatars
  const influencers = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    avatar: `/placeholder.svg?height=80&width=80`,
  }))

  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">达人网络</h2>
          <p className="text-gray-600 mt-4">连接全球优质TikTok达人，助力品牌出海</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-3 grid grid-cols-5 sm:grid-cols-6 gap-4">
            {influencers.map((influencer) => (
              <div key={influencer.id} className="relative group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={influencer.avatar || "/placeholder.svg"}
                    alt={`TikTok Influencer ${influencer.id}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="mb-6">
                <div className="text-5xl font-bold text-rose-500 mb-2">10,000+</div>
                <div className="text-xl font-medium">合作达人</div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold mb-2">覆盖全球主流平台</div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm">TikTok</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Instagram</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">YouTube</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Facebook</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold mb-2">覆盖行业</div>
                <div className="text-xl text-gray-600">20+ 个热门行业</div>
              </div>

              <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">查看全部达人</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
