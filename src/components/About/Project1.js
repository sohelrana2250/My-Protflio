import React from 'react';
import image1 from '../../Image/dental1.PNG';
import image2 from '../../Image/dental2.PNG';
import image3 from '../../Image/dental3.PNG'
const Project1 = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1 mt-10 m-3'>

                <div className="card w-110 bg-base-100 shadow-xl">
                    <figure><img src={image1} style={{ width: '650px', height: '400px' }} alt="Shoes" /></figure>
                </div>
                <div className="card w-110 bg-base-100 shadow-xl">
                    <figure><img src={image2} style={{ width: '650px', height: '400px' }} alt="Shoes" /></figure>

                </div>


                <div className="card w-110 bg-base-100 shadow-xl">
                    <figure><img src={image3} style={{ width: '650px', height: '400px' }} alt="Shoes" /></figure>
                </div>


            </div>

            <div className="card card-side bg-base-100 shadow-xl m-8">

                <div className="card-body m-5">
                    <a className='btn btn-outline btn-primary' href="https://b6a11-service-review-cli-b4678.web.app/" alt=''>Web Site Link</a>
                    <a className='btn btn-outline btn-primary' href="https://github.com/sohelrana2250/service-
review-client-side-11.git" alt=''>Project Git-Link</a>
                    <a className='btn btn-outline btn-primary' href="https://github.com/sohelrana2250/service-
review-server-side-11.git" alt=''>Server-Site Git-Link</a>
                </div>

                <div className="card-body m-5">
                    <li>first of all i have to develop my server site.</li>
                    <li>Then I was development by server side with node js.</li>
                    <li>Then I was used my web site JWT Token ......which is the used secure taka provide client site to server site</li>





                    <li> Firebase Authengation with logain page and Register page  2 typs of login process exist i) craete User ii) Login with-Google
                    </li>
                    <li>
                        Enviroment variable used my web site ..... with firebase security provide.</li>
                    <li>private Router used All-Server data access point ....... if Course details need you will login first......... premimun access but private .</li>

                </div>
            </div>


        </div>
    );
};

export default Project1;