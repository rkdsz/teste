import AppLayout from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TradePage() {
    return (
        <AppLayout>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Trade Execution</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Market Buy/Sell</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Asset Symbol</label>
                            <Input placeholder="BTC, AAPL, etc." />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Amount (USD)</label>
                            <Input type="number" placeholder="0.00" />
                        </div>
                        <Button className="w-full">Place Order</Button>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    )
}
