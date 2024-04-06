import { useState } from "react"
const Body = ({Body='section',...body}) => {

    const [informations,setinformations] = useState("");

    const [EmailPass,setEmailPass] = useState({
        email:"",
        password:""
    });

    function info(e){
        e.preventDefault();
        if(EmailPass.email === "" || EmailPass.password === ""){
            setinformations("red");
        }else{
            setinformations("aliceblue")
        }

       setEmailPass(elements => ({...elements,email:"",password:""}))
    }
    
console.log(informations)

  return (
   <Body {...body}>
    {
    
       <div className='Card'>
        <form onSubmit={info}>
            <div>
                <label className={informations === "red"?"colors":undefined}>Email</label>
                <input type="text"  placeholder='Email' value={EmailPass.email} onChange={(e)=>setEmailPass(elements => {return{...elements,["email"]:e.target.value}})}/>
            </div>

            <div>
            <label className={informations === "red"?"colors":undefined}>Password</label>
                <input type="password"  placeholder='Password' value={EmailPass.password} onChange={(e)=>setEmailPass(elements => {return{...elements,["password"]:e.target.value}})}/>
            </div>
            
            <div className='BTN'>
            <p>create Account?</p> 
                <button type="submit">Login</button>
            </div>
        </form>
       </div> 
}
   </Body>
  )
}

export default Body