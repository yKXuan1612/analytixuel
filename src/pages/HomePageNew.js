import React, {useCallback, useRef} from "react";
import CardArchi from "../components/home/CardArchi";
import CardFeedback from "../components/home/CardFeedback";
import {Swiper, SwiperSlide} from "swiper/react";
import { Link as LinkScroll } from 'react-scroll';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Pagination, Autoplay, Navigation} from 'swiper/modules';
import CardTech from "../components/home/CardTech";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import CardQuestion from "../components/home/CardQuestion";

import { motion } from 'framer-motion';
import {fadeIn, staggerContainer, textVariant2} from "../utils/motion";
import {archiData, imgTechList, questionsList1, questionsList2} from "../constants/datahome";
import {useViewport} from "../hook/useViewport";

export default function HomePageNew () {
    const viewPort = useViewport();
    // console.log(viewPort)

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <main className='max-w-[1512px] m-auto text-white h-auto mt-5'>
            <section className='h-auto lg:px-20 lg:pb-20 p-2'>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className='grid grid-cols-12 gap-5 overflow-hidden'
                >
                    <motion.div
                        variants={fadeIn('right', 'tween', 0.2, 0.5)}
                        className='lg:col-span-6 col-span-12 pt-10 lg:order-1 order-last'
                    >
                        <div className='w-full h-full flex items-end'>
                            <div>
                                <h1 className='lg:text-6xl text-5xl font-bold mb-4'>
                                    Được <span className='text-[#5E54F3]'>hơn 5000</span> <br/> học viên tin chọn
                                </h1>
                                <p className='leading-relaxed font-thin mb-9'>
                                    Đơn vị đào tạo Kỹ năng Phân tích dữ liệu kinh doanh hàng đầu tại Việt Nam, chúng tôi tự hào mang đến cho bạn những khóa học chất lượng và đội ngũ giảng viên giàu kinh nghiệm trong lĩnh vực này. Với tầm nhìn tiên phong và sự cam kết với chất lượng, chúng tôi tạo ra môi trường học tập đa dạng, tương tác và thú vị để bạn có thể nắm vững những kỹ năng quan trọng trong việc phân tích dữ liệu kinh doanh.
                                </p>
                                <form className='w-full h-auto flex items-center justify-between bg-gradient-to-b from-linear-first-rgba to-linear-second-rgba p-5 rounded-full'>
                                    <input
                                        type="email"
                                        placeholder="Email/ Số điện thoại"
                                        className='w-3/5 h-full bg-white outline-none text-black p-2 rounded-full'
                                    />
                                    <LinkScroll to="contact" spy={true} smooth={true} duration={500}
                                        type='button'
                                        className='uppercase py-2 cursor-pointer px-4 rounded-full bg-white font-semibold text-sm bg-gradient-to-r from-linear-first to-linear-second text-white'
                                    >
                                        Tư vấn ngay
                                    </LinkScroll>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 'tween', 0.2, 0.5)}
                        className='lg:col-span-6 col-span-12 pt-3 flex justify-center items-center order-2'
                    >
                        <img
                            src="/banner1.png"
                            alt=""
                        />
                    </motion.div>
                </motion.div>
            </section>

            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='h-auto lg:p-20 p-2 overflow-hidden'
            >
                <motion.h2
                    variants={textVariant2}
                    initial="hidden"
                    whileInView="show"
                    className='lg:text-6xl text-5xl font-bold lg:pb-9 mb-9 text-center'
                >
                    Thành tựu ấn tượng
                </motion.h2>

                <div className='container my-10 w-full h-auto'>
                    <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-5 lg:px-20 px-2 '>
                        {
                            archiData.map((item, index) => (
                                <CardArchi key={index} index={index} title={item.title} content={item.content} number={item.number} />
                            ))
                        }
                    </div>
                </div>
            </motion.section>

            <section className='h-auto lg:px-20 px-2 py-20'>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 overflow-hidden'
                >
                    <div className='col-span-1 w-full h-full flex flex-col justify-around items-center lg:order-1 order-last'>
                        <motion.div
                            variants={fadeIn('left', 'tween', 0.2, 0.5)}
                            className='grid grid-cols-2 gap-5 '
                        >
                            <div className='col-span-1 flex flex-col justify-around items-center gap-5'>
                                <div className='p-4 rounded-[24px] border-[#F74986] border-[1px] bg-white text-black hover:text-white hover:bg-transparent transition duration-200 ease-in-out'>
                                    <p className='mb-1 text-[40px] font-bold'>
                                        01
                                    </p>
                                    <p className='text-[18px] font-thin'>
                                        Có được kiến thức nền tảng về Data vững chắc: Analytix chú trọng chất lượng đào tạo, cập nhật thường xuyên giúp sinh viên luôn được tiếp cận với những kiến thức mới.
                                    </p>
                                </div>

                                <div className='p-4 rounded-[24px] border-[#F74986] border-[1px] bg-white text-black hover:text-white hover:bg-transparent transition duration-200 ease-in-out'>
                                    <p className='mb-1 text-[40px] font-bold'>
                                        02
                                    </p>
                                    <p className='text-[18px] font-thin'>
                                        Sinh viên sẽ được đào tạo từ cơ bản đến chuyên sâu về Data và Business Intelligence,  70% THỜI LƯỢNG HỌC THỰC HÀNH đáp ứng đúng nhu cầu doanh nghiệp.
                                    </p>
                                </div>
                            </div>

                            <div className='col-span-1 flex flex-col justify-around items-center gap-5'>
                                <div className='p-4 rounded-[24px] border-[#F74986] border-[1px] bg-white text-black hover:text-white hover:bg-transparent transition duration-200 ease-in-out'>
                                    <p className='mb-1 text-[40px] font-bold'>
                                        03
                                    </p>
                                    <p className='text-[18px] font-thin'>
                                        Được cung cấp chứng chỉ sau khi hoàn thành các khóa học.
                                    </p>
                                </div>

                                <div className='p-4 rounded-[24px] border-[#F74986] border-[1px] bg-white text-black hover:text-white hover:bg-transparent transition duration-200 ease-in-out'>
                                    <p className='mb-1 text-[40px] font-bold'>
                                        04
                                    </p>
                                    <p className='text-[18px] font-thin'>
                                        Được học tập và trao đổi thông qua các GIỜ HỌC DOANH NGHIỆP TRỰC TIẾP mà Analytix đã kết nối, giúp sinh viên có cái nhìn thực tế hơn.
                                    </p>
                                </div>

                                <div className='p-4 rounded-[24px] border-[#F74986] border-[1px] bg-white text-black hover:text-white hover:bg-transparent transition duration-200 ease-in-out'>
                                    <p className='mb-1 text-[40px] font-bold'>
                                        05
                                    </p>
                                    <p className='text-[18px] font-thin'>
                                        100% sinh viên được nhà tuyển dụng chào đón.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn('right', 'tween', 0.2, 0.5)}
                        className='col-span-1 w-full h-full order-2'
                    >
                        <div className='w-full h-auto flex justify-center items-center gap-2 font-bold bg-gradient-to-b from-[#F74986] to-[#fff] text-transparent bg-clip-text'>
                            <span className='text-[85px]'>
                                5
                            </span>
                            <p className='text-[30px]'>
                                LỢI ÍCH ĐẮT GIÁ KHI THAM GIA KHÓA HỌC CỦA ANALYTIX
                            </p>
                        </div>
                        <img src="/img.png" alt=""/>
                        <div className='w-full h-auto text-center'>
                            <a
                                href='/course'
                                className='uppercase py-3 px-6 rounded-full bg-white font-semibold text-sm bg-gradient-to-b from-[#F74986] to-[#fff] text-white'
                            >
                                <span>
                                    Khám phá khóa học ngay
                                </span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            <section className='h-auto lg:px-20 px-2 py-20'>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className='grid lg:grid-cols-3 grid-cols-1 gap-10 overflow-hidden'
                >
                    <motion.div
                        variants={fadeIn('left', 'tween', 0.2, 0.5)}
                        className='col-span-1'
                    >
                        <p className='lg:text-[70px] text-[48px] font-bold text-center lg:text-left'>
                            Cảm nhận học viên
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('right', 'tween', 0.2, 0.5)}
                        className='col-span-2'
                    >
                        <div className='w-full h-auto bg-white rounded-3xl text-black p-3 '>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <CardFeedback
                                        name='Nguyễn Thị Hồng'
                                        student='Sinh viên Đại học Kinh tế-Luật'
                                        content='Khóa học rất hay, mình đã học và áp dụng được nhiều kiến thức trong công việc. Cảm ơn Analytix rất nhiều.'
                                        avatar='/avatar.png'
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardFeedback
                                        name='Nguyễn Thị Hồng'
                                        student='Sinh viên Đại học Kinh tế-Luật'
                                        content='Khóa học rất hay, mình đã học và áp dụng được nhiều kiến thức trong công việc. Cảm ơn Analytix rất nhiều.'
                                        avatar='/avatar.png'
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardFeedback
                                        name='Nguyễn Thị Hồng'
                                        student='Sinh viên Đại học Kinh tế-Luật'
                                        content='Khóa học rất hay, mình đã học và áp dụng được nhiều kiến thức trong công việc. Cảm ơn Analytix rất nhiều.'
                                        avatar='/avatar.png'
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='w-full h-auto lg:px-20 px-2 overflow-hidden'
            >
                <motion.div
                    variants={fadeIn('up', 'tween', 0.3, 0.5)}
                    className='my-20 text-white bg-gradient-to-r from-[#5E54F3] from-17% to-[#D743FB] to-103% rounded-3xl'
                >
                    <motion.p
                        variants={fadeIn('down', 'tween', 0.8, 0.2)}
                        className='text-center lg:text-[60px] text-[38px] font-bold'
                    >
                        Công nghệ sử dụng
                    </motion.p>
                    <div className='lg:px-[200px] px-2 py-10 relative'>
                        <Swiper
                            ref={sliderRef}
                            slidesPerView={viewPort.width >= 900 ? 4 : 1}
                            spaceBetween={0}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            // modules={[Pagination]}
                            className="mySwiper"
                        >
                            {imgTechList.map((tech, index) => (
                                <SwiperSlide key={index}>
                                    <CardTech
                                        index={index}
                                        url={tech}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <motion.button
                            variants={fadeIn('center', 'tween', 0.8, 0.2)}
                            type='button'
                            className='absolute top-1/2 lg:left-20 left-1 transform -translate-y-1/2 border-none outline-none bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center text-black text-3xl text-[#5E54F3]'
                            onClick={handlePrev}
                        >
                            <FaAngleLeft
                                color={'#5E54F3'}
                            />
                        </motion.button>
                        <motion.button
                            variants={fadeIn('center', 'tween', 0.8, 0.2)}
                            type='button'
                            className='absolute top-1/2 lg:right-20 right-1 transform -translate-y-1/2 border-none outline-none bg-white rounded-full w-[50px] h-[50px] flex justify-center items-center text-black text-3xl'
                            onClick={handleNext}
                        >
                            <FaAngleRight
                                color={'#5E54F3'}
                            />
                        </motion.button>
                    </div>
                </motion.div>
            </motion.section>

            <section className='h-auto lg:px-20 px-2 py-20 overflow-hidden'>
                <p className='text-center lg:text-[60px] text-[48px] font-bold mb-5'>
                    Câu hỏi thường gặp
                </p>
                <div className='w-full h-auto grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-0'>
                    <div className='col-span-1 '>
                        {questionsList1.map((question, index) => (
                            <CardQuestion
                                key={index}
                                question={question.question}
                                answer={question.answer}
                            />
                        ))}
                    </div>

                    <div className='col-span-1 '>
                        {questionsList2.map((question, index) => (
                            <CardQuestion
                                key={index}
                                question={question.question}
                                answer={question.answer}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}



