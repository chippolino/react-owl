import { HeaderProps } from "./Header.props";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <div {...props}>
      <h1>Header</h1>
    </div>
  );
};
