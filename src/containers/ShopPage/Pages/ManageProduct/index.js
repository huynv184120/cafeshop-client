import React from "react";
import FormProduct from "../../../../components/ProductForm";
import ListProductCard from "../../../../components/ListProductCard";
const ManageProduct = () => {
    return (
        <div>
            <ListProductCard/>
            <FormProduct isNewForm={true}/>
        </div>
    )
}

export default ManageProduct;