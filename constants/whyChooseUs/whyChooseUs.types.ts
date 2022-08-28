export type WhyChooseUsCardTypes = {
  title: string;
  description: string;
  Icon: React.ComponentType<any>;
};

export type WhyChooseUsDataTypes = {
  heading: string;
  cards: WhyChooseUsCardTypes[];
};
