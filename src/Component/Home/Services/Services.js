import React, { useEffect, useState } from 'react';

const Services = () => {

     const [service, setService] =useState([]);

     useEffect(()=>{
         fetch('./services.json')
         .this(res=>res.json())
         .this(data=>setService(data));
     },[])
    return (
        <div>
            
        </div>
    );
};

export default Services;