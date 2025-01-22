// // src/components/Auth.js
// import React, { useState } from "react";
// import { auth } from "../firebase";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// const Auth = ({ setUser }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isRegister, setIsRegister] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = isRegister
//         ? await createUserWithEmailAndPassword(auth, email, password)
//         : await signInWithEmailAndPassword(auth, email, password);
//       setUser(userCredential.user); // This is correct if setUser is passed from the parent
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>{isRegister ? "Register" : "Login"}</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">{isRegister ? "Register" : "Login"}</button>
//       </form>
//       <button onClick={() => setIsRegister(!isRegister)}>
//         {isRegister ? "Login" : "Register"}
//       </button>
//     </div>
//   );
// };

// export default Auth;
