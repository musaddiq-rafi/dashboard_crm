"use client";

import { useState, useEffect } from "react";
import { Lead } from "@/types/leads";
import { LeadCard } from "./lead-card";
import { AddLeadDialog } from "./add-lead-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, UserPlus, Loader2 } from "lucide-react";

export function LeadsSection() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  // Fetch leads from API
  useEffect(() => {
    async function fetchLeads() {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch leads");
        const data = await response.json();
        setLeads(data);
        setFilteredLeads(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }
    fetchLeads();
  }, []);

  // Search/Filter functionality
  useEffect(() => {
    const filtered = leads.filter(
      (lead) =>
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLeads(filtered);
  }, [searchTerm, leads]);

  // Add new lead
  const handleAddLead = (newLead: Omit<Lead, "id">) => {
    const leadWithId = {
      ...newLead,
      id: Math.max(...leads.map((l) => l.id), 0) + 1,
    };
    setLeads([leadWithId, ...leads]);
  };

  // Edit lead
  const handleEditLead = (updatedLead: Lead) => {
    setLeads(leads.map((lead) => (lead.id === updatedLead.id ? updatedLead : lead)));
  };

  // Delete lead
  const handleDeleteLead = (id: number) => {
    setLeads(leads.filter((lead) => lead.id !== id));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-slate-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search and Add Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <Input
            placeholder="Search by name or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)} className="gap-2">
          <UserPlus className="w-4 h-4" />
          Add Lead
        </Button>
      </div>

      {/* Results Count */}
      <div className="text-sm text-slate-600">
        Showing {filteredLeads.length} of {leads.length} leads
      </div>

      {/* Leads Grid */}
      {filteredLeads.length === 0 ? (
        <div className="text-center py-12 text-slate-500">
          No leads found. Try adjusting your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLeads.map((lead) => (
            <LeadCard
              key={lead.id}
              lead={lead}
              onEdit={handleEditLead}
              onDelete={handleDeleteLead}
            />
          ))}
        </div>
      )}

      {/* Add Lead Dialog */}
      <AddLeadDialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        onAddLead={handleAddLead}
      />
    </div>
  );
}