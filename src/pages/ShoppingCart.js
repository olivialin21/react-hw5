import { Layout } from 'antd'
import { StoreContext } from "../store"

const { Header, Content, Footer , Sider } = Layout;

function ShoppingCart() {
  return (
    <Layout className="container">
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default ShoppingCart;