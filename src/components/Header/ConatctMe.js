import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ConatctMe = () => {

    const notify = () => toast('Successfully-Send the Email');

    return (
        <>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <form action="https://formspree.io/f/xwkzgaqg" method="POST" style={{ width: '600px', height: '600px' }} className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name="message" style={{ height: '250px' }} className="textarea textarea-success" placeholder="Discription"></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button onClick={notify} className="btn btn-primary">Submit</button>
                                <Toaster />
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </>
    );
};

export default ConatctMe;