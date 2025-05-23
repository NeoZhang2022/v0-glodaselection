"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Factory, ShoppingBag, Users, ChevronDown, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-32">
              <Image src="/logo.svg" alt="琴弦 Gloda Selection" width={120} height={40} className="h-10 w-auto" />
            </div>
          </Link>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">打开菜单</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className={`text-lg font-medium ${isActive("/") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
              >
                首页
              </Link>
              <Link
                href="/intelligent-selection"
                className={`text-lg font-medium ${isActive("/intelligent-selection") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
              >
                智能选品
              </Link>
              <Link
                href="/influencer-network"
                className={`text-lg font-medium ${isActive("/influencer-network") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
              >
                达人网络
              </Link>
              <Link
                href="/ai-tools"
                className={`text-lg font-medium ${isActive("/ai-tools") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
              >
                AI工具
              </Link>
              <Link
                href="/cross-border-services"
                className={`text-lg font-medium ${isActive("/cross-border-services") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
              >
                跨境服务
              </Link>
              <Link
                href="/major-events"
                className={`text-lg font-medium ${isActive("/major-events") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
              >
                重要活动
              </Link>
              <Link
                href="/success-cases"
                className={`text-lg font-medium ${isActive("/success-cases") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
              >
                成功案例
              </Link>
              <Link
                href="/about"
                className={`text-lg font-medium ${isActive("/about") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
              >
                关于我们
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-lg font-medium ${isActive("/") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
          >
            首页
          </Link>
          <Link
            href="/intelligent-selection"
            className={`text-lg font-medium ${isActive("/intelligent-selection") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
          >
            智能选品
          </Link>
          <Link
            href="/influencer-network"
            className={`text-lg font-medium ${isActive("/influencer-network") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
          >
            达人网络
          </Link>
          <Link
            href="/ai-tools"
            className={`text-lg font-medium ${isActive("/ai-tools") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
          >
            AI工具
          </Link>
          <Link
            href="/cross-border-services"
            className={`text-lg font-medium ${isActive("/cross-border-services") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
          >
            跨境服务
          </Link>
          <Link
            href="/major-events"
            className={`text-lg font-medium ${isActive("/major-events") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
          >
            重要活动
          </Link>
          <Link
            href="/success-cases"
            className={`text-lg font-medium ${isActive("/success-cases") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
          >
            成功案例
          </Link>
          <Link
            href="/about"
            className={`text-lg font-medium ${isActive("/about") ? "text-rose-500" : "text-gray-700 hover:text-rose-500 transition-colors"}`}
          >
            关于我们
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-rose-500 hover:bg-rose-600 text-white">
                免费入驻 <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link href="/register/brand" className="flex items-center cursor-pointer">
                  <Factory className="mr-2 h-4 w-4" />
                  <span>品牌/生产商入驻</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/register/merchant" className="flex items-center cursor-pointer">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  <span>跨境商家入驻</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/register/mcn" className="flex items-center cursor-pointer">
                  <Users className="mr-2 h-4 w-4" />
                  <span>MCN机构入驻</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
