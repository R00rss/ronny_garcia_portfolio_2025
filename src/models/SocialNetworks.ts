import type { defaultLang, ui } from "@/i18n/ui";

export type SectionItem = {
    label: keyof (typeof ui)[typeof defaultLang];
    href: string;
    id: string;
};