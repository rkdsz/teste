import AppLayout from "@/components/layout/AppLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PortfolioPage() {
    return (
        <AppLayout>
            <h2 className="text-3xl font-bold tracking-tight mb-6">My Portfolio</h2>
            <Card>
                <CardHeader>
                    <CardTitle>Portfolio Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg bg-zinc-50 dark:bg-zinc-900 text-muted-foreground">
                        Portfolio Allocation Chart Coming Soon
                    </div>
                </CardContent>
            </Card>
        </AppLayout>
    )
}
