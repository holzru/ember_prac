import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';

const products = [

];

export default Ember.Service.extend({
  getOrders() {
    return [
      {id: '1', name: 'Nate'},
      {id: '2', name: 'Gregg'}
    ];
  },

  getOrderById(id) {
    const orders = this.getOrders();
    return orders.findBy('id', id);
  },
  newOrder() {
    return Order.create({
      items: products.map((product) => {
        return LineItem.create({
          product: product
        });
      })
    });
  },

  getProducts() {return products;}
});
