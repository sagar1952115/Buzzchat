import React from 'react'
import styled from 'styled-components'

const HomeMobile = ({ setIsTermsModal }) => {
    return (
        <MobileHome className='mobileHome'>
           Under developement
        </MobileHome>
    )
}

export default HomeMobile

const MobileHome = styled.div({
    marginTop: "16px",
    border: "1px solid #CCC"
})

const VideoDescText = styled.div({
    textAlign: "center",
    lineHeight: "22px",
    padding: "8px 0"
})

const AdultSite = styled.div({
    textAlign: "center",
    lineHeight: "22px",
    padding: "8px 0"
})

const Link = styled.span({
    color: "blue",
    textDecoration: "underline"
})

const ButtonWrapper = styled.div({
    padding: "8px 0",
    display: "flex",
    justifyContent: "center"
})

const Button = styled.div({
    fontSize: "20px",
    color: "white",
    fontWeight: "500",
    padding: "10px 25px",
    border: "1px solid #ECE8E8",
    borderRadius: "4px"
})

const InputLabel = styled.div({
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "5px"
})

const Input = styled.div({
    fontSize: "15px",
    width: "98%",
    padding: "8px 4px",
    border: "1px solid #dddada",
    borderRadius: "5px"
})

const CollegeStudentBox = styled.div({
    padding: "4px",
    marginTop: "10px",
    background: "rgb(238, 238, 238)",
    display: "flex",
    justifyContent: "center",
    border: "1px solid rgb(204, 204, 204)",
    borderRadius: "5px",
    position: "relative"
})

const PlayIcon = styled.p({
    position: "absolute",
    left: "10px",
    top: "0px"
})

const AboutOmegleText = styled.div({
    lineHeight: "22px",
    padding: "10px",
    marginTop: "10px"
})