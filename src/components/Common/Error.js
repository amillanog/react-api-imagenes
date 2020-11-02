import React from 'react';

const Error = ({mensaje}) => {
    return ( 
         <p className="my-3  text-center alert alert-primary error">{mensaje}</p>
     );
}
 
export default Error;