import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Factory } from "lucide-react"

export default function BrandRegister() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-12 bg-gray-50">
        <div className="container max-w-3xl">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-rose-500" />
              </div>
              <CardTitle className="text-2xl">品牌/生产商入驻</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">公司名称</Label>
                    <Input id="companyName" placeholder="请输入公司名称" />
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
                    <Label htmlFor="industry">所属行业</Label>
                    <Select>
                      <SelectTrigger id="industry">
                        <SelectValue placeholder="请选择所属行业" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fashion">时尚服饰</SelectItem>
                        <SelectItem value="beauty">美妆个护</SelectItem>
                        <SelectItem value="home">家居生活</SelectItem>
                        <SelectItem value="electronics">电子产品</SelectItem>
                        <SelectItem value="sports">运动户外</SelectItem>
                        <SelectItem value="other">其他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="scale">公司规模</Label>
                    <Select>
                      <SelectTrigger id="scale">
                        <SelectValue placeholder="请选择公司规模" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">50人以下</SelectItem>
                        <SelectItem value="medium">50-200人</SelectItem>
                        <SelectItem value="large">200-500人</SelectItem>
                        <SelectItem value="enterprise">500人以上</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="products">主营产品</Label>
                  <Textarea id="products" placeholder="请简要描述您的主营产品" />
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
