import React from 'react';
import image10 from '../../Image/image10.PNG';
import image11 from '../../Image/image11.PNG';
import image12 from '../../Image/image12.PNG'

const Project4 = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1 mt-10 m-3'>

                <div className="card w-110 bg-base-100 shadow-xl">
                    <figure><img src={image10} style={{ width: '650px', height: '400px' }} alt="Shoes" /></figure>
                </div>
                <div className="card w-110 bg-base-100 shadow-xl">
                    <figure><img src={image12} style={{ width: '650px', height: '400px' }} alt="Shoes" /></figure>

                </div>


                <div className="card w-110 bg-base-100 shadow-xl">
                    <figure><img src={image11} style={{ width: '650px', height: '400px' }} alt="Shoes" /></figure>
                </div>


            </div>

            <div className="card card-side bg-base-100 shadow-xl m-8">

                <div className="card-body m-5">

                    <a className='btn btn-outline btn-accent' href=" https://learning-platform-client-52212.web.app" alt=''>Web Site Link</a>
                    <a className='btn btn-outline btn-accent' href="https://github.com/sohelrana2250/learning-platform-client-side-
10.git" alt=''>Project Git-Link</a>
                    <a className='btn btn-outline btn-accent' href="https://github.com/sohelrana2250/lerning-platform-server-side-10" alt=''>Server-Site Git-Link</a>

                </div>

                <div className="card-body m-5">

                    <li>   My Weeb side developing part is javaScript, express js with server create,React Js font end and Some HTML AND CSSS </li>

                    <li>    My Weeb side developing part is javaScript, express js with server create,React Js font end and Some HTML AND CSSS
                        <li>Enviroment variable used my web site ..... with fire base security provide</li>
                        <li>.... MOst of the time I have to used React Bootstarp

                            Registration page i was used my side Email Authentgation and error display and etc.</li>
                    </li>
                    <li>private Router used Courses deatis data access point ....... if Course details need you will login first......... premimun access but private</li>

                </div>
            </div>


        </div>
    );
};

export default Project4;