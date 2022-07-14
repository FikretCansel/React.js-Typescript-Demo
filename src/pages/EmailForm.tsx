import React, { useState } from 'react'
import { EmailFormModel } from '../models/emailFormModel';

function EmailForm() {
  const [emailForm, setEmailForm] = useState<EmailFormModel>({from:"",msg:"",to:""})

  const handleSendEmail=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log("Submit Success");
  }

  const handleChangeEmailForm=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setEmailForm({...emailForm,[event.target.name]:event.target.value});
    console.log(emailForm);
  }

  return (
    <div>
      <form onSubmit={handleSendEmail}>
        <input placeholder='From' name="from" onChange={(e)=>handleChangeEmailForm(e)}/>
        <input placeholder='To' name="to" onChange={(e)=>handleChangeEmailForm(e)}/>
        <input placeholder='Message' name="msg" onChange={(e)=>handleChangeEmailForm(e)}/>
        <button type='submit'>Gönder</button>
      </form>
      
    </div>
  );
}

export default EmailForm