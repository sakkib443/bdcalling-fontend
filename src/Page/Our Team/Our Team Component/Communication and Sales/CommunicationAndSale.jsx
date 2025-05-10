import React, { useEffect, useState } from 'react';
import CommunicationAndSalesCard from './CommunicationAndSalesCard';

const CommunicationAndSale = () => {
    const [communicators,setCommunicator] = useState([])
            useEffect(()=>{
                fetch('CommunicationAndSales.json')
                .then(res=>res.json())
                .then(data => setCommunicator(data))
            },[])
    return (
        <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2  gap-y-4 px-4'>
            {
                communicators.map(communicator => (
                    <CommunicationAndSalesCard communicator={communicator}></CommunicationAndSalesCard>
                ))
            }
        </div>
    );
};

export default CommunicationAndSale;