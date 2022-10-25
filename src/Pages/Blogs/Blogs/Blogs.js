import React from 'react';

const Blogs = () => {
    return (
        <div>
            {/* blog-01 */}
            <div className='bg-slate-200 rounded-lg m-5 p-7'>
                <h1 className='text-2xl font-bold mb-3'>What is cors?</h1>
                <p>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
            </div>
            {/* blog-02 */}
            <div className='bg-slate-200 rounded-lg m-5 p-7'>
                <h1 className='text-2xl font-bold mb-3'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. That is why, I'm using firebase.</p>
                <p>The other options except firebase are:</p>
                <ol className='list-decimal pl-10'>
                    <li>Parse</li>
                    <li>Scalable realtime database (SQL or NoSQL)</li>
                    <li>AWS Amplify</li>
                    <li>Backendless</li>
                    <li>Kuzzle</li>
                    <li>Supabase</li>
                    <li>Appwrite</li>
                    <li>Back4App</li>
                    <li>GraphQL and Rest APIs.</li>
                    <li>Hasura</li>
                </ol>
            </div>
            {/* blog-03 */}
            <div className='bg-slate-200 rounded-lg m-5 p-7'>
                <h1 className='text-2xl font-bold mb-3'>How does the private route work?</h1>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). <br />
                    Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route. So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though.</p>
            </div>
            {/* blog-04 */}
            <div className='bg-slate-200 rounded-lg m-5 p-7'>
                <h1 className='text-2xl font-bold mb-3'>What is Node? How does Node work?</h1>
                <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                <p> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. Node.js basically works on two concept</p>
                <ul className='list-disc pl-10'>
                    <li>Asynchronous</li>
                    <li>Non-blocking I/O</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;