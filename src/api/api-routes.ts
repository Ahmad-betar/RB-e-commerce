export const API_ROUTES = {
  product: {
    get: "products",
    getOne: "product/",
    bestsellers: "bestsellers",
  },

  product_type: {
    get: "parentProductTypes",
    // getOne: "product/",
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
    resetPassword: "customer/resetPassword",
    requestPasswordReset: "customer/requestPasswordReset",
  },

  location: {
    state: {
      get: "states",
      getOne: "state",
      create: "admin/state",
      delete: "admin/state/",
      edit: "admin/state/",
    },

    governorates: {
      getOne: "governorates/",
      add: "admin/governorate",
      delete: "admin/governorate/",
    },

    city: {
      getOne: "cities/",
      add: "admin/city",
      delete: "admin/city/",
    },
  },

  order: {
    order: "customer/order",
    customer_order: "customer/orderFromTempOrder",
    orders: "customer/orders",
    oneOrder: "customer/orders/", //param
    downloadOrder: "customer/downloadOrder/", //param
  },

  banner: {
    get: "banner",
    add: "admin/banner",
  },

  checkout: {
    get: "customer/checkout",
  },

  popular: {
    get: "populars",
  },
};
