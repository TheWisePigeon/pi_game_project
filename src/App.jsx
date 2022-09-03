import { logOut, signupWithEmailAndPassword } from './firebase.js'
import Navbar from './components/Navbar'
import Login from './components/Login'

function App() {

  const handle = async (event)=>{
    event.preventDefault()
    console.log('got submitted');
    signupWithEmailAndPassword("zozozozeph@gmail.com", "007#feartheDREAD")
  }


  return (
    <>
    <Navbar />
    {/* <Login /> */}
    <div className=" mx-auto h-60 p-4 ">
        <form className="grid grid-cols-1 gap-6 justify-items-center pt-8" onSubmit={handle} action="" method="post" >
            <input className="form-input rounded
               bg-slate-200 border-solid
               border-slate-300 
               hover:border-purple-300 
               hover:border
               focus:border-purple-400 
               p-1 
               w-80" 
               placeholder="Email" 
               type="email" 
               name="mail" 
               id="" 
              />
            <input className="form-input rounded bg-slate-200 border-solid border-slate-300 focus:border-purple-400 p-1 w-80" placeholder="Password" type="password" name="pass" id="" />
            <button  type="submit" className="w-80 bg-purple-400 text-purple-100 font-medium rounded h-8">
                Submit
            </button>
        </form>
    </div>
    </>
  )
}

export default App
