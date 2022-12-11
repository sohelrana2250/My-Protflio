import React from 'react';
import image7 from '../../Image/image7.PNG';
import image8 from '../../Image/image8.PNG';
import image9 from '../../Image/image9.PNG';

const Project3 = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1 mt-10 m-3'>

                <div className="card w-110 bg-base-100 shadow-xl">
                    <figure><img src={image7} style={{ width: '650px', height: '400px' }} alt="Shoes" /></figure>
                </div>
                <div className="card w-110 bg-base-100 shadow-xl">
                    <figure><img src={image8} style={{ width: '650px', height: '400px' }} alt="Shoes" /></figure>

                </div>


                <div className="card w-110 bg-base-100 shadow-xl">
                    <figure><img src={image9} style={{ width: '650px', height: '400px' }} alt="Shoes" /></figure>
                </div>


            </div>

            <div className="card card-side bg-base-100 shadow-xl m-8">

                <div className="card-body m-5">

                    <a className='btn btn-outline btn-success' href="https://b612-inventory-store.web.app" alt=''>Web Site Link</a>
                    <a className='btn btn-outline btn-success' href="https://github.com/sohelrana2250/ema-john-simple.git" alt=''>Project Git-Link</a>
                    <a className='btn btn-outline btn-success' href="https://github.com/sohelrana2250/ema-john-simple-Server.git" alt=''>Server-Site Git-Link</a>

                </div>

                <div className="card-body m-5">

                    <li>Inventory Project ..This Project Backend security and etc exits</li>

                    <li>      React Js ---Font End</li>
                    <li>Node JS ,Express JS , MongoDB, Security Provider Firebase and JWT Token</li>
                    <li>JWT Token Which is the used Server to Client Commucation Security Provide .JWT One Kind of digital Singtanute
                        Font end Desing  tailwindcss CSS, Daisyui and Etc</li>
                    <li>My Inventory Project is not Unique as like Sopno Grocery Store</li>
                </div>
            </div>


        </div>
    );
};

export default Project3;