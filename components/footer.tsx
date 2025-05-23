import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image src="/logo-white.svg" alt="琴弦 Gloda Selection" width={150} height={50} className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 mb-4">链接中国品牌与全球卖家及红人网络，依托AI+大数据重塑跨境电商链路</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4">产品服务</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/intelligent-selection" className="text-gray-400 hover:text-white transition-colors">
                  智能选品
                </Link>
              </li>
              <li>
                <Link href="/influencer-network" className="text-gray-400 hover:text-white transition-colors">
                  达人网络
                </Link>
              </li>
              <li>
                <Link href="/ai-tools" className="text-gray-400 hover:text-white transition-colors">
                  AI工具
                </Link>
              </li>
              <li>
                <Link href="/cross-border-services" className="text-gray-400 hover:text-white transition-colors">
                  跨境服务
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  公司介绍
                </Link>
              </li>
              <li>
                <Link href="/major-events" className="text-gray-400 hover:text-white transition-colors">
                  重要活动
                </Link>
              </li>
              <li>
                <Link href="/success-cases" className="text-gray-400 hover:text-white transition-colors">
                  成功案例
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  隐私政策
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4">联系方式</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-gray-400">邮箱：</span>
                <span className="ml-2">glodaselection@datastory.com.cn</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400">地址：</span>
                <span className="ml-2">广东省珠海市横琴新区环岛东路3000号 ICC国际商务中心2座10楼</span>
              </li>
              <li className="mt-4 flex flex-col md:flex-row gap-4">
                <div>
                  <div className="bg-white p-2 rounded-md w-32 h-32 mx-auto md:mx-0">
                    <Image
                      src="/placeholder.svg?height=120&width=120&text=公众号二维码"
                      alt="公众号二维码"
                      width={120}
                      height={120}
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-center md:text-left text-sm mt-2">扫码关注公众号</p>
                </div>
                <div>
                  <div className="bg-white p-2 rounded-md w-32 h-32 mx-auto md:mx-0 flex items-center justify-center">
                    <img
                      src="/IMG_0438.JPG"
                      alt="企业微信二维码"
                      className="w-full h-full object-contain rounded"
                      onError={(e) => {
                        console.log("Image failed to load:", e)
                        e.target.src = "/placeholder.svg?height=120&width=120&text=企业微信二维码"
                      }}
                    />
                  </div>
                  <p className="text-center md:text-left text-sm mt-2">扫码咨询</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} 琴弦 Gloda Selection 版权所有</p>
        </div>
      </div>
    </footer>
  )
}
