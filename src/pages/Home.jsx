import React, { useEffect } from 'react';
import {useState} from 'react';

export default function Home() {

const [Products, setProducts] = useState([]);
async function fetchAllProducts(){
    const response = await fetch('https://fakestoreapi.com/products')
    const result = response.json();
    setProducts(result);
}

useEffect(()=>{
    fetchAllProducts()
},[])
  return (
    <div>
        <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}
