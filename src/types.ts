export interface MenuItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  category: string;
  description: string;
  imageUrl: string;
  isVeg: boolean;
  isBestseller?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  avatarUrl: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  email: string;
}
