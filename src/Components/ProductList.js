import { React, createContext } from "react";

const ProductListJson = [
  {
    id: 1,
    name: "Airpod",
    price: 248,
    qty: 0,
    image: "./images/airpod.jpg",
  },
  {
    id: 2,
    name: "Scientific Calculator",
    price: 121,
    qty: 0,
    image: "./images/calculator.jpg",
  },
  {
    id: 3,
    name: "SCEPTER Monitor",
    price: 168,
    qty: 0,
    image: "./images/lcd_tv.jpg",
  },
  {
    id: 4,
    name: "Apple MagSafe Charger",
    price: 33,
    qty: 0,
    image: "./images/magsafe.jpg",
  },
  {
    id: 5,
    name: "Sandisk 128GB",
    price: 12,
    qty: 0,
    image: "./images/microsd.jpg",
  },
  {
    id: 6,
    name: "Projector, Native 1080P",
    price: 79,
    qty: 0,
    image: "./images/projector.jpg",
  },
  {
    id: 7,
    name: "Sandisk HardDisk 2TB",
    price: 119,
    qty: 0,
    image: "./images/ssd.jpg",
  },
  {
    id: 8,
    name: "Roku Streaming Stick",
    price: 46,
    qty: 0,
    image: "./images/streaming_stick.jpg",
  },
  {
    id: 9,
    name: "2-Pack 3ft USB C Cable ",
    price: 7,
    qty: 0,
    image: "./images/usbcables.jpg",
  },
  {
    id: 10,
    name: "Logitech C920x HD Pro Webcam",
    price: 88,
    qty: 0,
    image: "./images/webcam.jpg",
  },
];
const productContext = createContext(ProductListJson);

export { productContext };
