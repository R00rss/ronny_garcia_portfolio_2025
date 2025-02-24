export type CardItem = {
    id: number;
    title: string;
    date: string;
    description: string;
    technologies: string[];
    url: string;
};


export type ExperienceItem = CardItem & {};
export type ProjectItem = CardItem & {};