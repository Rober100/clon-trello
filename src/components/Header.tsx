import { Trello } from "lucide-react";

export const Header = () => {
  return (
    <div className="w-full h-16 bg-foreground text-background flex items-center p-4 gap-1 shadow-xl">
      <Trello size={24} />
      <h1 className="font-medium text-2x1 leading-8 h-full">Trello</h1>
    </div>
  );
};
