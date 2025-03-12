import { toast } from "@/hooks/use-toast";

export interface Resource {
  _id?: string;
  title: string;
  description: string;
  url: string;
  category: "frontend" | "backend" | "blockchain";
  tags: string[];
  createdAt?: string;
}

const API_URL = "http://localhost:8000/api";

export async function fetchResources(): Promise<Resource[]> {
  try {
    const response = await fetch(`${API_URL}/resources`);
    if (!response.ok) {
      throw new Error("Failed to fetch resources");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching resources:", error);
    toast({
      title: "Error fetching resources",
      description: "Please try again later",
      variant: "destructive",
    });
    return [];
  }
}

export async function createResource(
  resource: Omit<Resource, "_id">
): Promise<Resource | null> {
  try {
    const response = await fetch(`${API_URL}/resources`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resource),
    });

    if (!response.ok) {
      throw new Error("Failed to create resource");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating resource:", error);
    toast({
      title: "Error creating resource",
      description: "Please try again later",
      variant: "destructive",
    });
    return null;
  }
}

export async function likeResource(id: string): Promise<Resource | null> {
  try {
    const response = await fetch(`${API_URL}/resources/${id}/like`, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Failed to like resource");
    }
    return await response.json();
  } catch (error) {
    console.error("Error liking resource:", error);
    toast({
      title: "Error liking resource",
      description: "Please try again later",
      variant: "destructive",
    });
    return null;
  }
}

export async function unlikeResource(id: string): Promise<Resource | null> {
  try {
    const response = await fetch(`${API_URL}/resources/${id}/unlike`, {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error("Failed to unlike resource");
    }
    return await response.json();
  } catch (error) {
    console.error("Error unliking resource:", error);
    toast({
      title: "Error unliking resource",
      description: "Please try again later",
      variant: "destructive",
    });
    return null;
  }
}

export async function deleteResource(id: string): Promise<Resource | null> {
  try {
    const response = await fetch(`${API_URL}/resources/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete resource");
    }
    return await response.json();
  } catch (error) {
    console.error("Error deleting resource:", error);
    toast({
      title: "Error deleting resource",
      description: "Please try again later",
      variant: "destructive",
    });
    return null;
  }
}

export async function updateResource(
  id: string,
  resource: Resource
): Promise<Resource | null> {
  try {
    const response = await fetch(`${API_URL}/resources/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resource),
    });
    if (!response.ok) {
      throw new Error("Failed to update resource");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating resource:", error);
    toast({
      title: "Error updating resource",
      description: "Please try again later",
      variant: "destructive",
    });
    return null;
  }
}

export async function getLikes(id: string): Promise<number> {
  try {
    const response = await fetch(`${API_URL}/resources/${id}/likes`);
    return await response.json();
  } catch (error) {
    console.error("Error getting likes:", error);
    toast({
      title: "Error getting likes",
      description: "Please try again later",
      variant: "destructive",
    });
  }
}
