import React from 'react'
import MyNavbar from '../../components/Navbar/MyNavbar';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import hero_image from '../../assets/undraw_browsing-online_rozb(1).svg'

const Home = () => {
  const categories = ["Teknologi", "Otomotif", "Fashion", "Sport"]
  return (
    <div className='d-flex min-vh-100 flex-column'>
      <MyNavbar />
       <div className='bg-primary text-light py-5 flex-fill d-flex align-items-center'>
      <Container className='flex-fill mt-5'>
        <Row className="w-100 align-items-center">
         
          <Col md="6">
            <h1>Selamat Datang di PeTIK Blog</h1>
            <p className='lead'>Pesantren Teknologi Infiormasi dan Komunikasi (PeTIK) adalah 
                lembaga pendidikan yang fokus pada pengembangan keterampilan IT,
                khusunya web development, mobile development dan jaringan.
            </p>
            <p>
                Bergabunglah dengan kami dan tingkatkan keahlianmu di dunia digital
                bersama mentor dan praktisi industri!
            </p>
            <Button variant='light' size='lg' href='/posts' className=''>Pelajari lebih lanjut</Button>
          </Col>

          <Col md="6">
            <img src={hero_image} alt="hero image" className="img-fluid" />
          </Col>
         
        </Row>
      </Container>
       </div>

      {/* popular categori section */}
      <Container className='my-5'>
        <Row className='text-center mb-5'>
          <Col>
          <h2 className='fw-bold'>Kategori Terpopuler</h2>
          <p className='text-muted'>Eksplor kategori yang menarik</p>
          </Col>
        </Row>
        <Row className='g-4 justify-content-center'>
          {categories.map((category, index) => (
           <Col md={4} key={index}>
          <Card className='text-center shadow-sm category-card'>
            <Card.Body>
              <Card.Title className='fw-bold'>{category}</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          ))}
          
        </Row>
      </Container>
      <Footer />
      
    </div>
  )
}

export default Home;
