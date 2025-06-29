import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to 🚀 ORDERS';
  }

  getOrdersByUserId(userId: number) {
    return {
      message: 'User orders retrieved successfully',
      data: {
        userId,
        totalOrders: 3,
        orders: [
          {
            orderId: 1001,
            orderNumber: 'ORD-001001',
            status: 'delivered',
            totalAmount: 89.99,
            orderDate: '2025-06-25T14:20:00Z',
            products: [
              {
                productId: 201,
                name: 'Coffee Mug Set',
                price: 29.99,
                quantity: 1,
                sku: 'CMS-001',
              },
              {
                productId: 202,
                name: 'Notebook - Lined',
                price: 15.0,
                quantity: 4,
                sku: 'NB-LN-001',
              },
            ],
          },
          {
            orderId: 1002,
            orderNumber: 'ORD-001002',
            status: 'shipped',
            totalAmount: 159.99,
            orderDate: '2025-06-28T09:15:00Z',
            products: [
              {
                productId: 301,
                name: 'Desk Lamp LED',
                price: 45.99,
                quantity: 1,
                sku: 'DL-LED-001',
              },
              {
                productId: 302,
                name: 'USB Cable - Type C',
                price: 12.0,
                quantity: 2,
                sku: 'USB-TC-001',
              },
              {
                productId: 303,
                name: 'Wireless Mouse',
                price: 89.99,
                quantity: 1,
                sku: 'WM-001',
              },
            ],
          },
        ],
      },
    };
  }
}
