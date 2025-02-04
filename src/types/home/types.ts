export type CompanyTab = {
  id: string;
  name: string;
  logo: string;
  alt: string;
  width?: string;
};

export type CompanyTabsProps = {
  activeTab: string;
  onTabChange: (id: string) => void;
};

export type TabContentProps = {
  activeTab: string;
};

export type TypewriterTextProps = {
  text: string;
  speed?: number;
  delay?: number;
};