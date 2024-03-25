import { useState } from 'react'
import { useForm } from 'react-hook-form';
import './App.css'
function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d)=>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve()
        }, d*1000)
    })
  }

  const onSubmit = async (data) => {
    // await delay(2)
    let r = await fetch("http://localhost:3000/UserData",{method: "POST", body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data , res)
  }

  return (
    <>
    {isSubmitting && <div>Loading...</div>}
      <form onSubmit={handleSubmit(onSubmit)}>

        <input placeholder='Username' {...register("Username" , { required: {value:true , message: "This field is required" } , minLength: {value:3 , message:"Length must be greater than 3."} ,maxLength: {value:10 , message:"Length must be smaller than 10."}})}/>
        {errors.Username && <div>{errors.Username.message}</div>}
        <br />
        <input placeholder='Password' {...register("Password")} />
        <br />

        <input disabled={isSubmitting} type="submit" value= "Submit" />
      </form>
    </>
  )
}

export default App
