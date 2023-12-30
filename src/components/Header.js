import styled from '@emotion/styled'
import tw from 'twin.macro'
import {Link, useLocation} from "react-router-dom";
import Logo from "./Logo";
import {LABEL, PATH} from "../constants/paths";
import classnames from "classnames";
import Cart from "./Cart";
import {useState, Fragment, useEffect} from "react";
import {getUserData, useAuth} from "../utils/auth";
import {PiUserCircleLight} from "react-icons/pi";
import {
    AiOutlineCreditCard,
    AiOutlineDashboard,
    AiOutlineExport,
    AiOutlineLayout,
    AiOutlineSetting
} from "react-icons/ai";
import {IoIosArrowDown, IoIosLogOut} from "react-icons/io";
import {Menu, Transition} from "@headlessui/react";
import { useDispatch, useSelector } from 'react-redux';
import cartReducer from "../redux/cartReducer";
import { IoSchoolOutline } from "react-icons/io5";
import {getCourseCategory, getCourses, getDocument, getDocumentCategory} from "../apis/api";
import {getQueryVariable} from "../utils/getQuery";
import {toast} from "react-toastify";
import {toastConfig} from "../config/toastConfig";
import Loading from "./Loading";
import { Element } from 'react-scroll';

function Header() {
    const [user, setUser] = useState(getUserData())
    const [document, setDocument] = useState(null)
    const cart = useSelector(state => state.cartReducer)
    const  { logout }  = useAuth();
    const [courseCategory, setCourseCategory] = useState(null)
    const [documentCategory, setDocumentCategory] = useState(null)

    const location = useLocation()

    useEffect(() => {
        getCourseCategory().then((res) => {
            if (!res.success) return toast.error(res.message, toastConfig)
            setCourseCategory(res.data)
        }).catch((err) => {
            console.log(err)
            setCourseCategory([])
        })
        getDocumentCategory().then((res) => {
            if (!res.success) return toast.error(res.message, toastConfig)
            setDocumentCategory(res.data)
        }).catch((err) => {
            console.log(err)
            setDocumentCategory([])
        })
    }, [])


    const handleLogout = () => {
        logout();
        setUser(null);
    }

    return (
        <Element name="header" className="element">
            <HeaderSection>
              {/* Desktop */}
              <div className='container hidden md:block mx-auto max-w-[1280px]'>
                  <div className='md:grid flex grid-cols-12 gap-2'>
                      <div className='col-span-2 flex'>
                          <Link
                              to={PATH.HOME}
                              aria-label='home'
                              className='hidden lg:inline-flex rounded active:outline-dashed'
                           >
                              <Logo className='text-gray-800 h-10 ' />
                          </Link>
                      </div>

                      <div className='col-span-8 outline lg:block hidden'>
                          <nav className='outline h-full flex items-center justify-center'>
                              <NavButton href={PATH.HOME}>
                                  {LABEL.HOME}
                              </NavButton>

                              <Menu as='div' className='relative inline-block text-left w-fit text-white'>
                                  <Menu.Button className='w-full flex justify-center items-center'>
                                      <MenuButtonDiv className={classnames({ active: PATH.COURSE.replace(/\//g, '') === location.pathname.split('/')[1] && location.pathname.split('/')[1] !== 'login' })}
                                      >
                                          {LABEL.COURSE}
                                          <IoIosArrowDown className='mt-1 ml-1' />
                                      </MenuButtonDiv>
                                  </Menu.Button>
                                  <Transition
                                      as={Fragment}
                                      enter='transition ease-out duration-100'
                                      enterFrom='transform opacity-0 scale-95'
                                      enterTo='transform opacity-100 scale-100'
                                      leave='transition ease-in duration-75'
                                      leaveFrom='transform opacity-100 scale-100'
                                      leaveTo='transform opacity-0 scale-95'
                                  >
                                      <Menu.Items>
                                          <div className='absolute p-2 right-0 w-56 mt-1 origin-top-right bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                              <Menu.Item>
                                                  {({ active }) => (
                                                      <Link
                                                          to={PATH.COURSE}
                                                          className={`${
                                                              active ? 'bg-gray-900' : 'text-gray-900'
                                                          } group flex items-center w-full px-3 py-2 text-sm`}
                                                      >
                                                          <span className='ml-2'> Tất cả </span>
                                                      </Link>
                                                  )}
                                              </Menu.Item>
                                              {
                                                  courseCategory && courseCategory.map((cate) => (
                                                      <Menu.Item key={cate.name}>
                                                          {({ active }) => (
                                                              <Link
                                                                  to={PATH.COURSE + '?category=' + cate.slug}
                                                                  className={`${
                                                                      active ? 'bg-gray-900' : 'text-gray-900'
                                                                  } group flex items-center w-full px-3 py-2 text-sm`}
                                                              >
                                                                  <span className='ml-2'> {cate.name} </span>
                                                              </Link>
                                                          )}
                                                      </Menu.Item>
                                                  ))
                                              }

                                          </div>
                                      </Menu.Items>
                                  </Transition>
                              </Menu>

                              <Menu as='div' className='relative inline-block text-left w-fit text-white'>
                                  <Menu.Button className='w-full flex justify-center items-center'>
                                      <MenuButtonDiv className={classnames({ active: PATH.DOCUMENT.replace(/\//g, '') === location.pathname.split('/')[1] && location.pathname.split('/')[1] !== 'login' })}
                                      >
                                          {LABEL.DOCUMENT}
                                          <IoIosArrowDown className='mt-1 ml-1' />
                                      </MenuButtonDiv>
                                  </Menu.Button>
                                  <Transition
                                      as={Fragment}
                                      enter='transition ease-out duration-100'
                                      enterFrom='transform opacity-0 scale-95'
                                      enterTo='transform opacity-100 scale-100'
                                      leave='transition ease-in duration-75'
                                      leaveFrom='transform opacity-100 scale-100'
                                      leaveTo='transform opacity-0 scale-95'
                                  >
                                      <Menu.Items>
                                          <div className='absolute p-2 right-0 w-56 mt-1 origin-top-right bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                              <Menu.Item>
                                                  {({ active }) => (
                                                      <Link
                                                          to={PATH.DOCUMENT}
                                                          className={`${
                                                              active ? 'bg-gray-900' : 'text-gray-900'
                                                          } group flex items-center w-full px-3 py-2 text-sm`}
                                                      >
                                                          <span className='ml-2'> Tất cả </span>
                                                      </Link>
                                                  )}
                                              </Menu.Item>
                                              {
                                                  documentCategory && documentCategory.map((cate) => (
                                                      <Menu.Item key={cate.name}>
                                                          {({ active }) => (
                                                              <Link
                                                                  to={PATH.DOCUMENT + '?category=' + cate.slug}
                                                                  className={`${
                                                                      active ? 'bg-gray-900' : 'text-gray-900'
                                                                  } group flex items-center w-full px-3 py-2 text-sm`}
                                                              >
                                                                  <span className='ml-2'> {cate.name} </span>
                                                              </Link>
                                                          )}
                                                      </Menu.Item>
                                                  ))
                                              }

                                          </div>
                                      </Menu.Items>
                                  </Transition>
                              </Menu>

                              <NavButton href={PATH.TEACHER}>
                                  {LABEL.TEACHER}
                              </NavButton>

                              <NavButton href={PATH.BLOG}>
                                  {LABEL.BLOG}
                              </NavButton>




                          </nav>
                      </div>

                      <div className='col-span-2 ml-auto md:ml-0 flex items-center justify-end gap-5'>
                          <Link to={PATH.CART}>
                              <Cart numItemsInCart={cart.length} />
                          </Link>
                          {
                                user ?  (
                                    <Menu as='div' className='relative inline-block text-left w-fit text-white'>
                                        <div className='w-full h-full flex items-center'>
                                            <Menu.Button className='w-full flex justify-center items-center'>
                                                <PiUserCircleLight className='w-7 h-7 mx-1' />
                                                <p className='max-w-[70%] mr-1 overflow-hidden text-base overflow-ellipsis h-full text-start flex items-center'>{user.username}</p>
                                                <IoIosArrowDown className='w-4 h-4' />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter='transition ease-out duration-100'
                                            enterFrom='transform opacity-0 scale-95'
                                            enterTo='transform opacity-100 scale-100'
                                            leave='transition ease-in duration-75'
                                            leaveFrom='transform opacity-100 scale-100'
                                            leaveTo='transform opacity-0 scale-95'
                                        >
                                            <Menu.Items>
                                                <div className='absolute p-2 right-0 w-56 mt-1 origin-top-right bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={PATH.PROFILE}
                                                                className={`${
                                                                    active ? 'bg-gray-900' : 'text-gray-900'
                                                                } group flex items-center w-full px-3 py-2 text-sm`}
                                                            >
                                                                <PiUserCircleLight className='w-5 h-5' />
                                                                <span className='ml-2'>Thông tin cá nhân </span>
                                                            </Link>
                                                        )}
                                                    </Menu.Item>

                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to={PATH.MY_COURSE_LEARNING}
                                                                className={`${
                                                                    active ? 'bg-gray-900' : 'text-gray-900'
                                                                } group flex items-center w-full px-3 py-2 text-sm`}
                                                            >
                                                                <IoSchoolOutline className='w-5 h-5' />
                                                                <span className='ml-2'> Quá trình học </span>
                                                            </Link>
                                                        )}
                                                    </Menu.Item>

                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                onClick={handleLogout}
                                                                className={`${
                                                                    active ? 'bg-gray-900' : 'text-gray-900'
                                                                } group flex items-center w-full px-3 py-2 text-sm hover:bg-red-500`}
                                                            >
                                                                <IoIosLogOut className='w-5 h-5' />
                                                                <span className='ml-2'>Đăng xuất</span>
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                ) : (
                                    <nav className='items-center w-fit'>
                                        <div className='bg-secondary'>
                                            <NavButton href='/login/'>
                                                {LABEL.LOGIN}
                                            </NavButton>
                                        </div>
                                    </nav>
                                )
                          }
                      </div>
                  </div>
              </div>
                {/* Mobile */}
                <div className='lg:hidden'>
                    <Menu>
                        <div className='flex py-1 items-center justify-between'>
                            <Link
                                to='/'
                                className='rounded inline-flex active:outline-dashed'
                            >
                                <Logo className='text-gray-800 h-10 ' />
                            </Link>
                            {
                                 !user
                                        ? <nav className='lg:hidden items-center flex justify-end ml-auto'>
                                            <div className='bg-secondary border-black border-2 font-semibold active:font-semibold active:outline-dashed'>
                                                <NavButton href='/login/'>
                                                    {LABEL.LOGIN}
                                                </NavButton>
                                            </div>
                                         <Menu as='div' className='relative inline-block text-left w-full'>
                                             <div className='w-fit ml-auto h-full flex gap-3 justify-end items-center'>
                                                 <Link to={PATH.CART}>
                                                     <Cart numItemsInCart={cart.length} />
                                                 </Link>
                                                 <Menu.Button className='w-fit flex justify-center text-white items-center'>
                                                     <p className='max-w-[70%] mr-1 overflow-hidden text-base overflow-ellipsis h-full text-start flex items-center'>Menu</p>
                                                     <IoIosArrowDown className='w-4 h-4' />
                                                 </Menu.Button>
                                             </div>
                                             <Transition
                                                 as={Fragment}
                                                 enter='transition ease-out duration-100'
                                                 enterFrom='transform opacity-0 scale-95'
                                                 enterTo='transform opacity-100 scale-100'
                                                 leave='transition ease-in duration-75'
                                                 leaveFrom='transform opacity-100 scale-100'
                                                 leaveTo='transform opacity-0 scale-95'
                                             >
                                                 <Menu.Items>
                                                     <div className='absolute p-2 right-0 w-64 mt-1 origin-top-right bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                                         <Menu.Item>
                                                             {({ active }) => (
                                                                 <NavButton href={PATH.COURSE}>
                                                                     {LABEL.COURSE}
                                                                 </NavButton>
                                                             )}
                                                         </Menu.Item>
                                                         <Menu.Item>
                                                             {({ active }) => (
                                                                 <NavButton href={PATH.DOCUMENT}>
                                                                     {LABEL.DOCUMENT}
                                                                 </NavButton>
                                                             )}
                                                         </Menu.Item>

                                                         <Menu.Item>
                                                             {({ active }) => (
                                                                 <NavButton href={PATH.TEACHER}>
                                                                     {LABEL.TEACHER}
                                                                 </NavButton>
                                                             )}
                                                         </Menu.Item>
                                                         <Menu.Item>
                                                             {({ active }) => (
                                                                 <NavButton href={PATH.BLOG}>
                                                                     {LABEL.BLOG}
                                                                 </NavButton>
                                                             )}
                                                         </Menu.Item>
                                                         <Menu.Item>
                                                             {({ active }) => (
                                                                 <NavButton href={PATH.PROFILE}>
                                                                     {LABEL.PROFILE}
                                                                 </NavButton>
                                                             )}
                                                         </Menu.Item>

                                                     </div>
                                                 </Menu.Items>
                                             </Transition>
                                         </Menu>
                                        </nav>
                                        : <div className='lg:hidden gap-2 lg:max-w-[25%] flex'>
                                            <Menu as='div' className='relative inline-block text-left w-full'>
                                                <div className='w-full h-full flex gap-1 items-center'>
                                                    <Link to={PATH.CART}>
                                                        <Cart numItemsInCart={cart.length} />
                                                    </Link>
                                                    <Menu.Button className='w-full flex justify-center text-white items-center'>
                                                        <PiUserCircleLight className='w-7 h-7 mx-1' />
                                                        <p className='max-w-[70%] mr-1 overflow-hidden text-base overflow-ellipsis h-full text-start flex items-center'>{user.username}</p>
                                                        <IoIosArrowDown className='w-4 h-4' />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter='transition ease-out duration-100'
                                                    enterFrom='transform opacity-0 scale-95'
                                                    enterTo='transform opacity-100 scale-100'
                                                    leave='transition ease-in duration-75'
                                                    leaveFrom='transform opacity-100 scale-100'
                                                    leaveTo='transform opacity-0 scale-95'
                                                >
                                                    <Menu.Items>
                                                        <div className='absolute p-2 right-0 w-64 mt-1 origin-top-right bg-white divide-y divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <NavButton href={PATH.COURSE}>
                                                                        {LABEL.COURSE}
                                                                    </NavButton>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <NavButton href={PATH.DOCUMENT}>
                                                                        {LABEL.DOCUMENT}
                                                                    </NavButton>
                                                                )}
                                                            </Menu.Item>

                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <NavButton href={PATH.TEACHER}>
                                                                        {LABEL.TEACHER}
                                                                    </NavButton>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <NavButton href={PATH.BLOG}>
                                                                        {LABEL.BLOG}
                                                                    </NavButton>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <NavButton href={PATH.PROFILE}>
                                                                        {LABEL.PROFILE}
                                                                    </NavButton>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        onClick={handleLogout}
                                                                        className={`${
                                                                            active ? 'bg-gray-900' : 'text-gray-900'
                                                                        } group flex items-center w-full px-3 py-2 text-sm hover:bg-red-500`}
                                                                    >
                                                                        <span className='ml-2'>Đăng xuất</span>
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                            }
                        </div>

                        <Menu.Items className='flex flex-col bg-gray-200'>
                            <Menu.Item>
                                {({ active }) => (
                                    <NavButton href='/sang-tac/'>
                                        Sáng tác
                                    </NavButton>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <NavButton href='/thao-luan/'>
                                        Thảo luận
                                    </NavButton>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <NavButton href='/gioi-thieu/'>
                                        Giới thiệu
                                    </NavButton>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <NavButton href='/danh-sach/'>
                                        Danh sách truyện
                                    </NavButton>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
            </HeaderSection>
        </Element>
  );
}

export default Header;

const HeaderSection = styled.div`
  ${tw`
    w-full
    p-2
    sticky
    bg-primary
    z-[999999]
  `}
`

const MenuButton = styled(Link)`
  color: #ffffff;
  ${tw`
    px-4
    py-1
    md:inline-flex
    rounded
    hover:underline
    text-base
    md:text-white
    text-gray-800
    block
  `}
  &.active {
    ${tw`
      font-semibold
      underline
      text-secondary
    `}
  }
`

const MenuButtonDiv = styled.div`
  color: #ffffff;
  ${tw`
    px-4
    py-1
    inline-flex
    rounded
    hover:underline
    text-base
    items-center
    
  `}
  &.active {
    ${tw`
      font-semibold
      underline
      text-secondary
    `}
  }
`

const NavButton = ({ href, children, ...otherProps }) => {
    const location = useLocation()
    return (
        <MenuButton
            to={href}
            className={classnames({ active: href.replace(/\//g, '') === location.pathname.split('/')[1] && location.pathname.split('/')[1] !== 'login' })}
            {...otherProps}
        >
            {children}
        </MenuButton>
    )
}