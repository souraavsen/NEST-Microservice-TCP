//To define all the Service Name

export const AuthServiceDef = {
  NAME: 'AUTH-SERVICE',
  HOST: '127.0.0.1',
  PORT: 3002,
  PATTERNS: {
    Login: 'auth-login',
    Profile: 'profile',
    ValidateToken: 'validate-token',
  },
};

export const OrderServiceDef = {
  NAME: 'ORDER-SERVICE',
  HOST: '127.0.0.1',
  PORT: 3001,
  PATTERNS: {
    UserOrders: 'user-orders',
  },
};
