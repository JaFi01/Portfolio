import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header.jsx";
import Description from "./components/Description";
import NavMenu from "./components/NavMenu";
import SocialMedia from "./components/SocialMedia";
import Projects from "./components/Projects";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="WebPageContent">
        <Container>
          <Row className="d-flex justify-content-md-between sticky-top-md py-4">
            <Col id="leftSideColumn" className="d-block d-md-flex flex-column justify-content-md-between position-relative pb-md-5 leftSide" xs={12} md={6}>
              <div>
                <Header/>
                <NavMenu />
              </div>
              <div className="">
                <SocialMedia/>
              </div>             
            </Col>
            <Col className="rightSide py-4" xs={12} md={6}>
              <Description />
              <Projects />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              eveniet porro ducimus fugit placeat, alias optio totam ex
              blanditiis nemo quam consequuntur delectus iusto sunt fuga
              quibusdam modi eos ipsum! Aliquid veniam voluptatibus tempore
              deserunt, molestiae rem voluptas illo qui, corporis hic id
              perferendis odit, harum quod quidem animi fugit reiciendis
              recusandae. Iusto amet minima animi possimus voluptas placeat
              dicta? Cupiditate maxime fuga omnis mollitia totam perspiciatis
              hic debitis suscipit. Quasi odio, quo nemo quibusdam optio
              voluptas voluptatibus, quaerat temporibus consectetur in aliquid
              repellat et blanditiis iure modi dolore natus? Cumque nobis
              reprehenderit ut dicta porro fugiat accusantium illum illo,
              deleniti nam corporis quas animi laboriosam unde beatae culpa
              asperiores vitae qui? Cumque doloribus corrupti soluta deserunt
              dolore ad illum! Nemo odio fugiat ipsam debitis architecto dolorem
              id iusto tempora eum deleniti culpa veritatis, in praesentium
              molestias, ea optio autem fuga magni eveniet vitae obcaecati.
              Atque veniam inventore exercitationem sequi. Illum quaerat
              officiis aut qui nihil quia blanditiis unde hic rerum cum. Quam
              itaque deleniti recusandae reiciendis consectetur beatae. Unde
              eveniet culpa voluptatibus ad adipisci esse, dolore nemo
              voluptatum sed. Non, ullam eos esse odio quaerat itaque fugiat
              nisi ducimus, labore quidem aperiam sapiente debitis repudiandae
              dolorem ex? Quae officiis libero rem vel, repudiandae adipisci ab
              praesentium dicta ea nobis. Rerum doloremque quam ut. Suscipit
              consectetur quia iure voluptatum expedita ipsum obcaecati?
              Nesciunt quidem reiciendis assumenda inventore facilis fuga
              corrupti? Maiores dolor nobis ducimus eos quasi. Molestias
              repellendus vitae ratione? Asperiores quo doloribus et minus
              quisquam ex corrupti non molestias corporis. Laudantium amet enim
              labore, cumque fuga voluptatum magni, eveniet modi officiis nisi
              nostrum dignissimos id, commodi sequi officia dolorem? Sint velit
              cumque vel iure ducimus iusto repellat praesentium quibusdam
              obcaecati, expedita illo repellendus ratione error, sequi eaque
              nesciunt fugit eligendi consequuntur dolorem beatae necessitatibus
              eveniet veniam. Rem, enim et. Minus mollitia aliquam itaque
              accusamus porro sapiente commodi velit ab perspiciatis, at cum
              veritatis animi deleniti quis repudiandae obcaecati inventore
              sequi, eos facere eligendi soluta ea quod voluptas? Veniam, magni.
              Hic illo ab cum ut tenetur. Non, repellat quasi commodi rem iste
              maiores optio repudiandae enim nisi quo beatae, quaerat,
              distinctio velit assumenda deleniti sunt officiis soluta dolores
              reprehenderit a. Provident voluptatibus rerum adipisci aperiam,
              cum ipsa asperiores impedit neque quos distinctio obcaecati
              reprehenderit officiis debitis odio dicta necessitatibus vitae
              voluptatum esse vel maxime, quia magni natus. Velit, quisquam
              quia? Omnis odit, provident porro consequatur sint numquam. Neque
              accusantium laborum atque dolor! Consectetur ipsam necessitatibus
              assumenda obcaecati distinctio atque quo vitae fugit. Recusandae
              cumque neque hic cum molestias. Pariatur, possimus. Ut nesciunt
              doloribus voluptatum hic molestiae assumenda rem repellat dolor ex
              est sapiente, recusandae ipsam doloremque iste repudiandae harum
              culpa quisquam aliquam perspiciatis. Minima consequuntur facilis,
              voluptatem optio eligendi voluptatibus! Voluptatibus, nesciunt.

            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
