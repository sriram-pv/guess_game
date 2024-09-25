import { useState } from "react"
import Result from "./Result"

function App()
{
  const [num,setnum] = useState('')
  const seceretnum = Math.floor(Math.random()*10)+1
  function handlechange(e)
  {
    setnum(e.target.value)
  }
  return(
    <div className="bg-greyish flex items-center justify-center p-[20%]">
    <div className=" p-3 border-solid border-bordercolor flex flex-col w-[800px] border-2 rounded-2xl mb-3 text-white">
      <div className="font-bold text-2xl mb-[20px]">
<label htmlFor="term">
  Guess the number between 1 to 10 
</label>
      </div>
      <input 
      className="p-2 border-solid border-black rounded-xl hover:bg-[#9e9c98] focus: border-0 bg-[#F5F5DC]"
      id='term'
      type='text'
      name="term"
      onChange={handlechange}
      />
      <div className="pt-3">

    <Result seceretnum={seceretnum} num={num}/>
    </div>
    </div>
    </div>
  )
}
export default App