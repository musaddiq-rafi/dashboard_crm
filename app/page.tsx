import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Package } from "lucide-react";
import { LeadsSection } from "@/components/leads/leads-section";
import { ProductsSection } from "@/components/products/products-section";
import { ThemeToggle } from "@/components/theme-toggle";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate-in fade-in slide-in-from-bottom-2">
      {/* Header with Theme Toggle */}
      <header className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-2 animate-in fade-in slide-in-from-left-2">
            Dashboard
          </h1>
          <p className="text-slate-600 dark:text-slate-400 animate-in fade-in slide-in-from-left-2">
            Manage your leads and product catalog
          </p>
        </div>
        <ThemeToggle />
      </header>

      {/* Professional Tabs Navigation */}
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className="flex w-full max-w-lg mx-auto mb-8 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm">
          <TabsTrigger
            value="leads"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 font-medium text-slate-700 dark:text-slate-200 transition-colors data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:text-slate-900 dark:data-[state=active]:text-slate-50 data-[state=active]:shadow-lg rounded-xl"
          >
            <Users className="w-4 h-4" />
            Leads
          </TabsTrigger>
          <TabsTrigger
            value="products"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 font-medium text-slate-700 dark:text-slate-200 transition-colors data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:text-slate-900 dark:data-[state=active]:text-slate-50 data-[state=active]:shadow-lg rounded-xl"
          >
            <Package className="w-4 h-4" />
            Products
          </TabsTrigger>
        </TabsList>

        {/* Leads Section */}
        <TabsContent value="leads">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 animate-in fade-in slide-in-from-left-2">
            <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-50 animate-in fade-in slide-in-from-left-2">
              Leads Management
            </h2>
            <LeadsSection />
          </div>
        </TabsContent>

        {/* Products Section */}
        <TabsContent value="products">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 animate-in fade-in slide-in-from-right-2">
            <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-50 animate-in fade-in slide-in-from-right-2">
              Product Catalog
            </h2>
            <ProductsSection />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}