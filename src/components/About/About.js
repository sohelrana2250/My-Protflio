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
                        <p className="py-6 text-xl">My Name is A M Sohel Rana. Nick name sohel. I am from Thakurgaon .  Solved the Physics,I am interested  Mathematics,programming problem Solving, web developing ,App developint . I am interested in computer programming, Web developing , Software developing. I would like Cricket,Football. My favorite player (L M 10). I dislike speaking will of hypocrisy..</p>

                        <Link to='/Resume'> <button className="btn btn-primary">My-Resume</button></Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;