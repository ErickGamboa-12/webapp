import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Carousel } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Importa el componente Menu
import Menu from './menu'; // Asegúrate de que el archivo menu.jsx existe y está exportando el componente correctamente

// Crea un componente separado para el contenido de inicio
function InicioContent() {
  return (
    <>
      {/* Banner principal con gradiente naranja y texto en movimiento */}
      <div className="custom-banner">
        <div className="moving-text">
          <h4>¡Bienvenido a Los Jochos DEL OCHO! Los mejores jochos de la vecindad</h4>
        </div>
      </div>

      {/* Carrusel de imágenes sin texto */}
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src="../img/banner.jpg" alt="Banner 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="../img/banner2.jpg" alt="Banner 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="../img/banner3.jpg" alt="Banner 3" />
        </Carousel.Item>
      </Carousel>

      {/* Contenedor de la tabla con divs */}
      <div className="custom-table">
        {/* Fila 1 - Encabezado */}
        <div className="custom-row header">
          <div className="custom-cell">
            <h3><b>PEDIDOS FAVORITOS</b></h3>
          </div>
        </div>

        <div className="custom-row row">
      <div className="custom-cell col-md-4">
        <div className="image-container">
          <img src="img/pedido1.jpg" className="animated-border" width="100%" alt="Pedido 1" />
          <div className="overlay">
            <p className="description">Descripción de la imagen 1</p>
            <button className="btn-ver-mas">Ver más</button>
          </div>
        </div>
      </div>
      <div className="custom-cell col-md-4">
        <div className="image-container">
          <img src="img/pedido2.jpg" className="animated-border" width="100%" alt="Pedido 2" />
          <div className="overlay">
            <p className="description">Descripción de la imagen 2</p>
            <button className="btn-ver-mas">Ver más</button>
          </div>
        </div>
      </div>
      <div className="custom-cell col-md-4">
        <div className="image-container">
          <img src="img/pedido3.jpg" className="animated-border" width="100%" alt="Pedido 3" />
          <div className="overlay">
            <p className="description">Descripción de la imagen 3</p>
            <button className="btn-ver-mas">Ver más</button>
          </div>
        </div>
      </div>
    </div>



        {/* Fila 3 (vacía) */}
        <div className="custom-column">
          <div className="custom-cell">
          Contenido 2
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Router>
      <Navbar expand="md" expanded={expanded} className="p-3 fixed-top custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="../img/logo_jochos.jpg"
              alt="Logo"
              width="8%"
              height="auto"
              className="me-2"
            />
            <p className="mb-0">Los Jochos DEL OCHO</p>
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)} className="ms-4">INICIO</Nav.Link>
              <Nav.Link as={Link} to="/menu" onClick={() => setExpanded(false)} className="ms-4">MENÚ</Nav.Link>
              <Nav.Link as={Link} to="/nosotros" onClick={() => setExpanded(false)} className="ms-4">NOSOTROS</Nav.Link>
              <Nav.Link as={Link} to="/contacto" onClick={() => setExpanded(false)} className="ms-4">CONTACTO</Nav.Link>
              <Nav.Link as={Link} to="/sucursales" onClick={() => setExpanded(false)} className="ms-4">SUCURSALES</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<InicioContent />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/nosotros" element={<div>Nosotros</div>} />
        <Route path="/contacto" element={<div>Contacto</div>} />
        <Route path="/sucursales" element={<div>Sucursales</div>} />
      </Routes>
    </Router>
  );
}

export default App;
