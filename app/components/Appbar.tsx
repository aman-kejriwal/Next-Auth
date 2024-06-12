"use client"
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation"

const Appbar=()=>{
    const router =useRouter();
    return (
        <div>
           <button onClick={()=>{
               signIn();
           }}>SignIn</button>
           <button onClick={()=>{
               signOut();
           }}>Signout</button>
       </div>
    )
}
export default Appbar;