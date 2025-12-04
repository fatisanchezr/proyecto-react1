import ProductCard from "./ProductCard";

export default function ProductList() {
  const productos = [
    {
      nombre: "Gabriela Hearst",
      descripcion: "Botas vaqueras blancas",
      precio: 3000,
      imagen: "https://via.placeholder.com/300x300?text=Poncho",
    },
    {
      nombre: "Juan Caballero",
      descripcion: "Cinturón de piel",
      precio: 2500,
      imagen: "https://via.placeholder.com/300x300?text=Cinturon",
    },
    {
      nombre: "Dolce Vita",
      descripcion: "Funda para celular bordada",
      precio: 700,
      imagen: "https://via.placeholder.com/300x300?text=Funda",
    },
    {
      nombre: "Dolce Vita",
      descripcion: "Botas vaqueras blancas",
      precio: 3000,
      imagen: "https://via.placeholder.com/300x300?text=Botas",
    },
    {
      nombre: "Salsa Macha",
      descripcion: "Salsa hecha a base de chiles",
      precio: 250,
      imagen: "https://via.placeholder.com/300x300?text=Salsa+Macha",
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-center gap-6 p-6">
      {productos.map((p, index) => (
        <ProductCard key={index} {...p} />
      ))}
    </div>
  );
}
