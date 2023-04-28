import Card from 'react-bootstrap/Card';
import Itemcount from '../Navbar/Itemcount/Itemcount';

const Item = (props) => {

    const {data} = props;
    const {title, price, img} = data;

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
        </Card.Body>
    </Card>
</div>
    )
}

export default Item;