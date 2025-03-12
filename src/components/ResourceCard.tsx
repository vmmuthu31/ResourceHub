
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  title: string;
  description: string;
  url: string;
  category: "frontend" | "backend" | "blockchain";
  tags: string[];
}

export const ResourceCard = ({
  title,
  description,
  url,
  category,
  tags,
}: ResourceCardProps) => {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:animate-card-lift">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge
            variant="secondary"
            className={`bg-resource-${category} text-black`}
          >
            {category}
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-primary"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          Visit Resource <ExternalLink className="h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
};
