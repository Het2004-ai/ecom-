import React, { useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Alert } from 'react-native';
import HomeScreen from './screens/homescreen';
import CartScreen from './screens/cartscreen';
import ProductDetailScreen from './screens/productdetailscreen';
import CheckoutScreen from './screens/CheckoutScreen';

const Stack = createStackNavigator();

export const CartContext = createContext({
  cart: [] as Product[],
  addToCart: (product: Product) => {},
  removeFromCart: (id: number) => {},
  updateQuantity: (id: number, newQuantity: number) => {},
  totalPrice: 0,
  products: [] as Product[],
});

const products = [
  { 
    id: 1, 
    name: 'Noise ColorFit Smartwatch', 
    price: 2499, 
    desc: '1.96" AMOLED display, Bluetooth calling, 100+ sports modes, 7-day battery',
    image: 'https://www.gonoise.com/cdn/shop/files/2_ebc001d6-0b56-4133-8903-7e1723d395ef.webp'
  },
  { 
    id: 2, 
    name: 'boAt Airdopes 141 Earbuds', 
    price: 1299, 
    desc: '42 hours playback, low latency gaming mode, IPX4 water resistance',
    image: 'https://www.boat-lifestyle.com/cdn/shop/files/AD141-FI_Black01_600x.png'
  },
  { 
    id: 3, 
    name: 'Wildcraft Laptop Backpack', 
    price: 999, 
    desc: 'Water resistant, 30L capacity, padded laptop sleeve, multiple pockets',
    image: 'https://wildcraft.com/media/catalog/product/1/_/1_2073.jpg'
  },
  { 
    id: 4, 
    name: 'Mi 33W Fast Charger + Cable', 
    price: 599, 
    desc: 'Fast charging adapter with Type-C cable, compatible with most Android phones',
    image: 'https://m.media-amazon.com/images/I/41jS8smDtmL._SL1100_.jpg'
  },
];

interface Product {
  id: number;
  name: string;
  price: number;
  desc: string;
  image: string;
  quantity?: number;
}

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity ?? 0) + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    Alert.alert('Success', `${product.name} has been added to the cart.`);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * (item.quantity ?? 0), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalPrice, products }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Shop Now' }} />
          <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Your Cart' }} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Details' }} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ title: 'Checkout' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartContext.Provider>
  );
}

export default App;