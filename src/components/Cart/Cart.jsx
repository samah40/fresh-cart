import LoaderScreen from "../Loaderscreen/Loaderscreen";
import { Helmet } from "react-helmet";
import UseCart from "./UseCart";
import { Link } from "react-router-dom";


export default function Cart() {


const{products,totalCartPrice,handleChangeCount,handleDelete} =UseCart()

if(!products){
  return <LoaderScreen />
}

  return (
    <div>
      <Helmet> <title>cart</title></Helmet>
  <div className="container p-10">
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">

<div className="ml-20 py-2">
<h2 className=" text-4xl mb-2">shop cart :</h2>
<h3 className="main-color text-xl">Total Cart Price :{totalCartPrice} EGP</h3>
</div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  " >
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-16 py-3">
            <span className="sr-only">Image</span>
          </th>
          <th scope="col" className="px-6 py-3">
            Product
          </th>
          <th scope="col" className="px-6 py-3">
            Qty
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        
       {products?.map((product)=>(
        <tr key={product._id} className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-white dark:hover:bg-gray-600">
          <td className="p-4">
            <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt={product.product.title} />
          </td>
          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
            {product.product.title}
          </td>
          <td className="px-6 py-4">
            <div className="flex items-center">
              <button onClick={()=>handleChangeCount(product.product._id, product.count-1)} className="border-[#08ac0a] inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border  rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
               
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                </svg>
              </button>
              <div>
                <input type="number"   id="first_product" value={product.count}  onChange={(e) => handleChangeCount(product.product._id, Number(e.target.value))}  className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={1} required />
              </div>
              <button onClick={()=>handleChangeCount(product.product._id, product.count+1)}  className="inline-flex border-[#08ac0a] items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
               
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                </svg>
              </button>
            </div>
          </td>
          <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white main-color">
         {product.price} EGP
          </td>
          <td className="px-6 py-4">
            <a href="#" onClick={()=>{
              handleDelete(product.product._id)
            }} className="font-medium main-color dark:main-color hover:underline"><i className="fa-solid fa-trash-can text-2xl hover:scale-125 transition-all duration-100"></i></a>
          </td>
        </tr>
       ))}
      </tbody>
    </table>
  </div>
  <Link to="/cash"><button className="bg-main text-white p-5 btn w-full mt-5">checkout</button></Link>
</div>


    </div>
  )
}
