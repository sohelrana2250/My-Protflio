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


                            <h4 className='mb-5 text-3xl font-bold'>Hello World! </h4>
                            <h1 className="mb-5 text-5xl font-bold">Ali Mohammad Sohel Rana</h1>
                            <h1 className="mb-5 text-4xl font-bold">  <b>MERN</b> Stack  Web Developer</h1>
                            <p className="mb-5 text-xl">Web Developer . From choreography on a stage to lines JavaScript code on a web page, I love combining the worlds of logic and creative design to make eye-catching, accessible, and user- friendly websites and applications.

                                Technology leads, society follows. The move towards increasing inclusivity and diversity in the industry through representation is of importance to me. I'm excited to make the leap and continue refining my skills</p>

                            <Link to='/Resume'><button className='btn btn-outline btn-success'>My-Resume</button></Link>



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