"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

const Appbar=()=>{
    const session=useSession();
    return (
        <div>
           <button onClick={()=>{
               signIn();
           }}>SignIn</button>
           <br/> 
           <button onClick={()=>{
               signOut();
           }}>SignOut</button>
           <br />
           {JSON.stringify(session)}
        </div>
    )
}
export default Appbar;