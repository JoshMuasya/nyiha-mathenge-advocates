export interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCta?: string;
  secondaryCta?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  showPatternOverlay?: boolean;
}

export type Stat = {
  icon: React.ElementType;
  value: number;
  label: string;
};

export type StatsProps = {
  stats: Stat[];
};