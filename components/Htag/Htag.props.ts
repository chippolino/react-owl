import { ReactNode } from "react";

export enum Tags {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
}

export type HtagProps = {
  tag: Tags;
  children: ReactNode;
};
