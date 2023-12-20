import { Fragment  } from "react";
import NavBar from "./Nav/NavBar";
import ProductList from "./Product/ProducList";
import CartContext from "./store/CartContext";
import { useContext } from "react";
import Cart from "./Cart";


const Home = ()=>{

    const ctx = useContext(CartContext);

    return (
        <Fragment>
            {ctx.showCart && <Cart/>}
            <NavBar />
            <ProductList />
        </Fragment>
    )
}

export default Home;