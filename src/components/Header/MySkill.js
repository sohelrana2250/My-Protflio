import React from 'react';
import { Link } from 'react-router-dom';

const MySkill = () => {
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl text-center font-bold">My Skill</h2>
                    <Link className='btn btn-outline btn-primary' href="" alt=''>JavaScript</Link>
                    <Link className='btn btn-outline btn-success' href="" alt=''>Node JS</Link>
                    <Link className='btn btn-outline btn-primary' href="" alt=''>Express JS</Link>
                    <Link className='btn btn-outline btn-success' href="" alt=''>React JS</Link>
                    <Link className='btn btn-outline btn-primary' href="" alt=''>Mongo DB</Link>
                    <Link className='btn btn-outline btn-success' href="" alt=''>Fire-Base</Link>
                    <Link className='btn btn-outline btn-primary' href="" alt=''>Java </Link>
                    <Link className='btn btn-outline btn-success' href="" alt=''>Spring Boot</Link>
                    <Link className='btn btn-outline btn-primary' href="" alt=''>My-Sql</Link>

                </div>
            </div>

        </div>
    );
};

export default MySkill;