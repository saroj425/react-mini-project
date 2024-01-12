import React, { useMemo, useState } from 'react';


const StringConversion = () => {
    const [input,setInput] = useState("");
    //console.log("inputinputinput",input);
    const firstCapuital = (str)=>{
        const newstr = str.split(" ");
        const newArr = newstr.map((value)=>{
            return value.charAt(0).toUpperCase()+value.slice(1);
        })
        return newArr.join(" ");
    }
    const reverseStr = (str)=>{
        const revrStr = str.split(" ").reverse().join(" ");
        return revrStr;
    }
    const  palindronStr= useMemo(()=>{        
        return input==input.split("").reverse().join("");
    },[input])
  return (
    <div>        
        <h1 style={{color:"maroon",textAlign:"center"}}>Please enter your String</h1>
        <div style={{display:"flex",justifyContent:"center"}}>            
            <input type='text' onChange={(e)=>setInput(e.target.value)}/>            
        </div>
        <p style={{color:"maroon",textAlign:"center"}}>{input}</p>
        <div className=''>
            <table class='table'>
                <tbody>
                    <tr>
                        <th scope='row'>First Letter Capital</th>
                        <td>{firstCapuital(input)}</td>
                    </tr>
                    <tr>
                        <th scope='row'>Length of String</th>
                        {
                            input <1 ?(" "):(<td>{input.replace(/\s/g,"").length}</td>)
                        }
                    </tr>
                    <tr>
                        <th scope='row'>String in Upper Case</th>
                        <td>{input.toUpperCase()}</td>
                    </tr>
                    <tr>
                        <th scope='row'>String in Lower Case</th>
                        <td>{input.toLowerCase()}</td>
                    </tr>
                    <tr>
                        <th scope='row'>Reverse String </th>
                        <td>{reverseStr(input)}</td>
                    </tr>
                    <tr>
                        <th scope='row'>Palindrome</th>
                        {
                            input <1 ? (" "):(<td>{palindronStr ? "Yes " :"No"}</td>)
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default StringConversion