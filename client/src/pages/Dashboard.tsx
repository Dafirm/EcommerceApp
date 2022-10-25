// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


// import "./Home.css";
// import { Button } from "@mui/material";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";
// import { useAppDispatch, useAppSelector } from "redux/hooks";
// import { RootState } from "redux/store";
// import { deleteProduct, findAll } from "../redux/slices/productSlice";

// export default function Dashboard() {
//   const dispatch = useAppDispatch();
  
//   const { userProducts, loading } = useAppSelector((state: RootState) => ({
//     ...state.product,
//   }));

//   useEffect(() => {
//     dispatch(findAll());
//   }, [dispatch]);

  

//   return (
//     <div className="Home_container">
//       {/* <h3>{items.loading && "..."}</h3> */}

//       <div className="Table">
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow className="Title__header">
//                 <TableCell>
//                   <h3>Title</h3>
//                 </TableCell>
//                 <TableCell>
//                   <h3>Size</h3>
//                 </TableCell>
//                 <TableCell>
//                   <h3>Price</h3>
//                 </TableCell>
//                 <TableCell>
//                   <h3>Category</h3>
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {userProducts.map((item: any) => {
//                 return (
//                   <TableRow key={item.title}>
//                     <TableCell>
//                       <img src={item.images} alt="flag" />
//                     </TableCell>
//                     <TableCell>{item.size}</TableCell>

//                     <TableCell>{item.price}</TableCell>

//                     <TableCell className="cart__button">
//                       <Button
//                         variant="contained"
//                         // onClick={() => dispatch(addToCart(item))}
//                         // disabled={isInCart}
//                       >
//                         ADD
//                       </Button>
//                     </TableCell>
//                     <TableCell className="cart__button">
//                       <Button
//                         variant="contained"
//                         onClick={() => dispatch(deleteProduct(item))}
//                       >
//                         Delete
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </div>
//   );
// }


import React from 'react'

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard


