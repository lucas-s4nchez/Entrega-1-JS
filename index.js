/* Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual).  */

const pizzas = [
  {
    id: 1,
    nombre: "Mozzarella",
    ingredientes: [
      "salsa de tomate",
      "queso mozzarella",
      "orégano",
      "aceitunas",
    ],
    precio: 1200,
  },
  {
    id: 2,
    nombre: "Napolitana",
    ingredientes: [
      "salsa de tomate",
      "queso mozzarella",
      "albahaca",
      "aceite de oliva",
    ],
    precio: 1400,
  },
  {
    id: 3,
    nombre: "Fugazza",
    ingredientes: ["queso mozzarella", "cebolla", "orégano", "aceitunas"],
    precio: 1400,
  },
  {
    id: 4,
    nombre: "Cuatro Quesos",
    ingredientes: [
      "salsa de tomate",
      "queso mozzarella",
      "queso gorgonzola",
      "queso fontina",
      "queso parmesano",
    ],
    precio: 1900,
  },
  {
    id: 5,
    nombre: "Especial",
    ingredientes: [
      "salsa de tomate",
      "queso mozzarella",
      "jamón",
      "huevo",
      "morrones",
      "aceitunas",
    ],
    precio: 1500,
  },
  {
    id: 6,
    nombre: "Rúcula y Jamón",
    ingredientes: [
      "salsa de tomate",
      "queso mozzarella",
      "jamón crudo",
      "rúcula",
      "aceitunas",
    ],
    precio: 1600,
  },
];

// a)

function idImpar() {
  let impares = [];
  const pizzasFilter = pizzas
    .filter((pizza) => pizza.id % 2 !== 0)
    .forEach((pizza) => (impares = [...impares, pizza.nombre]));
  return `Las pizzas con id impares son: ${impares}`;
}
console.log("a) Las pizzas que tengan un id impar.");
console.log(idImpar());

// b)

function precioMenor() {
  let resultado = pizzas.some((pizza) => pizza.precio < 600);
  if (resultado) {
    return `Probá nuestras riquisimas pizzas por menos de $600`;
  } else {
    return `Debido a la crisis económica actualizamos nuestros precios, ahora todas las pizzas están arriba de los $600 `;
  }
}
console.log("----------------------------------------------------");
console.log("b) ¿Hay alguna pizza que valga menos de $600?");
console.log(precioMenor());

// c)

function pizzaInfo() {
  pizzas.forEach((pizza) => {
    console.log(`La pizza ${pizza.nombre} tiene un precio de $${pizza.precio}`);
  });
}
console.log("----------------------------------------------------");
console.log("c) El nombre de cada pizza con su respectivo precio.");
pizzaInfo();

// d)

function mostrarIngredientes() {
  pizzas.forEach((pizza) => {
    console.log(
      `La pizza ${pizza.nombre} tiene los siguientes ingredientes: ${pizza.ingredientes}.`
    );
  });
}
console.log("----------------------------------------------------");
console.log(
  "d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual)."
);
mostrarIngredientes();
