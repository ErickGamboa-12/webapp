import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Carousel } from 'react-bootstrap';
import { Heart } from "lucide-react"; 
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import './App.css';



function InicioContent() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [favorites, setFavorites] = useState({}); 

  const images = [
    { src: "img/pedido1.jpg", alt: "Pedido 1", description: "Especialidad de la casa. Doble carne, salsa bbq, doble jamón, doble tocino, doble salchicha, doble queso amarillo, cheddar, arrachera, manchego, piña, chorizo, quesillo, champiñones, tomate y cebolla. Incluye aderezo de mayonesa y catsup." },
    { src: "img/pedido2.jpg", alt: "Pedido 2", description: "Papas, jamón, tocino, salsa verde, queso derretible, sal, pimienta, cebolla, cilantro, crema ácida, mayonesa, chile en polvo, salsa picante, aguacate." },
    { src: "img/pedido3.jpg", alt: "Pedido 3", description: "Pollo, harina, huevo, pan rallado, salsa búfalo, mantequilla, ajo en polvo, pimienta, sal." },
    { src: "img/pedido4.png", alt: "Pedido 4", description: "Pan, salchicha, queso amarillo, tocino, chiles, mayonesa, mostaza, kétchup, cebolla, jalapeños." },
    { src: "img/pedido5.jpg", alt: "Pedido 5", description: "Alitas de pollo, salsa búfalo, mantequilla, ajo en polvo, sal, pimienta, paprika, miel, mostaza, vinagre, cebolla en polvo, orégano, perejil." },
    { src: "img/pedido6.jpg", alt: "Pedido 6", description: "hot dog, salchicha, queso amarillo, tocino, chiles, cebolla, mayonesa, mostaza, kétchup, aderezo ranch, aderezo de ajo, 2 aguas frescas a su gusto." },
    { src: "img/pedido7.jpg", alt: "Pedido 7", description: "Papas, sal, pimienta, ajo en polvo, paprika, orégano, aceite, cebolla en polvo, chile en polvo." },
    { src: "img/pedido8.jpg", alt: "Pedido 8", description: "Pan ,carne molida, queso cheddar, lechuga, tomate, cebolla, tocino, mayonesa, mostaza, kétchup, pepinillos, sal, pimienta, refrescos." },
    { src: "img/pedido9.jpg", alt: "Pedido 9", description: "Salchicha para asar, arrachera, jamón, quesillo, manchego, cheddar, tocino, tomate y cebolla. Incluye aderezo de mayonesa y catsup." }
  ];

  const toggleFavorite = (imageAlt) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = { ...prevFavorites };
      updatedFavorites[imageAlt] = !updatedFavorites[imageAlt];
      return updatedFavorites;
    });
  };

  return (
    <>

    
      <div className="custom-banner">
        <div className="moving-text">
          <h4>¡Bienvenido a Los Jochos DEL OCHO! Los mejores jochos de la vecindad</h4>
        </div>
      </div>
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

      <div className="custom-table" id="menu">
        <div className="custom-row header">
          <div className="custom-cell">
            <h3><b>MENÚ</b></h3>
          </div>
        </div>

        <div className="custom-row row">
          <div className="custom-cell col-md-4">
            <table className="image-table">
              <tbody>
                {Array.from({ length: 3 }, (_, rowIndex) => (
                  <tr key={rowIndex}>
                    {images.slice(rowIndex * 3, rowIndex * 3 + 3).map((image, index) => (
                      <td key={index}>
                        <img
                          src={image.src}
                          className="animated-border"
                          alt={image.alt}
                          onClick={() => setSelectedImage(image)}
                        />
                        
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>



      {selectedImage && (
  <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
      <p>{selectedImage.description}</p>

      <button className="heart-button" onClick={() => toggleFavorite(selectedImage.alt)}>
        <Heart
          size={24}
          color={favorites[selectedImage.alt] ? "red" : "white"}
          fill={favorites[selectedImage.alt] ? "red" : "none"}
        />
      </button>
    </div>
  </div>
)}

    </>
  );
}

function App() {
  const [expanded, setExpanded] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setExpanded(false);
  };

  return (
    <>
      <Navbar expand="md" expanded={expanded} className="p-3 fixed-top custom-navbar">
        <Container>
          <Navbar.Brand onClick={() => scrollToSection('inicio')} className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
            <img src="../img/logo_jochos.jpg" alt="Logo" width="8%" height="auto" className="me-2" />
            <p className="mb-0">Los Jochos DEL OCHO</p>
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link onClick={() => scrollToSection('inicio')} className="ms-4">INICIO</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('menu')} className="ms-4">MENÚ</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('nosotros')} className="ms-4">NOSOTROS</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('sucursales')} className="ms-4">SUCURSALES</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('contacto')} className="ms-4">CONTACTO</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div id="inicio" className="content-section">
        <InicioContent />
      </div>

      <div id="nosotros" className="content-section2">
      <section className="nosotros-container">
            <div className="nosotros-content">
              <h2 className="nosotros-title">Sobre Nosotros</h2>
              <p className="nosotros-text">
                <span className="nosotros-highlight">Los Jochos del Ocho</span> es una cenaduría originaria de
                Tuxtla Gutiérrez, Chiapas. Inspirada en la icónica vecindad del Chavo del Ocho, ofrecemos
                un ambiente nostálgico y familiar donde podrás disfrutar de nuestras especialidades: 
                hamburguesas, jochos y snacks.
              </p>
              <div className="nosotros-card">
                <h3 className="nosotros-subtitle">Nuestra Historia</h3>
                <p className="nosotros-description">
                  Nacimos con la idea de traer un pedacito de infancia a nuestros clientes, combinando el
                  sabor con la diversión. Desde nuestros inicios, hemos sido un punto de encuentro para
                  familias y amigos que buscan calidad, sabor y un toque de humor.
                </p>
              </div>
            </div>
            
            <div className="nosotros-gallery">
              <img src="/img/local.jpg" alt="Nuestro local" className="nosotros-image" />
              <img src="/img/menu.jpg" alt="Nuestro menú" className="nosotros-image" />
              <img src="/img/equipo.jpg" alt="Nuestro equipo" className="nosotros-image" />
            </div>
          </section>
      </div>

      <div id="sucursales" className="content-section3">
        <br />
      <h2>SUCURSALES</h2>
      <br />
      <p>Ubicación de nuestras sucursales.</p>

      <div className="map-container">
        {/* Sucursal 1 */}
        <div className="map-column">
        <img src="/img/geolocalizacion.png" alt="imagen" width={80} className='sucursal-container'/>
        <br />
        <center><h6><b>QUINTA AVENIDA NTE</b></h6></center>
        <hr />
        <table>
          <tr>
            <td>
              <center>
              <img src="/img/reloj.png" alt="relojocho" width={40} />
              </center>
            </td>
            <td>
              <center>
                <h6>Horario: 5p.m. – 11:45 p.m.</h6>
              </center>
            </td>
          </tr>
        </table>
        <hr />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.378977761238!2d-93.16577282508027!3d16.75628198402726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd96ca7cace49%3A0xf4d71df7d4fba219!2sLos%20Jochos%20Del%20Ocho%20%5BTer%C3%A1n%5D!5e1!3m2!1ses-419!2smx!4v1743186711838!5m2!1ses-419!2smx"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Sucursal 2 */}
        <div className="map-column">
        <img src="/img/geolocalizacion.png" alt="imagen" width={80} className='sucursal-container'/>
          <center><h6><b>LIBRAMIENTO SUR OTE</b></h6></center>
          <hr />
          <table>
          <tr>
            <td>
              <center>
              <img src="/img/reloj.png" alt="relojocho" width={40} />
              </center>
            </td>
            <td>
              <center>
                <h6>Horario: 5p.m. – 11:45 p.m.</h6>
              </center>
            </td>
          </tr>
        </table>
        <hr />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.748223877581!2d-93.09062092508069!3d16.736921284043575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed274719d64509%3A0x5192a97b2bdc4e63!2sLos%20Jochos%20Del%20Ocho%20Libramiento%20Sur!5e1!3m2!1ses-419!2smx!4v1743186783663!5m2!1ses-419!2smx"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Sucursal 3 */}
        <div className="map-column">
        <img src="/img/geolocalizacion.png" alt="imagen" width={80} className='sucursal-container' />
        <center><h6><b>AV. NOVENA NTE</b></h6></center>
        <hr />
        <table>
          <tr>
            <td>
              <center>
              <img src="/img/reloj.png" alt="relojocho" width={40} />
              </center>
            </td>
            <td>
              <center>
                <h6>Horario: 5p.m. – 11:45 p.m.</h6>
              </center>
            </td>
          </tr>
        </table>
        <hr />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.2821343432192!2d-93.11440562508014!3d16.761356184022944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8919a18fd67%3A0xdedf2b18a9663a5b!2sLos%20Jochos%20Del%20Ocho!5e1!3m2!1ses-419!2smx!4v1743186812295!5m2!1ses-419!2smx"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

    </div>
      
      <footer id="contacto" className="contact-banner">
      <div className="contact-content">
        <h2 className="title">📞 Contactanos</h2>
        <p className="description">¡Ponte en contacto con nosotros para más información!</p>
        <ul className="info">
          <li className="info-item">
            <img src="../img/Logo_casa.png" width="24px" alt="Dirección" />
            <span> 9na Norte entre 3a y 4a Oriente, Tuxtla Gutiérrez, 29000</span>
          </li>
          <li className="info-item">
            📞 <a href="tel:+529613314349">961 331 4349</a>
          </li>
          <li className="info-item">
            💬 <a href="https://wa.me/5219613314349" target="_blank">+52 1 961 331 4349</a>
          </li>
          <li className="info-item">
            📧 <a href="mailto:sogm_1992@hotmail.com">sogm_1992@hotmail.com</a>
          </li>
        </ul>
      </div>
    </footer>
    </>
  );
}

export default App;