import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductSkeleton() {
  return (
    <Card className="overflow-hidden bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
      <CardHeader className="p-0">
        <Skeleton className="h-48 w-full bg-slate-200 dark:bg-slate-700" />
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <Skeleton className="h-4 w-3/4 bg-slate-200 dark:bg-slate-700" />
        <Skeleton className="h-4 w-1/2 bg-slate-200 dark:bg-slate-700" />
        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-6 w-20 bg-slate-200 dark:bg-slate-700" />
          <Skeleton className="h-8 w-24 bg-slate-200 dark:bg-slate-700" />
        </div>
      </CardContent>
    </Card>
  );
}