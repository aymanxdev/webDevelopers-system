import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'


export default function AddLogModal() {
    const [message, setMessage] = useState(' ')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

    const onSubmit = () =>{
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' , displayLength: Infinity });
        }else{

            console.log(message, tech, attention);
        }
    }

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
        <div className="modal-content">
            <h4>Enter System Log</h4>
        <div className="row">
        <div className="input-field">
            <input type='text' name='message' value={message} onChange={e => setMessage(e.target.value )}/>
            <label className="active"  htmlFor="message">
                Log Message
            </label>
        </div>
        </div> 
        <div className="row">
            <div className="input-field" >
                <select  name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                    <option>Select a technician </option>
                    <option value="Sam smith">Sam Smith</option>
                    <option value="Ayman A">Ayman S</option>
                </select>
            </div>
        </div>  
        <div className="row">
            <div className="input-field">
            <p>
                <label>
                    <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)} />
                    <span>Needs attention</span>
                </label>
            </p>
            </div>
        </div> 
        </div>
            <div className="modal-footer">
                <a href="!" className="modal-close waves-effect blue waves-light btn " onClick={onSubmit}>Enter</a>
            </div>
        </div>
    )
}
const modalStyle ={
    width: '75%',
    height: '75%'
}