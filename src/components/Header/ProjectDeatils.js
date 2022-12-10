import React from 'react';
import MySkill from './MySkill';



import { Link } from 'react-router-dom';
const ProjectDeatils = () => {



    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://cdn-images.zety.com/pages/how_to_write_web_developer_resume.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div >
                            <h4>Hi, My name is</h4>
                            <h1 className="mb-5 text-5xl font-bold">Ali Mohammad Sohel Rana</h1>
                            <h1 className="mb-5 text-4xl font-bold">I build things for the web</h1>
                            <p className="mb-5">I am web developer.. <br /> a
                                With Front-end development, web content development, client-side/server-side scripting, in a wide sense, refers to all the actions, updates, and operations required to create, maintain, and administer a website in order to assure its optimal functionality, user experience, and speed.</p>

                            <Link to='/Resume'><button className='btn btn-outline btn-error'>My-Resume</button></Link>



                        </div>



                        <div className=''>

                            <MySkill></MySkill>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProjectDeatils;