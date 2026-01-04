import Link from "next/link"
import { LayoutDashboard, PieChart, ArrowLeftRight, Settings, LogOut, Search, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-black overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white dark:bg-zinc-950/50 hidden md:flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
              <span className="text-white dark:text-black font-bold text-lg">A</span>
            </div>
            Antgravity
          </h1>
        </div>

        <div className="flex-1 px-4 py-2 space-y-1">
          <nav className="space-y-1">
            <Link href="/" passHref>
              <Button variant="ghost" className="w-full justify-start gap-2 bg-zinc-100 dark:bg-zinc-900">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/portfolio" passHref>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <PieChart className="w-4 h-4" />
                Portfolio
              </Button>
            </Link>
            <Link href="/trade" passHref>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <ArrowLeftRight className="w-4 h-4" />
                Trade
              </Button>
            </Link>
          </nav>

          <Separator className="my-4" />

          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </Button>
          </nav>
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">João Pereira</p>
              <p className="text-xs text-muted-foreground truncate">Client Tier 1</p>
            </div>
            <Button variant="ghost" size="icon">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b bg-white dark:bg-zinc-950/50 flex items-center justify-between px-6">
          <div className="flex items-center gap-4 w-1/3">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search assets (e.g. BTC, AAPL)..." className="pl-9" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="w-4 h-4" />
            </Button>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
