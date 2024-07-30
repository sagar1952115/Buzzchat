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
        <div className=" top-0 flex justify-between w-full p-4 ">
           <div className='font-extrabold tracking-wider text-4xl text-blue-500 '>BuzzTalk</div>

            <div className="headerRight">
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

const HeaderContainer = styled.div({
    padding: "10px 30px",
    background: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})

const LogoWrapper = styled.div({
    display: "flex",
    alignItems: "center",
    gap: "50px"
})

const Image = styled.img({
    height: "50px"
})

const HeaderText = styled.p({
    fontSize: "27px",
    fontWeight: "700",
    rotate: "-4deg"
})

const HeaderRight = styled.div({
    flexDirection: "column",
    alignItems: "end"
})

const ButtonsGroup = styled.div({
    display: "flex",
    gap: "10px"
})

const Button = styled.button({
    fontSize: "10px",
    color: "white",
    background: "#4A549A",
    border: "none",
    borderRadius: "2px",
    display: "flex",
    gap: "5px",
    alignItems: "center"
})

const SelectButton = styled.button({
    padding: "2px 10px",
    border: "1px solid gray",
    borderRadius: "2px",
    display: "flex",
    alignItems: "center",
    gap: "5px"
})

const LiveUsersWrapper = styled.div({
    marginTop: "5px",
    display: 'flex',
    gap: "5px",
    alignItems: "center"
})

const LiveUsersNumber = styled.p({
    fontSize: "25px",
    color: "#9DB2D7"
})

const LiveUsersText = styled.p({
    color: "#b6d1f0"
})