import Product from "../models/Product";

export const addProduct = (link, title, price) => {
    const newProduct = Product.insertOne({ link, title, price });

    return newProduct;
};

export const getAllProducts = () => {
    const allProducts = Product.find();

    return allProducts;
};

export const getProductById = (id) => {
    const Product = Product.findById({_id: id});

    return Product;
};

export const getProductByVideoId = (video_id) => {
    const products = Product.find({ video_id });

    return products;
};