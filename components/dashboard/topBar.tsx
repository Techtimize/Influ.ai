import { Bell, Search } from "lucide-react";
import AssetImage from "@/components/shared/assetImage";
import type { UserSummary } from "@/types/dashboard";
import { FOCUS_RING } from "@/utils/ui-classes";

type Props = {
  user: UserSummary;
  onSearch?: (query: string) => void;
  placeholder?: string;
};

export default function TopBar({ user, onSearch, placeholder = "Search portal..." }: Props) {
  return (
    <header className="mb-4 flex items-center gap-4">
      <form
        role="search"
        className="relative flex-1 md:max-w-xl"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch?.(String(new FormData(e.currentTarget).get("q") ?? ""));
        }}
      >
        <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-500" />
        <input
          name="q"
          type="search"
          placeholder={placeholder}
          aria-label="Search portal"
          className="h-11 w-full rounded-full border border-[#E6E8F5] bg-white pl-11 pr-4 text-sm outline-none placeholder:text-neutral-500 focus:ring-2 focus:ring-[#5B57E6]/30"
        />
      </form>

      <div className="ml-auto flex items-center gap-3">
        <button
          type="button"
          aria-label="Notifications"
          className={`grid size-10 place-items-center rounded-full border border-[#E6E8F5] bg-white text-neutral-700 hover:bg-neutral-50 ${FOCUS_RING}`}
        >
          <Bell className="size-4" />
        </button>
        {user.avatarSrc ? (
          <AssetImage src={user.avatarSrc} alt={user.name} width={40} height={40} className="size-10 rounded-full object-cover" />
        ) : (
          <div aria-label={user.name} className="grid size-10 place-items-center rounded-full bg-[#5B57E6] text-sm font-semibold text-white">
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
    </header>
  );
}