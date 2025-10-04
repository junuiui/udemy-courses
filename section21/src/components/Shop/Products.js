import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1', price: 6, title: 'My 1 Book', description: 'first book!!',
  },
  {
    id: 'p2', price: 8, title: 'My 2 Book', description: 'se book!!',
  },
  {
    id: 'p3', price: 5, title: 'My 3 Book', description: 'th book!!',
  },
  {
    id: 'p4', price: 2, title: 'My 4 Book', description: 'fo book!!',
  },
  {
    id: 'p5', price: 4, title: 'My 5 Book', description: 'fi book!!',
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}

      </ul>
    </section>
  );
};

export default Products;
