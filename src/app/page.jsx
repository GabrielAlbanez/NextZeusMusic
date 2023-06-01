"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from './components/Header';
import Main from './components/Main';
import { RenderContextProvider } from './context/Render';

export default function Home() {
  return (
    <>
      <RenderContextProvider>
        <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }}>
          <Header />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} transition={{ duration: 0.5 }}>
          <Main />
        </motion.div>
      </RenderContextProvider>
    </>
  );
}