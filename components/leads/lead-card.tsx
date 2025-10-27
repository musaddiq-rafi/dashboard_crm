"use client";

import { useState } from "react";
import { Lead } from "@/types/leads";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Mail, MapPin, Pencil, Trash2 } from "lucide-react";
import { EditLeadDialog } from "./edit-lead-dialog";

interface LeadCardProps {
  lead: Lead;
  onEdit: (lead: Lead) => void;
  onDelete: (id: number) => void;
}

export function LeadCard({ lead, onEdit, onDelete }: LeadCardProps) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  return (
    <>
      <Card className="hover:shadow-lg transition-shadow duration-200 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg text-slate-900 dark:text-slate-50">
              {lead.name}
            </CardTitle>
            <Badge variant="secondary" className="text-xs">
              ID: {lead.id}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Mail className="w-4 h-4" />
            <span className="truncate">{lead.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Building2 className="w-4 h-4" />
            <span className="truncate">{lead.company.name}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <MapPin className="w-4 h-4" />
            <span>{lead.address.city}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 gap-2"
              onClick={() => setIsEditDialogOpen(true)}
            >
              <Pencil className="w-3 h-3" />
              Edit
            </Button>
            <Button
              variant="destructive"
              size="sm"
              className="flex-1 gap-2"
              onClick={() => {
                if (confirm(`Delete ${lead.name}?`)) {
                  onDelete(lead.id);
                }
              }}
            >
              <Trash2 className="w-3 h-3" />
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>

      <EditLeadDialog
        lead={lead}
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        onEditLead={onEdit}
      />
    </>
  );
}