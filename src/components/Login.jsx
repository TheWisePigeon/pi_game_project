export default function Login(){
    return(
        <div>
            <form className="form-horizontal content-center" onSubmit={handle} action="" method="post" >
                <input className=" outline-orange-500" placeholder="email" type="email" name="mail" id="" />
                <input className=" outline-orange-800" placeholder="pass" type="password" name="pass" id="" />
                <button  type="submit">
                    Submit
                </button>
            </form>
        </div>
        
    )
}