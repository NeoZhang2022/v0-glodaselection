import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users } from "lucide-react"

export default function McnRegister() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12 bg-gray-50">
        <div className="container max-w-3xl">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-rose-500" />
              </div>
              <CardTitle className="text-2xl">MCN机构入驻</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">机构名称</Label>
                    <Input id="companyName" placeholder="请输入机构名称" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">联系人</Label>
                    <Input id="contactPerson" placeholder="请输入联系人姓名" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">联系电话</Label>
                    <Input id="phone" placeholder="请输入联系电话" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">电子邮箱</Label>
                    <Input id="email" type="email" placeholder="请输入电子邮箱" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="platform">主要平台</Label>
                    <Select>
                      <SelectTrigger id="platform">
                        <SelectValue placeholder="请选择主要平台" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="other">其他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="influencerCount">达人数量</Label>
                    <Select>
                      <SelectTrigger id="influencerCount">
                        <SelectValue placeholder="请选择达人数量" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">10人以下</SelectItem>
                        <SelectItem value="medium">10-50人</SelectItem>
                        <SelectItem value="large">50-100人</SelectItem>
                        <SelectItem value="enterprise">100人以上</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="categories">主要内容类别</Label>
                  <Textarea id="categories" placeholder="请描述您的达人主要内容类别，如美妆、时尚、生活等" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="needs">合作需求</Label>
                  <Textarea id="needs" placeholder="请描述您的合作需求和期望" />
                </div>

                <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600">
                  提交申请
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
