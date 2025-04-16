import React from 'react';
import { LuBookOpenCheck } from 'react-icons/lu';

const ButtonPrimary = ({ title }) => {
    return (
        <div>
            <div className="flex  ">
                <div className="flex gap-2 text-xl items-center border border-[#41bfb8] px-4 py-2 rounded-md">
                    <LuBookOpenCheck className="text-2xl text-[#41bfb8] font-semibold" />
                    <p className="text-[#41bfb8] font-semibold">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default ButtonPrimary;