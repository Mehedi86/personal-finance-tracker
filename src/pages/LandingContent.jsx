import React from 'react';
import { motion } from 'framer-motion';

const LandingContent = () => {
    return (
        <div>
            {/* <div className='flex justify-center items-center py-6 container mx-auto text-center text-gray-50'>
                <h2 className='text-4xl animate-pulse font-extrabold'>We're building something amazing! Our website is currently under construction</h2>
            </div>
            <div className='container mx-auto mt-32'>
                <div className="w-5/12 text-gray-50 space-y-8">
                    <h2 className="text-[48px] font-semibold leading-tight">
                        Evaluate Your Spending Based on Your Income and Priorities.
                    </h2>
                    <div className='h-[1px] bg-gray-400 my-4'></div>
                    <p className="font-semibold text-lg leading-relaxed">
                        Easily track income and expenses in one place while setting budgets to control spending. Gain insights through interactive charts to make smarter financial decisions. With secure cloud backup and multi-device access, your data stays safe and available anytime.
                    </p>
                </div>
            </div> */}
            <div className='mt-24'>
            <motion.div 
                initial={{ opacity: 0, y: -40 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="text-center space-y-4"
            >
                <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 py-2">
                    We’re Building Something Amazing!
                </h2>
                <p className="text-lg text-gray-300 max-w-lg mx-auto">
                    Our website is under construction, but great things are coming soon.
                </p>
            </motion.div>

            {/* Content Section */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-20 max-w-2xl text-center mx-auto"
            >
                <h2 className="text-5xl font-extrabold leading-tight text-gray-200">
                    Evaluate Your Spending Based on Your Income and Priorities.
                </h2>
                <motion.div 
                    animate={{ scaleX: [0, 1] }} 
                    transition={{ duration: 0.8 }}
                    className="h-[3px] bg-blue-400 rounded-full w-32 mx-auto mt-3"
                />
                <p className="text-lg text-gray-300 mt-4">
                    Easily track income and expenses in one place while setting budgets to control spending. Gain insights through interactive charts to make smarter financial decisions.
                </p>
            </motion.div>
            </div>
        </div>
    );
};

export default LandingContent;




// import React from 'react';
// import { motion } from 'framer-motion';

// const LandingContent = () => {
//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-50 px-6">
//             {/* Hero Section */}
            
//         </div>
//     );
// };

// export default LandingContent;
