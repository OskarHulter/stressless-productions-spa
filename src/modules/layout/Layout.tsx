import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Button from '../interaction/Button'

const Layout = () =>
  <div>
    <Header />
    <Main>
      <Button onClick={() => { }}>
        Open Modal
      </Button>
    </Main>
    <Footer />
  </div>

export default Layout