import xBurguer from "@/assets/x-burguer.jpg";
import xSalada from "@/assets/x-salada.jpg";
import xBacon from "@/assets/x-bacon.jpg";
import xTudo from "@/assets/x-tudo.jpg";
import artesanal from "@/assets/artesanal.jpg";
import batataFrita from "@/assets/batata-frita.jpg";
import onionRings from "@/assets/onion-rings.jpg";
import nuggets from "@/assets/nuggets.jpg";
import refrigerante from "@/assets/refrigerante.jpg";
import suco from "@/assets/suco.jpg";
import agua from "@/assets/agua.jpg";
import milkshake from "@/assets/milkshake.jpg";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "lanches" | "porcoes" | "bebidas";
  bestSeller?: boolean;
};

export const categories = [
  { id: "todos", label: "Todos", icon: "🍽️" },
  { id: "lanches", label: "Lanches", icon: "🍔" },
  { id: "porcoes", label: "Porções", icon: "🍟" },
  { id: "bebidas", label: "Bebidas", icon: "🥤" },
] as const;

export const menuItems: MenuItem[] = [
  {
    id: "x-burguer",
    name: "X-Burguer",
    description: "Pão, hambúrguer artesanal 150g, queijo cheddar derretido e molho especial.",
    price: 18.9,
    image: xBurguer,
    category: "lanches",
    bestSeller: true,
  },
  {
    id: "x-salada",
    name: "X-Salada",
    description: "Pão, hambúrguer 150g, queijo, alface, tomate e maionese caseira.",
    price: 20.9,
    image: xSalada,
    category: "lanches",
  },
  {
    id: "x-bacon",
    name: "X-Bacon",
    description: "Pão, hambúrguer 150g, queijo cheddar, bacon crocante e molho barbecue.",
    price: 24.9,
    image: xBacon,
    category: "lanches",
    bestSeller: true,
  },
  {
    id: "x-tudo",
    name: "X-Tudo",
    description: "Pão, hambúrguer 180g, queijo, bacon, ovo, presunto, alface, tomate e milho.",
    price: 29.9,
    image: xTudo,
    category: "lanches",
  },
  {
    id: "artesanal",
    name: "Hambúrguer Artesanal",
    description: "Pão brioche, blend 200g, cebola caramelizada, rúcula e molho trufado.",
    price: 34.9,
    image: artesanal,
    category: "lanches",
    bestSeller: true,
  },
  {
    id: "batata-frita",
    name: "Batata Frita",
    description: "Batatas fritas crocantes. P: 150g | M: 250g | G: 400g. Acompanha ketchup.",
    price: 14.9,
    image: batataFrita,
    category: "porcoes",
  },
  {
    id: "onion-rings",
    name: "Onion Rings",
    description: "Anéis de cebola empanados e fritos até ficarem crocantes. Porção 200g.",
    price: 19.9,
    image: onionRings,
    category: "porcoes",
  },
  {
    id: "nuggets",
    name: "Nuggets",
    description: "10 nuggets de frango crocantes com molho à escolha.",
    price: 16.9,
    image: nuggets,
    category: "porcoes",
    bestSeller: true,
  },
  {
    id: "refri-lata",
    name: "Refrigerante Lata",
    description: "Lata 350ml. Coca-Cola, Guaraná, Fanta ou Sprite.",
    price: 6.9,
    image: refrigerante,
    category: "bebidas",
  },
  {
    id: "refri-600",
    name: "Refrigerante 600ml",
    description: "Garrafa 600ml. Coca-Cola, Guaraná, Fanta ou Sprite.",
    price: 9.9,
    image: refrigerante,
    category: "bebidas",
  },
  {
    id: "suco",
    name: "Suco Natural",
    description: "Suco natural 400ml. Sabores: laranja, maracujá, limão ou abacaxi.",
    price: 10.9,
    image: suco,
    category: "bebidas",
  },
  {
    id: "agua",
    name: "Água Mineral",
    description: "Água mineral sem gás 500ml.",
    price: 4.9,
    image: agua,
    category: "bebidas",
  },
  {
    id: "milkshake",
    name: "Milk-shake",
    description: "Milk-shake cremoso 400ml. Sabores: chocolate, morango ou baunilha.",
    price: 16.9,
    image: milkshake,
    category: "bebidas",
    bestSeller: true,
  },
];
