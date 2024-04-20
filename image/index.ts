import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>狐狸工具 | Foxtool | 便捷的Solana工具箱</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
        <meta name="Keywords" content="FoxTool,狐狸助手,狐狸工具箱,SOLANA一键发币,代币工具,批量转账,市值管理,DAPP开发,锁仓服务,批量发送SOL,工具箱,Solana链上服务,代币发行,合约部署,Raydium流动性管理,发行Token,发行Meme代币,发行虚拟币,元数据管理,迷因币发行,币工具,Sol工具,Solana工具,批量空投服务,合约开发工具,定制DAPP开发,币圈一条龙服务"></meta>
        <meta name="Description" content="FoxTool狐狸助手是领先的Solana一键发币工具,批量转账,支持标准合约、持币复利、扫描挖矿、下级邀请奖励等多种代币机制，可让小白用户也能实现一键发币、代币空投、批量转账、市值管理等多项功能"></meta>
    
      </Head>
      <HomeView />
    </div>
  );
};

type Props = {
  // Add custom props here
  
}


export default Home;
