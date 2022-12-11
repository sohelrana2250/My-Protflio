import React from 'react';
import { Link } from 'react-router-dom';

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
                </div>

                <Link to='/details1'>  <button className="btn btn-outline btn-primary">Project Deatis</button></Link>
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



                </div>

                <Link to='/details2'>  <button className="btn btn-outline btn-primary">Project Deatis</button></Link>
            </div>


            <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
                <figure><img src={img3} style={{ width: '400px', height: '300px' }} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">PI Inventory Store</h2>
                    <p>Technology: I used technology in project like
                        Node JS ,Express JS , MongoDB, Security Provider Firebase and JWT Token
                        JWT Token Which is the used Server to Client Commucation Security Provide .JWT One Kind of digital Singtanute
                    </p>



                </div>
                <Link to='/details3'>  <button className="btn btn-outline btn-primary">Project Deatis</button></Link>
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



                </div>
                <Link to='/details4'>  <button className="btn btn-outline btn-primary">Project Deatis</button></Link>
            </div>






        </div>
    );
};

export default MyProject;