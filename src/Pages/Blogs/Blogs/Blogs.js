import React from 'react';

const Blogs = () => {
    return (
        <div>
            {/* blog-01 */}
            <div className='bg-slate-200 rounded-lg m-5 p-7'>
                <h1 className='text-2xl font-bold mb-3'>What is cors?</h1>
                <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
            </div>
        </div>
    );
};

export default Blogs;