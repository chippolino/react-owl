import { TopPageComponentProps } from "./TopPageComponent.props";
import { Advantages, HhData, Htag, Paragraph, Tag } from "../../components";
import { Tags } from "../../components/Htag/Htag.props";
import { TagSize } from "../../components/Tag/Tag.props";
import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { PSize } from "../../components/Paragraph/Paragpraph.props";

export function TopPageComponent({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag={Tags.H1}>{page.title}</Htag>
        {products && (
          <Tag size={TagSize.Mid} color={"gray"}>
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
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
