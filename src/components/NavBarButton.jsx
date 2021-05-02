import React, {useState} from 'react';

import { Button, Card } from 'react-bootstrap'

const stockitems = [
    { name: "apple", instock: 2 },
    { name: "pineapple", instock: 3 },
    { name: "pear", instock: 0 },
    { name: "peach", instock: 3 },
    { name: "orange", instock: 1 }
  ];

const NavBarButton = () => {
    
        const [cart, setCart] = useState([]);
        const [stock, setStock] = useState(stockitems);

      
      
        // event apple:2
        const moveToCart = async (e) => {
          let [name, num] = e.target.innerHTML.split(":");
          const myCart = [...cart]
          console.log(myCart)

          if(num <= 0) return

          // innerHTML should be format name:3
          // use newStock = stock.map to find "name" and decrease number in stock by 1
          // only if instock is >=  do we move item to Cart and update stock
          let newStock = stock.map((item, index) => {
            if (item.name === name) 
                item.instock--; 
                
                
            return item;
            
          });
          setStock(newStock);
          await setCart([...cart, name])
        };
        const updatedList = stock.map((item, index) => {
          return (
            <Button onClick={moveToCart} key={index}>
              {item.name}:{item.instock}
            </Button>
          );
        });

        const shoppingCart = cart.map((item, index) => {
            return (
            <Button key={index}>
{item}
            </Button>
        )
        })
        // note that React needs to have a single Parent
        return (
          <>
            <ul style={{ listStyleType: "none" }} >{updatedList}</ul>
            <h1>Shopping Cart</h1>
            <ul style={{ listStyleType: "none" }}>{shoppingCart}</ul>
            
          </>
        );
      }
     


export default NavBarButton
