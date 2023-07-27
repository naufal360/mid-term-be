import { addProduct, getAllProducts, getProductById, getProductByVideoId } from "../repositories/Product";

export const createProduct = (link, title, price) => {
    const newProduct = addProduct(link, title, price);

    return newProduct;
};

export const getAllProductsService = () => {
    const allProducts = getAllProducts();

    return allProducts;
};

export const getProductByIdService = (id) => {
    const product = getProductById(id);

    return product;
};

export const getProductByVideoIdService = (video_id) => {
    const products = getProductByVideoId(video_id);

    return products;
};