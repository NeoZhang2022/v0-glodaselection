import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Globe, FileText, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MajorEvents() {
  // 模拟活动数据
  const leadershipEvents = [
    {
      id: 1,
      title: "港澳办夏宝龙主任视察琴弦选品中心",
      date: "2023-12-15",
      image: "/placeholder.svg?height=300&width=500&text=夏宝龙主任视察",
      summary: "国家港澳办夏宝龙主任莅临琴弦跨境选品中心视察指导工作，对平台建设和发展给予高度评价...",
      featured: true,
    },
    {
      id: 2,
      title: "广东省王伟中省长调研琴弦平台",
      date: "2023-11-20",
      image: "/placeholder.svg?height=300&width=500&text=王伟中省长调研",
      summary: "广东省王伟中省长带队调研琴弦跨境选品中心，了解平台如何助力广东制造走向全球市场...",
    },
    {
      id: 7,
      title: "珠海市政府领导考察琴弦平台",
      date: "2023-10-25",
      summary: "珠海市政府领导一行考察琴弦跨境选品中心，了解平台发展情况和未来规划...",
    },
    {
      id: 8,
      title: "横琴粤澳深度合作区管委会领导调研",
      date: "2023-09-18",
      summary: "横琴粤澳深度合作区管委会领导调研琴弦平台，探讨跨境电商发展新机遇...",
    },
  ]

  const policyEvents = [
    {
      id: 3,
      title: "琴澳深合区跨境电商政策发布会",
      date: "2023-10-10",
      image: "/placeholder.svg?height=300&width=500&text=政策发布会",
      summary: "琴澳深合区发布最新跨境电商扶持政策，琴弦平台作为重点项目获得政策支持...",
      featured: true,
    },
    {
      id: 6,
      title: "琴弦平台与粤港澳大湾区产业带合作签约仪式",
      date: "2023-07-20",
      image: "/placeholder.svg?height=300&width=500&text=合作签约仪式",
      summary: "琴弦平台与粤港澳大湾区多个产业带签署战略合作协议，助力产业带产品出海...",
    },
    {
      id: 9,
      title: "跨境电商新政解读会",
      date: "2023-08-15",
      summary: "琴弦平台举办跨境电商新政解读会，帮助企业了解最新政策变化和机遇...",
    },
    {
      id: 10,
      title: "粤港澳大湾区跨境电商发展论坛",
      date: "2023-06-28",
      summary: "琴弦平台参与粤港澳大湾区跨境电商发展论坛，分享跨境电商发展趋势和机遇...",
    },
  ]

  const marketEvents = [
    {
      id: 4,
      title: "北美市场跨境电商新规解读",
      date: "2023-09-25",
      image: "/placeholder.svg?height=300&width=500&text=北美市场新规",
      summary: "琴弦平台举办北美市场跨境电商新规解读会，帮助中国卖家了解最新政策变化...",
      featured: true,
    },
    {
      id: 5,
      title: "东南亚跨境电商市场趋势分析会",
      date: "2023-08-15",
      image: "/placeholder.svg?height=300&width=500&text=东南亚市场趋势",
      summary: "琴弦平台联合行业专家分析东南亚跨境电商市场趋势，为中国品牌出海提供指导...",
    },
    {
      id: 11,
      title: "欧洲市场准入规则变化分析",
      date: "2023-07-05",
      summary: "琴弦平台举办欧洲市场准入规则变化分析会，帮助企业应对新规挑战...",
    },
    {
      id: 12,
      title: "中东市场跨境电商机遇分析",
      date: "2023-05-20",
      summary: "琴弦平台分析中东市场跨境电商发展机遇，为企业拓展中东市场提供指导...",
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
                <span className="text-gray-900">重要</span>
                <span className="text-rose-500">活动</span>
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl">
                琴弦平台重要活动、政策解读及全球市场动态，助力中国品牌出海
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Events Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="flex items-center mb-8">
              <Globe className="w-6 h-6 text-blue-500 mr-2" />
              <h2 className="text-3xl font-bold">领导关怀</h2>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
              {/* Featured Event - Left Side */}
              <div className="md:col-span-7">
                {leadershipEvents
                  .filter((event) => event.featured)
                  .map((event) => (
                    <Card key={event.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <div className="aspect-[16/9] relative">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">{event.date}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.summary}</p>
                        <Link
                          href={`/major-events/${event.id}`}
                          className="text-rose-500 hover:text-rose-600 text-sm font-medium transition-colors flex items-center"
                        >
                          查看详情 <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {/* Event List - Right Side */}
              <div className="md:col-span-5">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">更多领导关怀活动</h3>
                    <div className="space-y-4">
                      {leadershipEvents
                        .filter((event) => !event.featured)
                        .map((event) => (
                          <div key={event.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Calendar className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-400">{event.date}</span>
                            </div>
                            <Link href={`/major-events/${event.id}`} className="group">
                              <h4 className="font-medium mb-1 group-hover:text-rose-500 transition-colors">
                                {event.title}
                              </h4>
                              <p className="text-sm text-gray-500 line-clamp-2">{event.summary}</p>
                            </Link>
                          </div>
                        ))}
                    </div>
                    <div className="mt-4 text-center">
                      <Link
                        href="/major-events/leadership"
                        className="text-rose-500 hover:text-rose-600 text-sm font-medium transition-colors inline-flex items-center"
                      >
                        查看全部 <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Events Section */}
        <section className="py-16 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="flex items-center mb-8">
              <FileText className="w-6 h-6 text-green-500 mr-2" />
              <h2 className="text-3xl font-bold">区域政策</h2>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
              {/* Featured Event - Left Side */}
              <div className="md:col-span-7">
                {policyEvents
                  .filter((event) => event.featured)
                  .map((event) => (
                    <Card key={event.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <div className="aspect-[16/9] relative">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">{event.date}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.summary}</p>
                        <Link
                          href={`/major-events/${event.id}`}
                          className="text-rose-500 hover:text-rose-600 text-sm font-medium transition-colors flex items-center"
                        >
                          查看详情 <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {/* Event List - Right Side */}
              <div className="md:col-span-5">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">更多区域政策活动</h3>
                    <div className="space-y-4">
                      {policyEvents
                        .filter((event) => !event.featured)
                        .map((event) => (
                          <div key={event.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Calendar className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-400">{event.date}</span>
                            </div>
                            <Link href={`/major-events/${event.id}`} className="group">
                              <h4 className="font-medium mb-1 group-hover:text-rose-500 transition-colors">
                                {event.title}
                              </h4>
                              <p className="text-sm text-gray-500 line-clamp-2">{event.summary}</p>
                            </Link>
                          </div>
                        ))}
                    </div>
                    <div className="mt-4 text-center">
                      <Link
                        href="/major-events/policy"
                        className="text-rose-500 hover:text-rose-600 text-sm font-medium transition-colors inline-flex items-center"
                      >
                        查看全部 <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Market Events Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="flex items-center mb-8">
              <Globe className="w-6 h-6 text-orange-500 mr-2" />
              <h2 className="text-3xl font-bold">市场动态</h2>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
              {/* Featured Event - Left Side */}
              <div className="md:col-span-7">
                {marketEvents
                  .filter((event) => event.featured)
                  .map((event) => (
                    <Card key={event.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <div className="aspect-[16/9] relative">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">{event.date}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                        <p className="text-gray-600 mb-4">{event.summary}</p>
                        <Link
                          href={`/major-events/${event.id}`}
                          className="text-rose-500 hover:text-rose-600 text-sm font-medium transition-colors flex items-center"
                        >
                          查看详情 <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {/* Event List - Right Side */}
              <div className="md:col-span-5">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">更多市场动态活动</h3>
                    <div className="space-y-4">
                      {marketEvents
                        .filter((event) => !event.featured)
                        .map((event) => (
                          <div key={event.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Calendar className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-400">{event.date}</span>
                            </div>
                            <Link href={`/major-events/${event.id}`} className="group">
                              <h4 className="font-medium mb-1 group-hover:text-rose-500 transition-colors">
                                {event.title}
                              </h4>
                              <p className="text-sm text-gray-500 line-clamp-2">{event.summary}</p>
                            </Link>
                          </div>
                        ))}
                    </div>
                    <div className="mt-4 text-center">
                      <Link
                        href="/major-events/market"
                        className="text-rose-500 hover:text-rose-600 text-sm font-medium transition-colors inline-flex items-center"
                      >
                        查看全部 <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
