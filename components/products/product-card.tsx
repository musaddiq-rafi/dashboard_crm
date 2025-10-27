"use client";

import { Product } from "@/types/products";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Star } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <CardHeader className="p-0 relative overflow-hidden bg-white">
        <div className="relative h-48 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <Badge className="absolute top-2 right-2 bg-white/90 text-slate-700 hover:bg-white">
          {product.category}
        </Badge>
      </CardHeader>
      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="font-semibold text-sm line-clamp-2 mb-2 min-h-[2.5rem]">
            {product.title}
          </h3>
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating.rate}</span>
            <span className="text-xs text-slate-500">
              ({product.rating.count})
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-3 border-t">
          <span className="text-2xl font-bold text-slate-800">
            ${product.price.toFixed(2)}
          </span>
          <Button
            size="sm"
            variant="outline"
            className="gap-2"
            onClick={() => onViewDetails(product)}
          >
            <Eye className="w-4 h-4" />
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}