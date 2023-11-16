import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

type ContactFromEmailProps = {
  senderEmail: string;
  message: string;
};

export type {
  SectionName,
  ActiveSectionContextProviderProps,
  ActiveSectionContextType,
  ContactFromEmailProps,
};
