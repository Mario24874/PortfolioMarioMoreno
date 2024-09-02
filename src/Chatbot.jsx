import React, { useEffect, useRef } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import emailjs from 'emailjs-com';
import './Chatbot.css';
import { findDOMNode } from 'react-dom';


const config = {
  initialMessages: [
    {
      type: 'text',
      message: 'Hi!',
    },
  ],
  state: {
    userEmail: null,
  },
  widgets: [],
  // Usa la imagen importada
  botAvatar: '/images/custom-icon.png',
};

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const greetings = ['hi', 'hello', 'hola', 'buenas'];
    const emailRegex = /[\w.-]+@[\w.-]+\.[\w]+/i;

    if (greetings.some(greeting => message.toLowerCase().includes(greeting))) {
      actions.handleGreeting();
    } else if (emailRegex.test(message)) {
      actions.handleEmail(message);
    } else {
      actions.handleDefault();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleGreeting = () => {
    const botMessage = createChatBotMessage(
      "Hi, Thank you for contacting me!\nI am currently taking requests through the contact section.\nYou can write to me at any time.\nYou can also leave us your email address so we can get in touch with you!"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleEmail = (email) => {
    const botMessage = createChatBotMessage("Thank you for providing your email address!");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      userEmail: email,
    }));

    // Envía el correo electrónico utilizando EmailJS
    const templateParams = {
      from_email: email,
      to_email: 'marioivanmorenopineda@gmail.com',
      subject: 'New message from chatbot user',
      message: 'User provided email',
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.log('Error sending email:', error);
      });
  };

  const handleDefault = () => {
    const botMessage = createChatBotMessage("I'm sorry, I didn't understand that. Can you please rephrase?");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGreeting,
            handleEmail,
            handleDefault,
          },
        });
      })}
    </div>
  );
};

const MyChatbot = ({ isOpen, onToggle }) => {
  const chatbotRef = useRef(null);

  useEffect(() => {
    if (isOpen && chatbotRef.current) {
      const chatbotNode = findDOMNode(chatbotRef.current);
      const header = chatbotNode.querySelector('.react-chatbot-kit-chat-header');
      const inputPlaceholder = chatbotNode.querySelector('.react-chatbot-kit-chat-input-container input');

      if (header) {
        header.textContent = 'Hi, Chat me!';
      }

      if (inputPlaceholder) {
        inputPlaceholder.placeholder = 'Type your message here';
      }
    }
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <div className="chatbot-container" ref={chatbotRef}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
      <div
        className={`chatbot-button ${isOpen ? 'open' : ''}`}
        onClick={onToggle}
      >
        
      </div>
    </div>
  );
};

export default MyChatbot;