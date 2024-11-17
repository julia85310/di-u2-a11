"use client"
import Image from "next/image";
import styles from "./page.module.css";
import ShoppingCart from "./ShoppingCart";
import ShoppingCart2 from "./ShoppingCart2";
import Ejercicio3 from "./Ejercicio3";
import Ejercicio4 from "./Ejercicio4"

export default function Home() {
  return (
    <div>
      <h1>Ejercicio 1</h1>
      <ShoppingCart />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Ejercicio 2</h1>
      <ShoppingCart2 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Ejercicio 3</h1>
      <Ejercicio3 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Ejercicio 4</h1>
      <Ejercicio4 />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
