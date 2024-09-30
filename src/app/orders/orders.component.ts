import { Component } from '@angular/core';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  constructor(private orderService: OrderService, private router: Router) {}

  orders: any[] = [];
  ordersLength: number = 0;

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders() {
    this.orderService.getAllOrders().subscribe(
      (orders) => {
        this.orders = orders;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  fetchOrderById(id: number){
    this.orderService.getOrderById(id).subscribe(
      (order) => {
        console.log('Fetched order:', order);
        this.orders = [order];
        this.ordersLength = order.length;
        this.router.navigate([`/orders/${id}`]);
    },
    (error) => {
        console.error('Error fetching order:', error);
      }
  )}

  deleteOrder(id: number) {
    this.orderService.deleteOrderById(id).subscribe(
      () => {
        console.log('Order deleted successfully');
        this.fetchOrders();
      },
      (error) => {
        console.error('Error deleting order:', error);
      }
    );
  }
}
