import React from 'react';
import { Link } from 'react-router-dom';
import mypic from '../../Image/MyPic.jpg'
const About = () => {


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={mypic} style={{ width: '600px', height: '400px' }} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Ali Mohammad Sohel Rana!</h1>
                        <p className="py-6 text-xl">I am a student of Daffodil International University Computing and Information System. I
                            am 4 th year student in BSC. During the last 3 years I have worked web development
                            and many programming languages . Recently I identified my new interest zone in
                            machine learning but Web developing is my first choice so I am interested in working
                            with this site.
                        </p>
                        <p className='py-6 text-xl'> <b className='font-bold'>Recent Project Information :</b> Recently I am working on my University assignment
                            project . The Project Name is Inventory Store which is the developing technology is
                            Node Js, React Js ,Express Js ,tailwind css, daisy UI ,MongoDB, ImageBB, and
                            Firebase etc.
                        </p>

                        <Link to='/Resume'> <button className="btn btn-primary">My-Resume</button></Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;