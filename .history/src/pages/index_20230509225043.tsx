// pages/index.tsx
import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { AppShell, Navbar, Footer, Header, Text } from "@mantine/core";
import { Burger, MediaQuery } from "@mantine/core";
const nav_width = {
  sm: 300, //画面幅がテーマのブレークポイントsmを超える時
  lg: 400, //画面幅がテーマのブレークポイントmdを超える時
  base: 200, //上記以外。デフォルト100％幅
};

const Home: NextPage = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <AppShell
        header={
          <Header height={40}>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
            </MediaQuery>
          </Header>
        }
        navbar={
          <Navbar width={nav_width} hidden={!opened}>
            hidden属性の追加
          </Navbar>
        }
        footer={<Footer height={30}>フッター。高さ設定必須。</Footer>}
      >
        <Text>メインコンテンツ</Text>
      </AppShell>
    </>
  );
};

export default Home;
