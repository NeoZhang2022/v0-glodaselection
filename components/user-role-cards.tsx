import { Factory, ShoppingBag, Users } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "./ui/card"

export function UserRoleCards() {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">选择您的身份，开启跨境之旅</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Link href="/brand" className="block group">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group-hover:border-rose-300">
              <CardContent className="p-4 flex items-center">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mr-4 group-hover:bg-rose-200 transition-colors">
                  <Factory className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-lg font-bold">我是品牌/生产商</h3>
              </CardContent>
            </Card>
          </Link>

          <Link href="/merchant" className="block group">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group-hover:border-rose-300">
              <CardContent className="p-4 flex items-center">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mr-4 group-hover:bg-rose-200 transition-colors">
                  <ShoppingBag className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-lg font-bold">我是跨境商家</h3>
              </CardContent>
            </Card>
          </Link>

          <Link href="/mcn" className="block group">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group-hover:border-rose-300">
              <CardContent className="p-4 flex items-center">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mr-4 group-hover:bg-rose-200 transition-colors">
                  <Users className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-lg font-bold">我是MCN机构</h3>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
