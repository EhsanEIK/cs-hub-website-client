import React from 'react';

const Instructors = () => {
    return (
        <div className='mt-40 md:mx-0 mx-3'>
            < h1 className='text-5xl text-center font-bold' > Our Instructors</h1 >
            <div className='divider mt-2 mb-10'></div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                <div className='flex items-center bg-slate-300 border-2 rounded-xl p-5'>
                    <div className="avatar">
                        <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://thumbs.dreamstime.com/b/smart-person-eyewear-man-official-clothes-stands-against-white-background-studio-165962936.jpg" alt='img' />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <p className='text-3xl fonr-bold'>Alex Yohon</p>
                        <p className='text-lg'>Lecturer, Structured Programming Languagee</p>
                        <p>CS Hub</p>
                    </div>
                </div>
                <div className='flex items-center bg-slate-300 border-2 rounded-xl p-5'>
                    <div className="avatar">
                        <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://t4.ftcdn.net/jpg/03/30/25/97/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x.jpg" alt='img' />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <p className='text-3xl fonr-bold'>Maria Sharapova</p>
                        <p className='text-lg'>Lecturer, Object Oriented Programming</p>
                        <p>CS Hub</p>
                    </div>
                </div>
                <div className='flex items-center bg-slate-300 border-2 rounded-xl p-5'>
                    <div className="avatar">
                        <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://st.depositphotos.com/2309453/3449/i/600/depositphotos_34490345-stock-photo-confident-casual-unshaven-young-man.jpg" alt='img' />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <p className='text-3xl fonr-bold'>Majhraul Kabir</p>
                        <p className='text-lg'>Lecturer, Computer Network</p>
                        <p>CS Hub</p>
                    </div>
                </div>
                <div className='flex items-center bg-slate-300 border-2 rounded-xl p-5'>
                    <div className="avatar">
                        <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://media.istockphoto.com/photos/young-handsome-man-with-beard-wearing-casual-sweater-standing-over-picture-id1212702108?k=20&m=1212702108&s=612x612&w=0&h=ZI4gKJi2d1dfi74yTljf4YhulA1nfhD3dcUFGH-NUkY=" alt='img' />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <p className='text-3xl fonr-bold'>Kevin Peterson</p>
                        <p className='text-lg'>Senior Lecturer, Machine Learning</p>
                        <p>CS Hub</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Instructors;