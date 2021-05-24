import React from 'react';



const Popup = (props) => {
    return (props.trigger)?(
        <div className='popup'>
            <button className="closebtn" onClick={props.close}>X</button>
            <div className="popupinner">
                
                {props.children}
            </div>
            
        </div>
    ):"";
};

export default Popup