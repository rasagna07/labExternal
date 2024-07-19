import React from 'react';
function ContactUs(){
    return(
        <div>
            <center><h1>
                Contact us
            </h1></center>
<form style={{width:"25%"}}>
    <label>Name</label>
    <input type='text' className='form-control'></input>
    <label>Email</label>
    <input type='email' className='form-control'></input>
    <label>Message</label>
   <textarea className='form-control'></textarea>
   <br/>
<button type="submit" className='btn btn-outline-success'>Submit</button>
</form>
        </div>
    );
}
export default ContactUs;