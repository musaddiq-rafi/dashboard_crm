"use client";
import { Product } from "@/types/products";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Star, Package } from "lucide-react";
import Image from "next/image";

interface ProductDetailModalProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductDetailModal({
  product,
  open,
  onOpenChange,
}: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95">
        <DialogHeader>
          <DialogTitle className="pr-6 text-slate-900 dark:text-slate-50 animate-in fade-in slide-in-from-top-2">
            {product.title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="relative h-64 w-full bg-white dark:bg-slate-900 rounded-lg overflow-hidden animate-in fade-in zoom-in-95">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 600px) 100vw, 600px"
            />
          </div>
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="gap-1 animate-in fade-in slide-in-from-left-2">
              <Package className="w-3 h-3" />
              {product.category}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 animate-in fade-in zoom-in-95" />
              <span className="font-medium text-slate-900 dark:text-slate-50">
                {product.rating.rate}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-slate-900 dark:text-slate-50 animate-in fade-in slide-in-from-left-2">
              Description
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed animate-in fade-in">
              {product.description}
            </p>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
            <span className="text-sm text-slate-600 dark:text-slate-400 animate-in fade-in">
              Price
            </span>
            <span className="text-3xl font-bold text-slate-800 dark:text-slate-50 animate-in fade-in zoom-in-95">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}