import React, { useEffect, useState } from 'react';
import MarketingAndOperationCard from './MarketingAndOperationCard';

const MarketingAndOperation = () => {
    const [marketers,SetMarketer] = useState([])
            useEffect(()=>{
                fetch('MarketingAndOperation.json')
                .then(res=>res.json())
                .then(data => SetMarketer(data))
            },[])
    return (
        <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2  gap-y-4 px-4'>
            {
                marketers.map(marketer => (
                    <MarketingAndOperationCard marketer={marketer}></MarketingAndOperationCard>
                ))
            }
        </div>
    );
};

export default MarketingAndOperation;