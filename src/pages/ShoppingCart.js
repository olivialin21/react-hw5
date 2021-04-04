import { Layout } from 'antd';
import ShoppingDetail from "../components/ShoppingDetail";
import NavBar from "../components/NavBar";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"

const { Header, Content, Footer } = Layout;

function ShoppingCart() {
  return (
    <Layout className="container main-layout">
      <NavBar />
      <Layout className="bg-gray">     
        <Header className="layout-header">
          <AppHeader title="Shopping Cart" />
        </Header>
        <Content className="layout-content">
          <ShoppingDetail/>
        </Content>
        <Footer className="layout-footer">
           <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default ShoppingCart;
