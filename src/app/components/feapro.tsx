
import { CiShoppingCart } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

export default function OurProduct() {
  const products: Product[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 99,
      image: "/01.jpg",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 99,
      
      image: "/02.jpg",
      isSale: true,
    },
    {
      id: 3,
      title: "Library Stool Chair",
      price: 99,
      image: "/03.jpg",
    },
    {
      id: 4,
      title: "Library Stool Chair",
      price: 99,
      image: "/04.jpg",
    },
    {
      id: 4,
      title: "Library Stool Chair",
      price: 99,
      image: "/05.jpg",
    },
   
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flew-row">
      <h1 className="text-3xl text-start font-semibold text-[#1C1B1F] tracking-tight-[10px]  mb-8">
        {" "}
        Featured Products
      </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <div key={product.id} className="group relative rounded-lg bg-white">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              {product.isNew && (
                <CiShoppingCart  className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600"/>
                
              )}
              
              <Link href={"components/productDectription/discription"}>
                <Image
                  src={product.image}
                  alt={product.title}
                  height={400}
                  width={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-lg font-medium text-[#1C1B1F]">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              <button className="rounded-full bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294]">
                <CiShoppingCart className="h-5 w-5" />
                <span className="sr-only">Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}