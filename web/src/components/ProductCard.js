import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { gql, GraphQLClient } from "graphql-request";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from '../lib/sanity';
import Client from 'shopify-buy'

import { useSiteContext, useAddItem } from '../lib/context'


const ProductCard = ({ product, productID }) => {
     const [loading, setLoading] = useState(false);


     const addItemToCart = useAddItem()



     return (
          <article
               className='text-center bg-white w-1/3 rounded-xl p-9  shadow-md pt-2 md:p-2 space-y-80'
               key={product.store.id}
          >
               {product.images && (
                    <Image
                         src={urlFor(product.images[0]).url()}
                         width="80"
                         height="80"
                         alt='text'
                         className='rounded-full object-cover'

                    />
               )}

               <p className="font-semibold text-4xl">{product.store.title}</p>


               <div className="font-medium">
                    <button
                         onClick={() => addItemToCart(product.id, 1)}
                         disabled={loading}
                         className={`bg-indigo-500 text-black px-6 py-2 rounded block mb-4 w-full ${loading && "opacity-70 cursor-not-allowed"
                              }`}
                    >
                         {loading ? "Please Wait..." : "Buy Now"}
                    </button>

                    <Link href="/">
                         <a className="bg-gray-100 text-gray-800 px-6 py-2 rounded block">
                              View Product
                         </a>
                    </Link>

               </div>
          </article >
     );
}





export default ProductCard