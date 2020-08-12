/**@jsx jsx */
import {jsx, Grid} from "theme-ui";
import Product from "./product";
import {Container} from "theme-ui";

const Products = ({products}) => {
  return (
    <Container p={4} bg="muted">
      <Grid columns={2}>
        {products.map(product => (
          <Product key={product.sku} {...product} />
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
