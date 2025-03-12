import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { ResourceCard } from "@/components/ResourceCard";
import { AddResourceDialog } from "@/components/AddResourceDialog";
import { Search, Loader2 } from "lucide-react";
import { fetchResources, Resource } from "@/services/api";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getResources = async () => {
      setLoading(true);
      try {
        const data = await fetchResources();
        setResources(data);
      } catch (error) {
        console.error("Failed to fetch resources:", error);
      } finally {
        setLoading(false);
      }
    };

    getResources();
  }, []);

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.description.toLowerCase().includes(search.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      )
  );

  const handleAddResource = (newResource: Resource) => {
    setResources([newResource, ...resources]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Developer Resources Hub
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Discover and share the best resources for frontend, backend, and
            blockchain development.
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

        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card p-6 shadow-sm"
              >
                <div className="space-y-4">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-20 w-full" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16 rounded-full" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredResources.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource._id} {...resource} />
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-500">
              No resources found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
