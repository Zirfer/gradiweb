import { Carousel, Row } from 'react-bootstrap'
import { useState } from 'react'

function CarouselImagenes(data) {

    const [index, setIndex] = useState(0);
    let images = []

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    for (const item in data.images) {
        images.push(data.images[item])
    }

    return (
        <Row>
            <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                {images.map((item, i) =>
                    <Carousel.Item key={i} interval={3000}>
                        <img
                            src={item}
                            alt={i}
                        />
                    </Carousel.Item>
                )}
            </Carousel>
        </Row>
    )
}
export default CarouselImagenes;
