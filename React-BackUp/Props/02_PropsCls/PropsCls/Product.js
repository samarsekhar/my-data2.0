import React, { Component } from "react";
import Cart from "./Cart";

class Product extends Component {
    Product_Name = "Dell Laptop"
    Product_Image = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6HE0mO3OAv83SJyC2goek-6GIJdG9mZR2RN3G6zzIBB1TPBazU5AIZ61Y62bX5ZalBzY7wsI&usqp=CAc"
    Price = "$45000.00"
    Color = ["Gold" ,",","Black",",","Sliver",",","Blue"]

    render() {
        return(
            <div>
                <h2>Product Component</h2>
                <hr/>
                <Cart Product_Name={this.Product_Name} Product_Image={this.Product_Image} Price={this.Price} Color={this.Color} />
            </div>
        )
    }
}
export default Product;