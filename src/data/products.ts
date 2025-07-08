import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 42999,
    image: "https://images.unsplash.com/photo-1592286130439-45c0ad48a58a?w=400",
    description: "Apple'ın en yeni ve gelişmiş telefonu. Pro kamera sistemi ve A17 Pro çip ile.",
    category: "Teknoloji",
    rating: 4.8,
    reviews: 1247,
    inStock: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 39999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    description: "Samsung'un amiral gemisi telefonu. S Pen ve gelişmiş kamera özellikleri.",
    category: "Teknoloji",
    rating: 4.7,
    reviews: 892,
    inStock: true
  },
  {
    id: 3,
    name: "MacBook Air M3",
    price: 34999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    description: "Apple'ın en hafif ve güçlü dizüstü bilgisayarı. M3 çip ile muhteşem performans.",
    category: "Bilgisayar",
    rating: 4.9,
    reviews: 756,
    inStock: true
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: 8999,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
    description: "Premium gürültü engelleme özellikli kablosuz kulaklık.",
    category: "Ses",
    rating: 4.6,
    reviews: 634,
    inStock: true
  },
  {
    id: 5,
    name: "Nike Air Max 270",
    price: 3299,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    description: "Rahat ve şık spor ayakkabı. Günlük kullanım için ideal.",
    category: "Spor",
    rating: 4.5,
    reviews: 1123,
    inStock: true
  },
  {
    id: 6,
    name: "Levi's 501 Original",
    price: 899,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    description: "Klasik ve zamansız denim pantolon. %100 pamuk.",
    category: "Giyim",
    rating: 4.4,
    reviews: 2341,
    inStock: true
  },
  {
    id: 7,
    name: "Instant Pot Duo 7-in-1",
    price: 2199,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    description: "Çok fonksiyonlu elektrikli düdüklü tencere. 7 farklı pişirme modu.",
    category: "Ev",
    rating: 4.7,
    reviews: 445,
    inStock: true
  },
  {
    id: 8,
    name: "Kindle Paperwhite",
    price: 1599,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
    description: "Su geçirmez e-kitap okuyucu. Ayarlanabilir arka ışık.",
    category: "Kitap",
    rating: 4.8,
    reviews: 3567,
    inStock: true
  },
  {
    id: 9,
    name: "Dyson V15 Detect",
    price: 18999,
    image: "https://images.unsplash.com/photo-1558618666-e3c8a8e7ad53?w=400",
    description: "Güçlü kablosuz elektrikli süpürge. Lazer teknolojisi ile.",
    category: "Ev",
    rating: 4.6,
    reviews: 287,
    inStock: false
  },
  {
    id: 10,
    name: "The North Face Nuptse",
    price: 4599,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    description: "Sıcak tutan kış montu. Su geçirmez ve nefes alabilir.",
    category: "Giyim",
    rating: 4.7,
    reviews: 891,
    inStock: true
  }
];

export const categories = [
  "Tümü",
  "Teknoloji", 
  "Bilgisayar",
  "Ses",
  "Spor",
  "Giyim", 
  "Ev",
  "Kitap"
]; 