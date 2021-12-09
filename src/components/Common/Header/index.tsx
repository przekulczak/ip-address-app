import { FC } from 'react';
import { HeaderWrapper, HeaderHeader } from './styledHeader';

interface Props {
  text: string;
}

const Header: FC<Props> = ({ text }: Props) => (
  <HeaderWrapper>
    <HeaderHeader>{text}</HeaderHeader>
  </HeaderWrapper>
);

export default Header;
