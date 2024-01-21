// import { Card } from "../../ui/dashboard/cards"
import RevenueChart from "../../ui/dashboard/revenue-chart"
import LatestInvoices from "../../ui/dashboard/latest-invoices"
import { lusitana } from "../../ui/fonts"
// Prima metodo Suspence
// import { fetchRevenue, fetchLatestInvoices, fetchCardData } from "../../lib/data"
// import { fetchCardData } from "../../lib/data"
import { Suspense } from "react"
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from "@/app/ui/skeletons"
import CardWrapper from "@/app/ui/dashboard/cards"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dashboard'
}
export default async function Page() {
    // Prima metodo Suspence
    // const revenue = await fetchRevenue();
    // const latestInvoices = await fetchLatestInvoices();
    // const cardData = await fetchCardData();
    // oppure
    // const { numberOfInvoices,
    //     numberOfCustomers,
    //     totalPaidInvoices,
    //     totalPendingInvoices, } = await fetchCardData();

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2x1`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* <Card title="Collected" value={cardData.totalPaidInvoices} type="collected"></Card>
                <Card title="Pending" value={cardData.totalPendingInvoices} type="pending"></Card>
                <Card title="Total Invoices" value={cardData.numberOfInvoices} type="invoices"></Card>
                <Card title="Total Customres" value={cardData.numberOfCustomers} type="customers"></Card> */}
                {/* oppure */}
                {/* <Card title="Collected" value={totalPaidInvoices} type="collected"></Card>
                <Card title="Pending" value={totalPendingInvoices} type="pending"></Card>
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices"></Card>
                <Card title="Total Customres" value={numberOfCustomers} type="customers"></Card> */}
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/* Prima metodo Suspence */}
                {/* <RevenueChart revenue={revenue} /> */}
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    );
}