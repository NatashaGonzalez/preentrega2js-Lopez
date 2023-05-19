import Card from 'react-bootstrap/Card';
import Itemcount from '../Navbar/Itemcount/Itemcount';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Item = (props) => {

    const {data} = props;
    const {title, price, img, id} = data;

    return(
        <div className='container m-5'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            $ {price}
        </Card.Text>
        <Itemcount/>
        <Button className='boton' as={NavLink} to={`/item/${id}`}>Detalles</Button>
        </Card.Body>
    </Card>
</div>
    )
}

export default Item;