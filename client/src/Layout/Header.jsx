import React, { useEffect } from 'react'
import OmegleLogo from "../assets/Omegle2.png"
import { FaFacebookF, FaTwitter } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
import { FaSortDown } from "react-icons/fa"
import { useChat } from '../contextApi/ChatContext'
import styled from 'styled-components'

const Header = () => {

    const { onlineUsers, receiver, setIsTyping, setMessage, setReceiver } = useChat()

    useEffect(() => {
        console.log(receiver)
        if (receiver !== undefined && !onlineUsers.find((user) => user.userId === receiver)) {
            setIsTyping(false)
            setMessage("")
            setReceiver("")
        }
    }, [onlineUsers]);

    return (
        <div className="flex   justify-between w-full p-4 ">
           <div className='font-extrabold tracking-wider text-4xl text-blue-500 '>BuzzTalk</div>

            <div className="">
                {/* <ButtonsGroup>
                    <Button style={{ background: "#4A549A" }}><FaFacebookF />
                        Share</Button>
                    <Button style={{ background: "#728EC5" }}><FaTwitter />
                        Tweet</Button>
                    <SelectButton>
                        <FcGoogle />
                        Choose a language
                        <FaSortDown />
                    </SelectButton>
                </ButtonsGroup> */}
                <div className='flex gap-3 items-center'>
                    <div className='font-bold text-3xl text-blue-500'>{onlineUsers.length} +</div>
                    <div className='font-semibold'>Live users</div>
                </div>
            </div>

        </ div>
    )
}

export default Header