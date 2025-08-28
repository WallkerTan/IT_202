import React, { useMemo } from 'react'
const cartItems=[
        {id: 1, name: "San pham A", price: 100000, quantity: 2},
        {id: 2, name: "San pham B", price: 200000, quantity: 1}
    ]
export default function ShoppingCart() {
    const total= useMemo(()=>
   {return cartItems.reduce((sum, current) => sum+current.price*current.quantity, 0)}, [cartItems])
  return (
    <div>
      <h1>{total}</h1>
    </div>
  )
}
