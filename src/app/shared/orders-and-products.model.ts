export interface OrdersModel {
  id: number;
  title: string;
  date: string;
  description: string;
  products: Array<object>;
}

export interface ProductsModel {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: {
    start: string,
    end: string
  };
  price: [
    { value: number, symbol: string, isDefault: number },
    { value: number, symbol: string, isDefault: number }
    ];
  order: number;
  date: string;
}
