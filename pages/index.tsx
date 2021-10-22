import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Content = styled.div``;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <Content>
        <p>
          Here is some contentHere is some contentHere is some contentHere is
          some contentHere is some contentHere is some contentHere is some
          contentHere is some contentHere is some contentHere is some
          contentHere is some contentHere is some contentHere is some
          contentHere is some contentHere is some contentHere is some
          contentHere is some contentHere is some contentHere is some
          contentHere is some contentHere is some contentHere is some
          contentHere is some contentHere is some contentHere is some
          contentHere is some contentHere is some contentHere is some
          contentHere is some contentHere is some contentHere is some
          contentHere is some content
        </p>
        <p>and here is some on another line</p>
      </Content>
    </>
  );
};

export default Home;
