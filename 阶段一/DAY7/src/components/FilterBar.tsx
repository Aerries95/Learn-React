import type { FilterStatus } from "../type";

interface FilterBarProps {
  current: FilterStatus;
  activeCount: number;
  onFilterChange: (status: FilterStatus) => void;
}

const FILTERS: { label: string; value: FilterStatus }[] = [
  { label: "全部", value: "all" },
  { label: "进行中", value: "active" },
  { label: "已完成", value: "completed" },
];
export const FilterBar: React.FC<FilterBarProps> = ({
  current,
  activeCount,
  onFilterChange,
}) => {
  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
    {FILTERS.map(({ label, value }) => (
      <button
        key={value}
        onClick={() => onFilterChange(value)}
        style={{
          fontWeight: current === value ? "bold" : "normal",
          textDecoration: current === value ? "underline" : "none",
        }}
      >
        {label}
      </button>
    ))}
    <span style={{ marginLeft: "auto", color: "#666" }}>
      剩余 {activeCount} 项
    </span>
  </div>;
};
