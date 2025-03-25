import React, { useEffect, useState } from 'react'
import { getMenuItemsAPI } from '../services/allAPI';
import { Row, Col, Card, ListGroup, Container, } from 'react-bootstrap';

const Menu = () => {
  const [category, setCategory] = useState('food');
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState('');
  console.log(menuItems);


  const fetchMenuItems = async (category) => {
    setError('');

    try {
      const result = await getMenuItemsAPI(category);
      if (result.status == 200) {
        setMenuItems(result.data);
      }
      // console.log(result);  
    } catch (err) {
      setError('Failed to load menu items. Please try again later.');
    }
  }


  useEffect(() => {
    fetchMenuItems(category);
  }, [category]);


  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div>
      <div className='home-img container-fluid p-0  position-relative d-flex justify-content-center align-items-center mt-5'>
        <img className='img-fluid' src="./images/home-img.png" alt="" />
        <div className="main-titles d-flex flex-column justify-content-center align-items-center">
          <h1 className='text-center'>MENU</h1>
          <p className='text-center'>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to <br /> place an order, use the "Order Online" button located below the menu.</p>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center gap-5 mt-5">

        <button onClick={() => handleCategoryClick('food')} type="button" className="btn btn-outline-primary">Food</button>
        <button onClick={() => handleCategoryClick('drinks')} type="button" className="btn btn-outline-primary">Drinks</button>
        <button onClick={() => handleCategoryClick('brunch')} type="button" className="btn btn-outline-primary">Brunch</button>
        <button onClick={() => handleCategoryClick('snacks')} type="button" className="btn btn-outline-primary">Snacks</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Container>
        <Row className="justify-content-center align-items-center flex-grow-1 mt-5">
          <Col md={8}>
            <Card style={{ backgroundColor: '#333', color: 'white', border: 'none' }}>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  <h2 style={{ borderBottom: '2px solid white', paddingBottom: '10px' }}>{category.charAt(0).toUpperCase() + category.slice(1)} Menu</h2>
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item style={{ backgroundColor: 'transparent', color: 'white' }}>
                    {
                      menuItems.length > 0 ? (
                        menuItems.map((item) => (
                          <Row key={item._id}>
                            <Col>
                              <strong className='text-primary fs-5'>{item.name}</strong>
                              <p className="mb-0">
                                {item.description}
                              </p>
                            </Col>
                            <Col xs={3} className="text-right mt-4">
                              $ {item.price}
                            </Col>
                          </Row>
                        ))
                      ) : (
                        <p>No items found for this category.</p>
                      )
                    }
                  </ListGroup.Item>

                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Menu