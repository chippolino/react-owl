import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { ButtonAppearance } from "../Button/Button.props";
import { useState } from "react";
import GlassIcon from "./glass.svg";
import { useRouter } from "next/router";

export function Search({ className, ...rest }: SearchProps): JSX.Element {
  const [search, setSearch] = useState<string>("");

  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)}>
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeydown}
      />
      <Button
        appearance={ButtonAppearance.primary}
        className={styles.button}
        onClick={goToSearch}
        aria-label="Искать по сайту"
      >
        <GlassIcon />
      </Button>
    </div>
  );
}
