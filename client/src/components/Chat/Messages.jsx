import React, { useEffect, useRef } from 'react'
import { useChat } from '../../contextApi/ChatContext'
import { socket } from '../../Socket'
import html2canvas from 'html2canvas';

const Messages = () => {
    const { userId, isSearching, setIsSearching, receiver, messages, setMessages, isTyping, message } = useChat()

    const newChat = () => {
        setIsSearching(true)
        setMessages([])
        socket.emit("pairing-user", userId, (error) => {
            if (error) {
                return alert(error);
            }
        })
        return () => {
            socket.off("pairing-user");
        };
    }

    const takeScreenshot = () => {
        const element = document.getElementById('savedchat'); // Replace 'elementToCapture' with the ID of the element you want to capture

        html2canvas(element).then((canvas) => {
            const screenshot = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');

            // Set the href attribute with the data URL
            downloadLink.href = screenshot;

            // Set the download attribute with a desired file name
            downloadLink.download = 'screenshot.png';

            // Append the link to the body
            document.body.appendChild(downloadLink);

            // Trigger a click on the link to initiate the download
            downloadLink.click();

            // Remove the link from the body after download
            document.body.removeChild(downloadLink);
            // Now you can save or display the screenshot as needed
        });
    };

    const messagesRef = useRef()

    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div id='savedchat' className='p-4 h-[71vh] overflow-y-scroll' ref={messagesRef}>
            {!isSearching && !receiver && receiver !== "" && (
                <>
                    <p className='mb-4'>Omegle : talk to strangers</p>
                    <button className='btn btn-primary' onClick={newChat}>Start a new conversation</button>
                </>
            )}

            {receiver && <p className='mb-4 text-gray-600'>You’re now chatting with a random stranger.</p>}
            {messages.map((message, index) => (
                <div key={index} className={message?.stranger ? "flex mb-2 w-full" : "flex flex-row-reverse mb-4 w-full"}>
                    <div className={`p-2 rounded-md max-w-[80%] lg:max-w-[50%]   w-max break-all ${message?.stranger ? "bg-red-200" : "bg-blue-200"}`}>
                        <p className={`font-bold ${message?.stranger ? "text-red-600" : "text-blue-600"}`}>
                            {message?.stranger ? "Stranger :" : "You :"}
                        </p>
                        <p>{message?.stranger ? message.stranger : message.you}</p>
                    </div>
                </div>
            ))}

            {isTyping && <p className='mt-2 text-gray-500'>Stranger is typing...</p>}

            {isSearching && <p className='mt-2 text-gray-500'>Connecting to server...</p>}
            {isSearching && <p className='mt-2 text-gray-500'>Looking for someone you can chat with...</p>}
            {
                !isSearching && !receiver && receiver === "" &&
                <>
                    <p className='mt-4 text-gray-500'>Stranger has disconnected.</p>
                    <p className='mt-4 text-gray-500'>Your conversational partner has disconnected</p>
                    <div className='flex flex-col items-center mt-4'>
                        <p className='text-center text-gray-500 mb-2'><span><input type={"checkbox"} className='mr-2' /></span> Find strangers with common interests <span className='text-blue-500 underline cursor-pointer'>Settings</span></p>
                        <button className='btn btn-secondary' onClick={takeScreenshot}>Great chat? Save the log!</button>
                    </div>

                    <div className='flex flex-col items-center mt-4'>
                        <button className='btn btn-primary' onClick={newChat}>Start a new conversation</button>
                        <p>or</p>
                        <span className='text-blue-500 underline cursor-pointer' onClick={takeScreenshot}>save this log</span>
                        <p>or</p>
                        <span className='text-blue-500 underline cursor-pointer'>send us feedback</span>
                    </div>
                </>
            }
        </div>
    )
}

export default Messages
