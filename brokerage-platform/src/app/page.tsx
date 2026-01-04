'use client';

import AppLayout from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpRight, ArrowDownRight, DollarSign, Wallet, TrendingUp, Activity } from "lucide-react"

// Mock Data
const PORTFOLIO_ASSETS = [
  { type: "CRYPTO", symbol: "BTC", name: "Bitcoin", quantity: 0.45, avgPrice: 62000, currentPrice: 65430, change24h: 5.2 },
  { type: "STOCK", symbol: "NVDA", name: "NVIDIA Corp", quantity: 120, avgPrice: 450, currentPrice: 880, change24h: 2.1 },
  { type: "STOCK", symbol: "AAPL", name: "Apple Inc", quantity: 50, avgPrice: 150, currentPrice: 175, change24h: -0.5 },
  { type: "CRYPTO", symbol: "ETH", name: "Ethereum", quantity: 4.2, avgPrice: 2800, currentPrice: 3500, change24h: 1.8 },
]

export default function DashboardPage() {
  const totalBalance = 245890.50
  const dayChangeToken = 4250.20
  const dayChangePercent = 1.76

  return (
    <AppLayout>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Last updated: Just now</span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-zinc-900 border-zinc-800 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-zinc-400">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-zinc-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            <p className="text-xs text-zinc-400 flex items-center mt-1">
              <span className="text-green-500 flex items-center mr-1">
                <ArrowUpRight className="h-3 w-3" /> +{dayChangePercent}%
              </span>
              today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Buying Power</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450.00</div>
            <p className="text-xs text-muted-foreground mt-1">
              Available to trade
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+$68,203.40</div>
            <p className="text-xs text-muted-foreground mt-1">
              All time return
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Positions</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{PORTFOLIO_ASSETS.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Across 2 markets
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Areas */}
      <div className="grid gap-4 md:grid-cols-7">

        {/* Assets Table */}
        <Card className="col-span-4 lg:col-span-5">
          <CardHeader>
            <CardTitle>Your Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Asset</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Change (24h)</TableHead>
                  <TableHead>Holdings</TableHead>
                  <TableHead className="text-right">Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {PORTFOLIO_ASSETS.map((asset) => (
                  <TableRow key={asset.symbol}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold">
                          {asset.symbol[0]}
                        </div>
                        <div>
                          <div className="font-bold">{asset.symbol}</div>
                          <div className="text-xs text-muted-foreground">{asset.name}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>${asset.currentPrice.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={asset.change24h >= 0 ? "default" : "destructive"} className={asset.change24h >= 0 ? "bg-green-600 hover:bg-green-700" : ""}>
                        {asset.change24h > 0 ? "+" : ""}{asset.change24h}%
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>{asset.quantity} {asset.symbol}</div>
                    </TableCell>
                    <TableCell className="text-right font-bold">
                      ${(asset.currentPrice * asset.quantity).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Activity / Side Panel */}
        <Card className="col-span-3 lg:col-span-2">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full bg-gradient-to-t from-green-50 to-transparent rounded-lg border border-dashed flex items-center justify-center text-muted-foreground text-sm">
              [Chart Area Placeholder]
            </div>
            <div className="mt-4 space-y-4">
              <h4 className="text-sm font-semibold">Recent Transactions</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-green-100 rounded-full text-green-600">
                      <ArrowDownRight className="w-4 h-4" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">Deposit</div>
                      <div className="text-xs text-muted-foreground">Today, 10:23 AM</div>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-green-600">+$25,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-red-100 rounded-full text-red-600">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">Bought NVDA</div>
                      <div className="text-xs text-muted-foreground">Yesterday, 4:15 PM</div>
                    </div>
                  </div>
                  <span className="text-sm font-medium">-$5,400</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
