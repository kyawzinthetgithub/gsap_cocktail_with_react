import React from 'react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div className='flex-center h-[100vh]'>
            <h1 className='text-indigo-300'>Hello  GSAP with React</h1>
        </div>
    )
}

export default App;