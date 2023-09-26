const express = require("express");


const usersController = require("../controllers/UserController")
const adminsController = require("../controllers/adminController")
const cartController = require("../controllers/CartController")
const categoryController = require("../controllers/CategoryController")
const CustomerController = require("../controllers/CustomerController")
const orderItemController = require("../controllers/Order_itemController.js")
const orderController = require("../controllers/OrderController")
const paymentController = require("../controllers/PaymentController")
const postController = require("../controllers/PostController")
const productController = require("../controllers/ProductController")
const shipmentController = require("../controllers/ShipmentController")
const subadminController = require("../controllers/SubAdminController")
const wishlistController = require("../controllers/WishlistController")
const router = express.Router();

router.get("/createUser", usersController.createUser);
router.get("/readUser", usersController.readUser);
router.get("/deleteUser", usersController.deleteUser);
router.get("/updateUser", usersController.updateUser);

router.get("/createAdmin", adminsController.createAdmin);
router.get("/readAdmin", adminsController.readAdmin);
router.get("/deleteAdmin", adminsController.deleteAdmin);
router.get("/updateAdmin", adminsController.updateAdmin);

router.get("/createCart", cartController.createCart);
router.get("/readCart", cartController.readCart);
router.get("/deleteCart", cartController.deleteCart);
router.get("/updateCart", cartController.updateCart);

router.get("/createCategory", categoryController.createCategory);
router.get("/readCategory", categoryController.readCategory);
router.get("/deleteCategory", categoryController.deleteCategory);
router.get("/updateCategory", categoryController.updateCategory);

router.get("/createCustomer", CustomerController.createCustomer);
router.get("/readCustomer", CustomerController.readCustomer);
router.get("/deleteCustomer", CustomerController.deleteCustomer);
router.get("/updateCustomer", CustomerController.updateCustomer);

router.get("/createOrderItem", orderItemController.createOrderItem);
router.get("/readOrderItem", orderItemController.readOrderItem);
router.get("/deleteOrderItem", orderItemController.deleteOrderItem);
router.get("/updateOrderItem", orderItemController.updateOrderItem);

router.get("/createOrder", orderController.createOrder);
router.get("/readOrder", orderController.readOrder);
router.get("/deleteOrder", orderController.deleteOrder);
router.get("/updateOrder", orderController.updateOrder);


router.get("/createPayment", paymentController.createPayment);
router.get("/readPayment", paymentController.readPayment);
router.get("/deletePayment", paymentController.deletePayment);
router.get("/updatePayment", paymentController.updatePayment);


router.get("/createPost", postController.createPost);
router.get("/readPost", postController.readPost);
router.get("/deletePost", postController.deletePost);
router.get("/updatePost", postController.updatePost);

router.get("/createProduct", productController.createProduct);
router.get("/readProduct", productController.readProduct);
router.get("/deleteProduct", productController.deleteProduct);
router.get("/updateProduct", productController.updateProduct);

router.get("/createShipment", shipmentController.createShipment);
router.get("/readShipment", shipmentController.readShipment);
router.get("/deleteShipment", shipmentController.deleteShipment);
router.get("/updateShipment", shipmentController.updateShipment);

router.get("/createSubAdmin", subadminController.createSubAdmin);
router.get("/readSubAdmin", subadminController.readSubAdmin);
router.get("/deleteSubAdmin", subadminController.deleteSubAdmin);
router.get("/updateSubAdmin", subadminController.updateSubAdmin);

router.get("/createWishList", wishlistController.createWishList);
router.get("/readWishList", wishlistController.readWishList);
router.get("/deleteWishList", wishlistController.deleteWishList);
router.get("/updateWishList", wishlistController.updateWishList);


module.exports = router; 