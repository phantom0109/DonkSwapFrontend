import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color:#9d70c3;
    background-image: url("/donk_sky.webp");
    background-repeat: no-repeat;
    background-size: cover;
    img {
      height: auto;
      max-width: 100%;
    }
  }

#swap-tabs{
    background: white;
}
.rc-menu{
	box-shadow: none;
	border-radius: 4px;
	border: 1px solid #444;
}
.md-up, .md-down{
    display:none;
}
#menu-0{
  margin-left: -2rem;
}
@media(min-width:707px) {
  .md-up{
    display:block !important;
  }
  .md-down {
    display:none !important;
  }
}
@media(max-width:707px) {
  .md-down{
    display:block !important;
  }
  .md-up{
    display:none !important;
  }
}

.font-bold{
    font-weight:500
}
@media(max-width: 555px){
    .sm-hide{
    display:none !important;
    }
}
  #white-light {
	 background-color: #fff;
	 box-shadow: 0 0 1px 1px #fff;
	 height: 1px;
	 right: 50vw;
     z-index: -99;
	 position: fixed;
	 opacity: 0.04;
	 top: calc(50vh - 5vmin);
	 transform: rotate(-10deg);
	 transform-origin: top right;
	 width: 55vw;
}
.text-cream {
	color: #000000;
} 
.max-h{
	max-height: 100% !important;
	height: 100% !important;
}
canvas {
  position: absolute;
  overflow: hidden;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -999;
  opacity: 0.009;
filter: blur(20px) hue-rotate(58);
}
.text-cream:hover {
	color: #fff;
}
.flex-column {
display: flex;
flex-direction: column;
justify-content: space-between;
}
.center {
	display:flex;
	margin: auto;
	justify-content: center;
	align-items: center;
	align-self: center;
}
.w-swap{
  width:17rem;
}
.h-full {
  height: 100%;
}
#root{
	min-height: 100vh;
}
.self-center {
	align-self: center;
}
.relative {
	position:relative;
}
.connect {
border-radius: 50rem;
background: #b695d3;
}
.br-full {
	border-radius: 50rem;
}
.op-half{
	opacity: 0.5
}
.op-half:hover{
	opacity: 1
}
.bw {
	filter: grayscale(1)
}
.primary-g {
	background:#9d70c3;
    color: #fff !important;
    height: 45px;
}

.outline-btn {
	border: 1px solid #fff !important;
	background: transparent !important;
	border-radius: 50rem;
}

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #c2c2c2;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 0px;
  } 
  
  #token-search-input {
  border-radius: 2px;
	border-width:2px;
  }
.rounded-full {
  border-radius: 50rem !important;
}
.badge {
    display: inline-block;
    color: #444;
    text-align: left;
	top: -5px;
	left: 90%;
	position:absolute;
    font-size: 8px;
    font-weight: 400;
    padding: 0.05rem 0.1rem 0.1rem;
    line-height: inherit;
    margin: 0 0.5rem;
}
.flex-row{
  display:flex;
  flex-direction:row;
  justify-content: space-between;
}
.btn {
    align-items: center;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    -webkit-box-pack: center;
    letter-spacing: 0.03em;
    line-height: 1;
    opacity: 1;
    outline: 0;
    transition: background-color 0.2s,opacity 0.2s;
    height: 48px;
    padding: 0 24px;
    box-shadow: none;
    color: #260547;
    width: 100%;
    margin-bottom: 0;
    justify-content: space-between;
}

.glass:after {
	content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
120deg
, #ffffff38, #ffffff05);
    border-radius: 15px;
    backdrop-filter: blur(10px);
}
.btn:hover{
	opacity: 0.65;
}
.btn:active {
	opacity: 0.85;
    -webkit-transform: translateY(-1px);
    -ms-transform: translateY(-1px);
    transform: translateY(-1px);
    box-shadow: none;
}
.code {
font-family: "Ubuntu Mono", sans-serif;
}
.ml-rem {
	margin-left: 2rem;
}
.mb-rem {
	margin-bottom:1rem;
}
.text-dim {
	opacity: 0.4;
}
.mt-rem {
	margin-top: 1rem;
}
.pointer {cursor:pointer}
.m-rem {
	margin: 1rem;
} 
 .text-white{
	 color: #fff;
 }
 * {
	transition: all .2s ease;
  border-radius: 3px !important;
}
a:hover{
color: rgb(140, 84, 187)
}
 
a{
color: rgb(140, 84, 187)
}
.MuiTypography-h6{
font-weight: bolder !important;
font-family: 'Poppins' !important;
color: rgb(140, 84, 187);
text-transform: uppercase;
}
.MuiToolbar-root {
  padding-left: 16px !important;
}
.donkLogo {
height: 9rem;
margin: 5rem auto -9rem;
display: block;
padding-right: 40px;
}
@media (max-width: 969px){
.donkLogo {
  margin: 5rem auto -9vh;
}
}
@media (max-width: 631px){
  .donkLogo {
    display:none !important;
  }
}
  @media(min-width:1994px){
   .donkLogo {
    display:none !important;
  } 
  }

  .space-between{
    justify-content: space-between;
  }

  .space-evenly{
    justify-content: space-evenly;
  }

  .center {
    justify-content: center;
  }

  .bold {
    font-weight: bold;
  }

  .mb-1 {
    margin-bottom: 5px;
  }

  .mt-2 {
    margin-top: 10px !important;
  }
  .padding-10 {
    padding: 10px;
  }
`

export default GlobalStyle
