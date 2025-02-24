import type { ExperienceItem } from "@/models/Card";

export function getExperienceItems(t: Function): ExperienceItem[] {
    return [
        {
            id: 1,
            title: `${t("experience.mern_stack_ec.role")} - ${t("experience.mern_stack_ec.name")}`,
            date: `${t("month.june")} 2024 — ${t("month.january")} 2025`,
            description: t("experience.mern_stack_ec.description"),
            technologies: ["React", "Next.js", "Typescript", "C#", ".NET"],
            url: "",
        },
        {
            id: 2,
            title: `${t("experience.llacsaa.role")} - ${t("experience.llacsaa.name")}`,
            date: `${t("month.june")} 2023 — ${t("month.june")} 2024`,
            description: t("experience.llacsaa.description"),
            technologies: [
                "Angular",
                "Spring boot",
                "Flask",
                "NodeJs",
                "Docker",
                "Oracle SQL",
            ],
            url: "https://llacsaa.com/",
        },
        {
            id: 3,
            title: `${t("experience.kimobill.role")} - ${t("experience.kimobill.name")}`,
            date: `${t("month.may")} 2022 — ${t("month.june")} 2023`,
            description: t("experience.kimobill.description"),
            technologies: [
                "React",
                "NodeJs",
                "Flask",
                "Typescript",
                "MySQL",
                "MongoDB",
            ],
            url: "https://www.kimobill.com/",
        },
    ];
}