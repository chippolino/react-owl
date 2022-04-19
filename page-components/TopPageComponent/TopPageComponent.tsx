import { TopPageComponentProps } from "./TopPageComponent.props";
import { Advantages, HhData, Htag, Sort, Tag } from "../../components";
import { Tags } from "../../components/Htag/Htag.props";
import { TagSize } from "../../components/Tag/Tag.props";
import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { SortEnum } from "../../components/Sort/Sort.props";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";
import { Product } from "../../components";

export function TopPageComponent({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: "reset", initialState: products });
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag={Tags.H1}>{page.title}</Htag>
        {sortedProducts && (
          <Tag size={TagSize.Mid} color={"gray"}>
            {sortedProducts.length}
          </Tag>
        )}
        <Sort setSort={setSort} sort={sort} />
      </div>
      <div>
        {products &&
          products.map((p) => <Product layout key={p._id} product={p} />)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag={Tags.H2}>Вакансии - {page.category}</Htag>
        <Tag size={TagSize.Mid} color={"red"}>
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag={Tags.H2}>Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <Htag tag={Tags.H2}>Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag size={TagSize.Mid} key={t} color={"primary"}>
          {t}
        </Tag>
      ))}
    </div>
  );
}
