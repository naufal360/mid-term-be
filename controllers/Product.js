import { createProduct, getAllProductsService, getProductByIdService } from "../services/Product";

export const createProduct = async (req, res) => {
    try {
        const { link, title, price } = req.body;

        const newProduct = await createProduct(link, title, price);

        res.status(201).json({
            data: newProduct,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await getAllProductsService();

        res.json({
            data: allProducts,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await getProductByIdService(id);

        res.json({
            data: product,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getProductByVideoId = async (req, res) => {
    try {
        const { video_id } = req.body;

        const products = await getProductByVideoId(video_id);

        res.json({
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};