export const API_ROUTES = {
  product: {
    get: "products",
    getOne: "product/",
  },

  cart: {
    get: "customer/cart",
    delete: "customer/cart",
    add: "customer/cart",
    update: "customer/changeItemQuantity",
  },
  authentication: {
    login: "customer/login",
    signUp: "customer/signup",
    resetPassword: "resetPassword",
    requestPasswordReset: "customer/requestPasswordReset",
  },
};
