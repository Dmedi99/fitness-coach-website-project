import React from "react";
import emailjs from "emailjs-com";


function ConsultationForm(){
    function sendConsultation(e){
        e.preventDefault();

        emailjs.sendForm('service_wyyxdil','template_569kxyl',e.target,'vQjeiBpAw9fEbSx_k')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
     }

    return(
        <div>
            <form className="consultation-form" onSubmit={sendConsultation}>

            </form>

        </div>
    )
}


export default ConsultationForm;