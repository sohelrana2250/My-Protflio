import React from 'react';

import img1 from '../../Image/img1.jpg'
import img2 from '../../Image/img2.jpg'
import img3 from '../../Image/img3.jpg'
import img4 from '../../Image/img4.jpg'


const MyProject = () => {

    //grid lg:grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1 mt-16'
    return (
        <div className='grid lg:grid-cols-4 gap-6 md:grid-cols-2 sm:grid-cols-1 mt-16'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
                <figure><img src={img1} style={{ width: '400px', height: '300px' }} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Dental service-
                        Zone</h2>
                    <p>Technology: I used technology in project like
                        JavaScript, Node JS, React - Bootstrap ,
                        Firebase, MongoDB and etc and Responsiveness added for mobile or desktop
                        devices</p>


                    <a className='btn btn-outline btn-primary' href="https://b6a11-service-review-cli-b4678.web.app/" alt=''>Web Site Link</a>
                    <a className='btn btn-outline btn-primary' href="https://github.com/sohelrana2250/service-
review-client-side-11.git" alt=''>Project Git-Link</a>
                    <a className='btn btn-outline btn-primary' href="https://github.com/sohelrana2250/service-
review-server-side-11.git" alt=''>Server-Site Git-Link</a>

                </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
                <figure><img src={img2} style={{ width: '400px', height: '300px' }} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Phone-Resale-
                        Zone</h2>
                    <p>Technology: I used technology in this project
                        like JavaScript, Node JS, tailwind CSS , Daisyui
                        Firebase, MongoDB, JWT, HTML , CSS and etc.And Buy and sell second hand used Mobile Phone in
                        online both user accessibility and interface
                        different</p>


                    <a className='btn btn-outline btn-success' href="https://b612-used-products-resale.web.app/" alt=''>Web Site Link</a>
                    <a className='btn btn-outline btn-success' href="https://github.com/sohelrana2250/products-resale-
clients-side-12.git" alt=''>Project Git-Link</a>
                    <a className='btn btn-outline btn-success' href="https://github.com/sohelrana2250/products-resale-
server-side-12.git" alt=''>Server-Site Git-Link</a>

                </div>
            </div>


            <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
                <figure><img src={img3} style={{ width: '400px', height: '300px' }} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">PI Inventory Store</h2>
                    <p>Technology: I used technology in project like
                        Node JS ,Express JS , MongoDB, Security Provider Firebase and JWT Token
                        JWT Token Which is the used Server to Client Commucation Security Provide .JWT One Kind of digital Singtanute
                    </p>


                    <a className='btn btn-outline btn-success' href="https://b612-inventory-store.web.app" alt=''>Web Site Link</a>
                    <a className='btn btn-outline btn-success' href="https://github.com/sohelrana2250/ema-john-simple.git" alt=''>Project Git-Link</a>
                    <a className='btn btn-outline btn-success' href="https://github.com/sohelrana2250/ema-john-simple-Server.git" alt=''>Server-Site Git-Link</a>

                </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
                <figure><img src={img4} style={{ width: '400px', height: '300px' }} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">Ka hoot-Education-
                        Zone</h2>
                    <p>Technology: I used technology in this project
                        like JavaScript, Node JS, tailwind CSS , Daisyui
                        Firebase, MongoDB and etc
                        Responsiveness added for mobile or desktop
                        devices
                        User Accessibility different</p>


                    <a className='btn btn-outline btn-accent' href=": https://learning-platform-client-52212.web.app" alt=''>Web Site Link</a>
                    <a className='btn btn-outline btn-accent' href="https://github.com/sohelrana2250/learning-platform-client-side-
10.git" alt=''>Project Git-Link</a>
                    <a className='btn btn-outline btn-accent' href="https://github.com/sohelrana2250/lerning-platform-server-side-10" alt=''>Server-Site Git-Link</a>

                </div>
            </div>






        </div>
    );
};

export default MyProject;