import React from 'react';
import image4 from '../../Image/image4.PNG'
import image5 from '../../Image/image5.PNG'
import image6 from '../../Image/image6.PNG'

const Project2 = () => {
    return (
        <div>
            <div>
                <div className='grid lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-1 mt-10 m-3'>

                    <div className="card w-110 bg-base-100 shadow-xl">
                        <figure><img src={image4} style={{ width: '650px', height: '400px' }} alt="Shoes" /></figure>
                    </div>
                    <div className="card w-110 bg-base-100 shadow-xl">
                        <figure><img src={image5} style={{ width: '650px', height: '400px' }} alt="Shoes" /></figure>

                    </div>


                    <div className="card w-110 bg-base-100 shadow-xl">
                        <figure><img src={image6} style={{ width: '650px', height: '400px' }} alt="Shoes" /></figure>
                    </div>


                </div>

                <div className="card card-side bg-base-100 shadow-xl m-8">

                    <div className="card-body m-5">

                        <a className='btn btn-outline btn-success' href="https://b612-used-products-resale.web.app/" alt=''>Web Site Link</a>
                        <a className='btn btn-outline btn-success' href="https://github.com/sohelrana2250/products-resale-
clients-side-12.git" alt=''>Project Git-Link</a>
                        <a className='btn btn-outline btn-success' href="https://github.com/sohelrana2250/products-resale-
server-side-12.git" alt=''>Server-Site Git-Link</a>
                    </div>

                    <div className="card-body m-5">
                        <li> first of all i have to develop my server site</li>
                        <li>Then I was development by server side with node js.</li>
                        <li>Then I was used my web site JWT Token ......which is the used secure taka provide client site to server site.</li>
                        <li>mongo DB all data handel client site to server site with node js</li> .
                        <li>CRUD Function All task run by server site then server side data provided client site.
                        </li>

                        <li>  Phone-Resale-Zone font-end site i have to used daisyui and tallwind css</li>

                        <li>My Web side developing part is javaScript, express js with server create,React Js font end and Some MOst of the time I have to used daisyui and tallwind css
                        </li>
                        <li>Firebase Authengation with logain page and Register page 2 typs of login process exist i) craete User ii) Login with-Google</li>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Project2;