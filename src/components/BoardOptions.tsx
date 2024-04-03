import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

const BoardOptions = ({ children }: Props) => {
  return (
    <div
      className={cn(
        "invisible board-options",
        "cursor-pointer hover:bg-muted p-1 rounded-sm"
      )}
    >
      {children}
    </div>
  );
};

export default BoardOptions;
