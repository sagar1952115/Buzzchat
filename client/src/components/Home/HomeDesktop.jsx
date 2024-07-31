import React from 'react'
import styled from 'styled-components'
import usaFlag from "../../assets/usaFlag.jpg";

const HomeDesktop = ({ setIsTermsModal,navigateToChat }) => {
    return (
      <div className="w-full p-5 rounded-lg shadow-lg max-w-[1000px] h-max bg-white ">
        <div className="font-bold text-center">
          You don't need an app to use BuzzTalk on your phone or tablet! The web
          site works great on mobile.
        </div>
        <div className="w-full flex items-center justify-center py-5">
          <img
            className="w-48 h-32"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>

        <div className='flex flex-col gap-5 lg:px-10'>
          <div>
            BuzzTalk is a fantastic platform to connect with new friends. When
            you use BuzzTalk, we randomly pair you with someone for a one-on-one
            chat experience. To prioritize your safety, all chats are anonymous
            unless you choose to reveal your identity (though we don't recommend
            it), and you have the freedom to end a conversation whenever you
            wish. Please note that while BuzzTalk fosters friendly connections,
            it's important to be cautious, as some individuals may not have good
            intentions.
          </div>
          <div>
            If you'd like, you can specify your interests, and BuzzTalk will try
            to match you with someone who shares similar hobbies and passions.
            This enhances your chances of meeting like-minded individuals and
            having meaningful conversations. Happy chatting on BuzzTalk!
          </div>
          <div>
            By using Omegle, you accept the terms at the bottom.You must be 18 +
            or 13 + with parental permission.
          </div>
        </div>

        <div className='max-w-[20rem] bg-blue-200 justify-center my-10 items-center flex flex-col gap-3 rounded-lg mx-auto p-4'>
          <div className='font-bold text-2xl text-center'>
            Video is monitored.Keep it clean!
          </div>
          <div className='flex'>
            <div className='font-bold '>18+:</div>
            <div className='underline text-blue-600'>{`(Adult) (Unmoderated Section)`}</div>
          </div>
        </div>

        <HomeBottom>
          {/* <div>
            <InputLabel>What do you wanna talk about?</InputLabel>
            <Input
              type="text"
              placeholder="Add your interests(optional)"
              disabled
            />
          </div> */}

          <div className='flex w-full flex-col gap-3 items-center justify-center'>
            <div className='font-bold tracking-wider text-xl'>Start Chating:</div>
            <div>
              <button className="bg-blue-500 px-10 rounded-lg p-2 text-white font-bold tracking-wider" onClick={navigateToChat}>
                Text
              </button>
              {/* <p>or</p>
              <Button className="videoBtn" disabled={true}>
                Video
              </Button> */}
            </div>
          </div>
        </HomeBottom>

        {/* <CollegeStudentBox>
          <PlayIcon>▶️</PlayIcon>
          <p>
            <strong>College student</strong> chat
          </p>
        </CollegeStudentBox> */}
      </div>
    );
}

export default HomeDesktop

const DesktopHome = styled.div({
    width: "720px",
    padding: "10px",
    margin: "15px auto",
    border: "1px solid #CCC",
    borderRadius: "10px",
    overflow: "hidden"
})


const NoAppNeedText = styled.p({
    fontSize: "14px",
    textAlign: "center",
    fontWeight: "600"
})

const ImageWrapper = styled.div({
    display: "flex",
    justifyContent: "center"
})

const Image = styled.img({
    height: "170px",
    width: "350px",
    margin: "20px 0",
    background: "rgba(0, 0, 1, 0.01)",
    objectFit: "cover"
})

const AboutOmegleText = styled.p({
    fontSize: "16px",
    lineHeight: "24px"
})

const SameInteretsText = styled.p({
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "10px"
})

const AgeLimitText = styled.p({
    fontSize: "11px",
    textAlign: "center",
    fontWeight: "500",
    marginTop: "15px"
})

const VideoMonitoringBox = styled.div({
    width: "fit-content",
    padding: "10px 40px",
    margin: "20px auto",
    background: "#BFDEFF",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px"
})

const VideoMonitoringText = styled.p({
    fontSize: "24px",
    fontWeight: "600"
})

const UnmoderatedSection = styled.div({
    display: "flex",
    gap: "10px"
})

const AgeText = styled.strong({
    fontSize: "12px"
})

const UnmoderatedSectionText = styled.p({
    color: "blue",
    fontSize: "12px",
    textDecoration: "underline"
})

const HomeBottom = styled.div({
    marginBottom: "10px",
    display: 'flex',
    justifyContent: "space-between"
})

const InputLabel = styled.div({
    marginBottom: "5px",
    textAlign: "center",
    fontSize: "18px"
})

const Input = styled.input({
    textAlign: "center",
    fontSize: "19px",
    padding: "14px",
    width: "330px",
    border: "1px solid #CCC",
    borderRadius: "2px",
    cursor: "not-allowed"
})

const ButtonsLabel = styled.p({
    marginBottom: "5px",
    textAlign: "center",
    fontSize: "18px"
})

const ButtonsWrapper = styled.div({
    display: "flex",
    gap: "10px",
    alignItems: "center"
})

const Button = styled.button({
    fontSize: "20px",
    color: "white",
    fontWeight: "500",
    width: "120px",
    padding: "14px",
    border: "none",
    borderRadius: "4px"
})

const CollegeStudentBox = styled.div({
    padding: "8px",
    width: "330px",
    background: "rgb(238, 238, 238)",
    border: "1px solid rgb(204, 204, 204)",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-around",
    position: "relative"
})

const PlayIcon = styled.p({
    position: "absolute",
    left: "20px",
    top: "2px"
})