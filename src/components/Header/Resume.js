import React, { useRef } from 'react';
import protflio from '../../Image/marketing manager.png'
import { useReactToPrint } from "react-to-print";
const Resume = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <button onClick={handlePrint} className="print__button btn btn-outline btn-primary">Downlode </button>
            <div ref={componentRef} className="card">



                <div className="card w-110 bg-base-100 shadow-xl">
                    <figure><img src={protflio} alt="" /></figure>

                </div>



            </div>




        </div>
    );
};

export default Resume;