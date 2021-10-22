import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.ul`
  margin: 0;
  margin-top: 1.5rem;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 2px solid #e3e3e3;
`;
const Navigation = styled.ul`
  margin: 0;

  padding: 0;
  display: flex;
  justify-content: flex-end;
`;

const HeaderItem = styled.li`
  list-style: none;
  margin: 0.8rem;

  a {
    text-decoration: none;
    font-size: 1.25rem;
  }
`;
export default function Header() {
  return (
    <Wrapper>
      <Navigation>
        <HeaderItem>
          <Link href='/'>
            <a>Link 1</a>
          </Link>
        </HeaderItem>
        <HeaderItem>
          <Link href='/'>
            <a>Link 2</a>
          </Link>
        </HeaderItem>
      </Navigation>
    </Wrapper>
  );
}
