import { currentUser } from '@clerk/nextjs/server'
import { clerkClient } from '@clerk/nextjs/server'
import { db } from './prisma';

export const verifyUser = async ()=>{
  const user = await currentUser()
console.log('user info ',user)

  if (!user) return null;
  //this info you ar receiving from clerk
  //check if this user already present in DB
  try{

    const loggedInUser  = await db.user.findUnique({
        where:{
            clerkUserId : user.id
        }
    })

    if(loggedInUser) return loggedInUser

    //else ceate user in DB
    const name = user.firstName +" "+ user.lastName
    const client = await clerkClient();
    await client.users.updateUser(user.id,{
        userName:name.split(" ").join("-")+ Math.random()*1000
    })

    const newUser = await db.user.create({
        data:{
            clerkUserId: user.id,
            name,
            imgUrl:user.imageUrl,
            userName:name.split(" ").join("-")+ Math.random()*1000,
            email:user.emailAddresses[0].emailAddress
        }
    })
    return newUser


  }catch(err){
    console.log("error while create user ",err)

  }

  
}