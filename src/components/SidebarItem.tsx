import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconType } from "react-icons";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <div className="py-2">
      <Link
        href={href}
        className={cn(
          "flex gap-x-2 items-center cursor-pointer text-zinc-400 hover:text-zinc-100",
          active && "text-rose-500 hover:text-rose-700"
        )}
      >
        <Icon size={24} />
        <div className="font-bold">{label}</div>
      </Link>
    </div>
  );
};

export default SidebarItem;