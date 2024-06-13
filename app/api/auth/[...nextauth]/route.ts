import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'EMAIL',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: 'Email' },
          password: { label: 'password', type: 'password', placeholder: 'Password' },
        },
        async authorize(credentials: any) {
          // user get here after pressing Submit on filling Creadentials.
          // do validations of the "credentials" that you got here.
          console.log(credentials);
            return {
                id: "user1" ,
                name:"Aman Kumar",
                email:"Aman@gmail.com"
            };
        },
      })
  ],  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }