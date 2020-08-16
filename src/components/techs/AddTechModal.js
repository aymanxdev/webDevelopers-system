import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'


export default function AddTechModal() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

    const onSubmit = () =>{
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Please Enter Full name' , displayLength: Infinity });
        }else{

            console.log(firstName, lastName);

            //clear fields
            setFirstName('')
            setLastName('')
        }
    }

    return (
        <div id="add-tech-modal" className="modal">
        <div className="modal-content">
            <h4>New technician</h4>
        <div className="row">
        <div className="input-field">
            <input type='text' name='firstName' value={firstName} onChange={e => setFirstName(e.target.value )}/>
            <label className="active"  htmlFor="firstName">
                First Name
            </label>
        </div>
        </div> 
        <div className="row">
        <div className="input-field">
            <input type='text' name='lastName' value={lastName} onChange={e => setLastName(e.target.value )}/>
            <label className="active"  htmlFor="lastName">
                Last Name
            </label>
        </div>
        </div> 
     
        </div>
            <div className="modal-footer">
                <a href="!" className="modal-close waves-effect blue waves-light btn " onClick={onSubmit}>Enter</a>
            </div>
        </div>
    )
}
