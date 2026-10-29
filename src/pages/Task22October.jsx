import React, { useState } from "react";

const Task22October = () => {
  // Question 1:
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // return (
  //   <div>
  //     {isLoggedIn ? (
  //       <div>
  //         <h1>Welcome User!</h1>
  //         <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Log Out</button>
  //       </div>
  //     ) : (
  //       <div>
  //         <h1>Please Login!</h1>
  //         <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
  //       </div>
  //     )}
  //   </div>
  // );
  // Question 2
  // const [showOrHide, setShowOrHide] = useState(false);
  // return (
  //   <div>
  //     <h1 style={showOrHide ? { display: "block" } : { display: "none" }}>
  //       Hello, React!
  //     </h1>
  //     <button onClick={() => setShowOrHide(!showOrHide)}>Hide/Show</button>
  //   </div>
  // );
  // Question 3:
  // const [marks, setMarks] = useState(null);
  // const [failOrPass, setFailOrPass] = useState(false);
  // return (
  //   <div>
  //     <label htmlFor="marks">Enter Your Marks:</label><br/>
  //     <input type="text" onChange={(e)=> setMarks(e.target.value)}/><br/><br/>
  //     <button onClick={() => marks >= 40 ? setFailOrPass("Pass") : setFailOrPass("Fail")}>Check Result</button>
  //     <h1>Result: {failOrPass}</h1>
  //   </div>
  // );
  // Question 4:
  // const [loadingStatus, setLoadingStatus] = useState(true);
  // return (
  //   <div>
  //     <h1>{loadingStatus ? "Loading..." : "Data Loaded Successfully!"}</h1>
  //     <button onClick={()=> setLoadingStatus(!loadingStatus)}>Toggle Loading</button>
  //   </div>
  // );
  // Question 5:
  // const students = ["ishan", "jasman", "anurag", "adeshpal", "karan"];
  // return (
  //   <ul>
  //   {
  //     students.map((student) => (
  //       <li>{student}</li>
  //     ))
  //   }
  //   </ul>
  // )
  // Question 6:
  // const products = [
  //   {
  //     id: "1",
  //     name: "Apple iPhone 18 Pro Max",
  //     price: "₹1,79,900"
  //   },
  //   {
  //     id: "2",
  //     name: "Apple iPhone Duo",
  //     price: "₹2,99,900"
  //   },
  //   {
  //     id: "3",
  //     name: "Apple iPhone 17 Pro Max",
  //     price: "₹1,49,900"
  //   },
  //   {
  //     id: "4",
  //     name: "Samsung Galaxy S26 Ultra 5G",
  //     price: "₹1,24,999"
  //   },
  //   {
  //     id: "5",
  //     name: "Apple iPhone 18 Pro",
  //     price: "₹1,64,900"
  //   }
  // ]
  // return (
  //   <ul>
  //   {
  //     products.map((product) => (
  //       <div>
  //       <li>Name: {product.name}</li>
  //       <li>Price: {product.price}</li>
  //       <br/>
  //       </div>
  //     ))
  //   }
  //   </ul>
  // )
  // Question 7:
  // const employees = [
  //   {
  //     id: "1",
  //     name: "ishan",
  //     department: "science",
  //   },
  //   {
  //     id: "2",
  //     name: "karan",
  //     department: "software development",
  //   },
  //   {
  //     id: "3",
  //     name: "jasman",
  //     department: "graphic designing",
  //   },
  //   {
  //     id: "4",
  //     name: "krishna",
  //     department: "science",
  //   },
  //   {
  //     id: "5",
  //     name: "adeshpal",
  //     department: "management",
  //   },
  // ];
  // return (
  //   <ul>
  //     {employees.map((employee) => (
  //       <li>
  //         <h1>{employee.name}</h1>
  //         <h2>{employee.department}</h2>
  //       </li>
  //     ))}
  //   </ul>
  // );
  // Question 8:
  // const students = ["ishan", "jasman", "karan", "anurag", "adesh"];
  // // const students = []; // uncomment to check another condition & comment above array
  // return students.length > 0 ? (
  //   <ul>
  //     {students.map((student) => (
  //       <li>{student}</li>
  //     ))}
  //   </ul>
  // ) : (
  //   <h1>No Students Available</h1>
  // );
};

export default Task22October;
