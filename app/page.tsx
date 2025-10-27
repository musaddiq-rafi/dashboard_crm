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

      {/* Tabs Navigation */}
      <Tabs defaultValue="leads" className="w-full animate-in fade-in slide-in-from-bottom-2">
        <TabsList className="grid w-full max-w-md grid-cols-2 mb-8 animate-in fade-in zoom-in-95">
          <TabsTrigger value="leads" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Leads
          </TabsTrigger>
          <TabsTrigger value="products" className="flex items-center gap-2">
            <Package className="w-4 h-4" />
            Products
          </TabsTrigger>
        </TabsList>

        {/* Leads Section */}
        <TabsContent value="leads">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6 animate-in fade-in slide-in-from-left-2">
            <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-50 animate-in fade-in slide-in-from-left-2">
              Leads Management
            </h2>
            <LeadsSection />
          </div>
        </TabsContent>

        {/* Products Section */}
        <TabsContent value="products">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6 animate-in fade-in slide-in-from-right-2">
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