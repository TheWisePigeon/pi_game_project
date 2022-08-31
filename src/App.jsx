import { logOut, signupWithEmailAndPassword } from './firebase.js'

function App() {

  const handle = async (event)=>{
    event.preventDefault()
    console.log('got submitted');
    signupWithEmailAndPassword("zozozozeph@gmail.com", "007#feartheDREAD")
  }


  return (
    <>
    <p className=" bg-red-400 text-center">Welcome to WARDLE</p>
    <form onSubmit={handle} action="" method="post">
      <input className=" outline-orange-500" placeholder="email" type="email" name="mail" id="" />
      <input className=" outline-orange-800" placeholder="pass" type="password" name="pass" id="" />
      <button  type="submit">
        Submit
      </button>
    </form>
    </>
  )
}

export default App
