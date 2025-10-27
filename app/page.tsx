import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Package } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Manage your leads and product catalog
        </p>
      </header>

      {/* Tabs Navigation */}
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
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
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">Leads Management</h2>
            <p className="text-slate-600">Leads content will go here...</p>
          </div>
        </TabsContent>

        {/* Products Section */}
        <TabsContent value="products">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold mb-4">Product Catalog</h2>
            <p className="text-slate-600">Products content will go here...</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}