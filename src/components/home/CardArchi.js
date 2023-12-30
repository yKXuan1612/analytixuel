import React, {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import {fadeIn} from "../../utils/motion";
import { useInView } from "framer-motion"

export default function CardArchi ({ title, content, index, number }) {

    const [count, setCount] = useState(1);
    const ref = useRef(null)
    const isInView = useInView(ref)
    const targetNumber = number; // Đặt giá trị đích của bạn
    const duration = 2000; // Đặt thời gian tăng từ 1 đến giá trị đích (milliseconds)

    useEffect(() => {
        setCount(1)
        const startTime = Date.now();

        const updateCount = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;

            if (elapsedTime < duration) {
                // Tính toán giá trị tăng dần dựa trên thời gian đã trôi qua
                const nextCount = Math.ceil((elapsedTime / duration) * targetNumber);
                setCount(nextCount);
            } else {
                // Nếu thời gian đã trôi qua vượt quá thời gian đặt ra, đặt giá trị đích cuối cùng
                setCount(targetNumber);
            }
        };

        const interval = setInterval(updateCount, 16); // Cập nhật khoảng mỗi 16 milliseconds
        return () => clearInterval(interval); // Clear interval khi component unmount
    }, [duration, targetNumber, isInView]);

    return (
        <motion.div
            ref={ref}
            variants={fadeIn('right', 'spring', index * 0.25, 0.75)}
            className='col-span-1 w-full h-auto p-4 bg-white rounded-2xl custom-shadow'
        >
            <p className='lg:text-5xl text-3xl font-bold text-[#5E54F3] mb-3'>
                {title}{count}
            </p>
            <p className='lg:text-3xl text-xl text-black mb-4'>
                {content}
            </p>
        </motion.div>
    )
}