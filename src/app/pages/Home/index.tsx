import React, {FC, Suspense, useEffect} from "react";
import { useDispatch } from "react-redux";

import "./home.scss";
import { Layout } from "antd";
import { getPeopleSaga } from "../../components/People/actions";
import People from "../../components/People";
const { Header, Footer, Content } = Layout;

const Home:FC = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPeopleSaga());
  },[dispatch]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="header">
        Header
      </Header>
      <Content style={{ padding: "0 50px", width: "100%", maxWidth: "900px", margin: "0 auto" }}>
        <Suspense fallback={<span>Loading...</span>}>
          <People />
        </Suspense>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );

};

export default Home;