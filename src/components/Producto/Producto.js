import { useEffect, useState, lazy } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import './Producto.css';
const CarouselImagenes = lazy(() => import('../Carousel/CarouselImagenes.js'));

function Producto() {

    const [data, setData] = useState({})
    const [images, setImages] = useState({})

    useEffect(() => {
        async function getProduct() {
            try {
                const response = await axios.get('https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js');
                setData(response.data)
                setImages(response.data.images)
            } catch (error) {
                console.error(error);
            }
        }
        getProduct()
    }, [])


    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <CarouselImagenes images={images} />
                </Col>
            </Row>
        </Container>
    )
}
export default Producto;