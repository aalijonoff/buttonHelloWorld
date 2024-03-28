import React from "react";

function MyButton({children, margin}){
    return( 
        <div
            onClick={console.log('helllo')} 
            style={{
                border: '4px solid red', 
                display: 'inline',
                padding: '5px 10px',
                borderRadius: 5,
                fontSize: 22,
                cursor: 'pointer',
                margin: margin
            }}
        >
            {children}
        </div>
    ) 
}

export default MyButton