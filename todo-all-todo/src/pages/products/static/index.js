import { useEffect, useState } from "react";


export async function getStaticProps(context) {
  let productsArray = []
  await fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    productsArray= data.products
  })
  .catch(error => {
    console.log(error)
    return {
      props: {
        products: []
      }, // will be passed to the page component as props
    }
  
  });

  return {
    props: {
      products: productsArray
    }// will be passed to the page component as props
  }

}




function ProductsIndex({ products }) {



  return (
    <main>
      <section>
        {products.map((product) => {
          return (
            <aside key={product.id}>
              <img src={product.thumbnail} />
              <h3>{product.title}</h3>
            </aside>
          );
        })}
      </section>
    </main>
  );
}

export default ProductsIndex;