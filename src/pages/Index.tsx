
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ResourceCard } from "@/components/ResourceCard";
import { AddResourceDialog } from "@/components/AddResourceDialog";
import { Search } from "lucide-react";

const Index = () => {
  const [resources, setResources] = useState([
    {
      title: "Fly on UI Components",
      description: "A beautiful collection of UI components for modern web applications",
      url: "https://flyonui.com/components/",
      category: "frontend" as const,
      tags: ["components", "ui", "react"],
    },
  ]);
  const [search, setSearch] = useState("");

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(search.toLowerCase()) ||
    resource.description.toLowerCase().includes(search.toLowerCase()) ||
    resource.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  const handleAddResource = (newResource: any) => {
    setResources([...resources, newResource]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Developer Resources Hub
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Discover and share the best resources for frontend, backend, and blockchain development.
          </p>
          <div className="mb-12 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10"
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <AddResourceDialog onAddResource={handleAddResource} />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
