import Spline from '@splinetool/react-spline';
import styled from 'styled-components'
import iconLaptop from './images/icon-laptop.svg'
import iconTwitter from './images/icon-twitter.svg'
import iconYoutube from './images/icon-youtube.svg'
import logo from './images/logo.svg'

export default function App() {
  return (
    <Wrapper>
      <Spline className='spline' scene="https://prod.spline.design/gA9bSkdRxDJ5sp1B/scene.splinecode" />
      <Content>
        <Menu>
          <li><img src={logo} alt="logo"/></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">App</a></li>
          <li><a href="/">Download</a></li>
          <li><a href="/">Login</a></li>
          <li><button>Get Started</button></li>
        </Menu>
        <h1>Collaborate with people</h1>
        <p>Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
        <button><img src={iconLaptop} alt="Download" srcset="" /> Download on Mac</button>
      </Content>
      <Social>
        <div />
        <img src={iconTwitter} alt="Twitter" />
        <img src={iconYoutube} alt="Youtube" />
      </Social>
    </Wrapper>
  );
}

const Wrapper = styled.div`
height: 100%;
font-family: 'Spline Sans', sans-serif;
font-size: 16px;
color: white;
position: relative;
overflow-x: hidden;


.spline {
  position: absolute;
  margin: 0;
  top: 0;
  right: -100px;
  width: 1200px;
  height:1000px;

  @media (max-width: 1024px) {
    transform: scale(0.8) translateX(200px);
    transform-origin: top;
  }

  @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    }
    @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    }
}

`

const Content = styled.div`
position: absolute;
top: 30px;
display:flex;
flex-direction: column;

gap: 80px;

@media (max-width: 1024px) {
    gap: 40px;
  }

h1 {
  font-family: 'Spline Sans Mono', monospace;
  font-weight: bold;
  font-size: 70px;
  margin: 0;
  max-width: 500px;
  pointer-event: auto;
  text-shadow: 0 10px 30px rgba(0,0,0,0.5);

  @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  
}

p {
  font-weight: 500;
  line-height: 150%;
  max-width: 380px;
}

button {
  background-color: rgba(0,0,0,0.2);
  border: 0px;
  font-size: 16px;
  padding: 12px 30px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.1);
  color: white;
  max-width: 280px;
  backdrop-filter: blur(20px);

  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  transition: 1s;

  :hover {
    border: 1px solid rgba(255,255,255,0.8);
    transform: translateY(-3px)
  }

}

h1,p, button {
  margin: 0 30px 0 100px;

  @media (max-width: 1024px) {
      margin: 0 30px;
    }
}
`

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border: 1px solid rgba(255,255,255, 0);
      transition: 1s;
      border-radius: 14px;

      :hover {
        border: 1px solid rgba(255,255,255, 0.2)
      }
    }
  }

  button {
    margin: 0;
    width: auto;
    background: rgba(29, 30, 32, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`

const Social = styled.div`
position: absolute;
top: 150px;
left: 30px;
display: flex;
flex-direction: column;
gap: 30px;
align-items: center;

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(180deg, #08B6F9 0%, #6C56EF 33.57%, #1306DD 65.86%, #AA0EB2 100%);
  }
`