import type { GetStaticProps } from "next";
import { Button, Htag, Rating, Tag } from "../components";
import { Tags } from "../components/Htag/Htag.props";
import {
  ArrowButton,
  ButtonAppearance,
} from "../components/Button/Button.props";
import { Paragraph } from "../components/";
import { PSize } from "../components/Paragraph/Paragpraph.props";
import { TagSize } from "../components/Tag/Tag.props";
import { useState } from "react";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag={Tags.H1}>Текст</Htag>
      <Button
        className={"test"}
        appearance={ButtonAppearance.primary}
        arrow={ArrowButton.down}
      >
        Hello world
      </Button>
      <Button appearance={ButtonAppearance.ghost}>Hello world</Button>
      <Paragraph size={PSize.Large}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid harum
        ipsam iste laboriosam magni porro unde. Cupiditate dignissimos inventore
        itaque nulla porro repellendus sequi similique vero! Animi eaque minus
        non.
      </Paragraph>
      <Tag size={TagSize.Mid}>tag</Tag>
      <Tag size={TagSize.Mid} color={"green"}>
        tag
      </Tag>
      <Tag size={TagSize.Small} color={"red"}>
        tag
      </Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
