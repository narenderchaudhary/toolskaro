import { Lock, Zap, Globe, Gift } from "lucide-react";

const ITEMS = [
  { Icon: Lock, label: "Files never uploaded" },
  { Icon: Zap, label: "No sign-up" },
  { Icon: Globe, label: "Works in your browser" },
  { Icon: Gift, label: "Free & unlimited" },
];

export default function ToolBadges() {
  return (
    <div className="tool-badges">
      {ITEMS.map(({ Icon, label }) => (
        <span className="tool-badge" key={label}><Icon size={15} aria-hidden="true" />{label}</span>
      ))}
    </div>
  );
}
