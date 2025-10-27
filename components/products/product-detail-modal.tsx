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
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="pr-6">{product.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          {/* Product Image */}
          <div className="relative h-64 w-full bg-white rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 600px) 100vw, 600px"
            />
          </div>

          {/* Category and Rating */}
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="gap-1">
              <Package className="w-3 h-3" />
              {product.category}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{product.rating.rate}</span>
              <span className="text-sm text-slate-500">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between pt-4 border-t">
            <span className="text-sm text-slate-600">Price</span>
            <span className="text-3xl font-bold text-slate-800">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}