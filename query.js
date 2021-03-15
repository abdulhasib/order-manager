query getOrderProductNames {
  shisha_order(where: {id: {_eq: 5}}) {
    id
    order_items {
      order_item_products {
        product {
          name
        }
      }
    }
  }
}