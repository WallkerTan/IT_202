import React, { useCallback, useState } from 'react'
type Info={
    email: string,
    password: string
}
export default function LoginForm() {
    const [state, setState]=useState<Info>({email: "", password: ""})
    const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(state);
    },
    [state]
  );
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label><br />
        <input type="text" onChange={(e)=>setState({...state, email: e.target.value})}/> <br />
        <label htmlFor="">Password</label><br />
        <input type="text" onChange={(e)=>setState({...state, password: e.target.value})}/> <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
