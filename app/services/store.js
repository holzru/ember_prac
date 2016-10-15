import Ember from 'ember';

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
  }
});
