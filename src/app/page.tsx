'use client';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import { motion } from "framer-motion"

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className='mt-4 w-8/12 mx-auto'>
      {/* <motion.div
        className='bg-black w-32 h-32'
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        }}
      /> */}
      <p className=''>{open ? 'Show' : 'Not shown'}</p>
      <button
        onClick={() => setOpen(!open)}
        className='bg-slate-900 text-white px-4 py-2 rounded-md mb-4 active:scale-75 transition-all duration-75'
      >
        Show
      </button>

      <CSSTransition
        in={open}
        timeout={200}
        // unmountOnExit
        classNames={{
          enterActive: 'animate-[popIn_200ms_forwards]',
          exitActive: 'animate-[popOut_200ms_forwards]',
          exitDone: 'scale-80 opacity-0'
          // enterDone: 'animate-[popIn_500ms]',
          // exit: 'opacity-100',
          // exitActive: '!opacity-0 transition duration-500',
          // exitDone: 'opacity-0',
        }}
      >
        <div className='bg-lime-200 rounded-md overflow-hidden max-w-xl'>
          <div className='bg-emerald-400 px-8 py-2'>
            <p className='text-emerald-800 font-bold text-2xl'>
              This is hidden
            </p>
          </div>
          <div className='px-8 pt-2 pb-8'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              labore id reprehenderit iste non accusamus sint in dicta
              perferendis numquam tenetur vero odit delectus, modi expedita
              suscipit nemo quos, a aspernatur distinctio! Odit architecto
              maiores illo officia, dolores ad. Illo?
            </p>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}
