export type BlogDataTypes = {
  title: string;
  image: string;
  date: string;
  link: string;
};

export type KnowledgeHubDataTypes = {
  title: string;
  description: string;
  blogData: BlogDataTypes[];
};
