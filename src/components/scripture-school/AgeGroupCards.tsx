import { Baby, BookMarked, Lightbulb, GraduationCap, Crown } from "lucide-react";
import { ageGroups } from "@/data/curriculumData";

// Icon mapping for each group
const groupIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "sub-junior": Baby,
  junior: BookMarked,
  intermediate: Lightbulb,
  senior: GraduationCap,
  "super-senior": Crown,
};

interface AgeGroupCardsProps {
  activeAgeGroup: string | null;
  onAgeGroupClick: (groupId: string) => void;
}

export function AgeGroupCards({ activeAgeGroup, onAgeGroupClick }: AgeGroupCardsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {ageGroups.map((group) => {
        const isActive = activeAgeGroup === group.id;
        const IconComponent = groupIcons[group.id] || BookMarked;

        return (
          <button
            key={group.id}
            onClick={() => onAgeGroupClick(group.id)}
            className={`
              bg-white rounded-2xl p-5 shadow-sm text-center group
              min-h-[168px] flex flex-col items-center justify-center
              cursor-pointer transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
              focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary
              ${isActive ? `ring-2 ${group.borderActive} shadow-lg -translate-y-1` : "hover:ring-1 hover:ring-gray-200"}
            `}
            aria-pressed={isActive}
          >
            <div
              className={`
                w-12 h-12 ${group.bg} rounded-xl flex items-center justify-center mx-auto mb-3
                transition-all duration-300
                ${isActive ? "scale-110" : "group-hover:scale-110"}
              `}
            >
              <IconComponent className={`w-6 h-6 ${group.color}`} />
            </div>

            <h3
              className="
                font-extrabold text-foreground text-center leading-[1.05]
                text-[22px] sm:text-[24px] lg:text-[22px]
                px-2
                whitespace-nowrap
                overflow-hidden text-ellipsis
                min-h-[2.2rem] flex items-center justify-center
              "
              title={group.group}
            >
              {group.group.replace(/-/g, "-")}
            </h3>

            <p className={`text-sm font-semibold ${group.color} mt-1`}>{group.ageRange}</p>
          </button>
        );
      })}
    </div>
  );
}
