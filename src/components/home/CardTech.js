import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from "../../utils/motion";

export default function CardTech ({ url, index }) {
    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.75 + index * 0.25, 0.75)}
            className='bg-transparent flex justify-center items-center'
        >
            <div className='p-6 bg-white min-w-[200px] min-h-[100px] flex justify-center items-center rounded-3xl shadow-2xl'>
                <img
                    src={url}
                    alt=""
                    className='w-[110px] h-[110px] object-contain'
                />
            </div>
        </motion.div>
    )
}