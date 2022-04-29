import { useRouter } from 'next/router';
import React, { useEffect, useContext, useState } from 'react'
import { authContext } from '../../contexts/authWrapper'

function Plans() {
  const { authUser } = useContext(authContext);

 useEffect(() =>{
   console.log('use effect of plans');
 }, []);


 //redirect component
 const Redirect = () => {
    const router = useRouter();
    router.push('/login');
    return null;
 }

  return (
    <>
    {
      authUser?.uid ? <div>Plans</div>  : <Redirect/>
    }
    </>
  )
}

export default Plans