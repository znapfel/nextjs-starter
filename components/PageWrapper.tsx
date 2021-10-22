import styled, { createGlobalStyle } from "styled-components";
import * as React from "react";
import Header from "./Header";

import Image from "next/image";
const GlobalStyles = createGlobalStyle`
    html {
      font-size: 62.5%;
    }
    
    html,
    body {
    font-size: 100%;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    height: 100%;
    }


    a {
    color: inherit;
    
    }
    p {
      font-size: 1.125rem;
      line-height: 1.5;
    }
    * {
    box-sizing: border-box;
    }

    #__next {
      height: 100%;  

    }

footer {
  margin-top: auto;
}
`;

const PageContainer = styled.div`
  max-width: 80ch;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const InnerStyles = styled.div``;

export interface PageWrapperProps {
  children: React.ReactNode;
}
export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <Header />
      <PageContainer>
        <GlobalStyles />
        <InnerStyles>{children}</InnerStyles>
      </PageContainer>
      <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by
          <span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
