export type FooterItem = {
  name: string;
  link: string;
};

export type FooterList = {
  heading: string;
  items: FooterItem[];
};

export type FooterDataTypes = {
  footerDescription?: string;
  footerLists?: FooterList[];
};
