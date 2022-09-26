// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";
import product_06_image_01 from "../images/product_3.3.jpg";
import product_06_image_02 from "../images/product_4.3.png";


const products = [
  {
    id: "01",
    title: "Crispy Chicken",
    price: 499.0,
    image01: product_01_image_01,
    category: "Burger",

    desc: "Pollo crispy, pan, tomate, lechuga, mayonesa, pepinos, ketchup, cebolla. Pensada para los fans del pollo.",
  },

  {
    id: "02",
    title: "Doble Guacamole",
    price: 799.0,
    image01: product_02_image_01,
    category: "Burger",

    desc: "Pan, carne a la parrilla, lechuga, tomate, cebolla, pepino, mayonesa y guacamole.",
  },

  {
    id: "03",
    title: "Cheese onion doble",
    price: 799.0,
    image01: product_03_image_01,
    category: "Burger",

    desc: "Pan, doble carne a la parrilla, salsa cheddar y cebolla salteada.",
  },

  {
    id: "04",
    title: "BBQ Bacon Doble",
    price: 900.0,
    image01: product_04_image_01,
    category: "Burger",

    desc: "Carne a la parrilla, pan, salsa barbacoa, queso cheddar y panceta.",
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 399.0,
    image01: product_05_image_01,
    category: "Burger",

    desc: "Carne a la parrilla, pan, queso cheddar, mostaza y ketchup.",
  },
  {
    id: "06",
    title: "Chimiburga de pollo",
    price: 599.0,
    image01: product_01_image_01,
    category: "Burger",

    desc: "Carne a la parrilla, chimichurri, lechuga, tomate y pepino.",
  },

  {
    id: "07",
    title: "Doble Napolitano",
    price: 900.0,
    image01: product_02_image_02,
    category: "Burger",

    desc: "2 carnes a la parrilla, jamón, queso, tomate y mayonesa.",
  },

  {
    id: "08",
    title: "Bondiolita Morrón Salteado",
    price: 799.0,
    image01: product_03_image_02,
    category: "Burger",

    desc: "Pan de germen de trigo, barbacoa y mostaza, morrón, cebolla rehogada y bondiola desmechada.",
  },

  {
    id: "09",
    title: "Pizza con champiñones",
    price: 799.0,
    image01: product_04_image_02,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Pizza",
    price: 24.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "Pizza",
    price: 35.0,
    image01: product_06_image_01,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Pizza ",
    price: 35.0,
    image01: product_06_image_02,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

];

export default products;
