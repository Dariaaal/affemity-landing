export type Skill = {
  id: string;
  name: string;
  icon: string;
};

export type Skills = {
  [key: string]: Skill[];
};
