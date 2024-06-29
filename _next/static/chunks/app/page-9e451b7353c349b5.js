(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2489:function(e,t,i){Promise.resolve().then(i.bind(i,909))},909:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var a=i(7437),n=i(2265),l=i(5770),s=i(8136);function o(e){let{show:t,handleClose:i,title:n,videoUrl:l}=e;return(0,a.jsxs)(s.Z,{size:"xl",show:t,onHide:i,centered:!0,children:[(0,a.jsx)(s.Z.Header,{closeButton:!0,children:(0,a.jsx)(s.Z.Title,{children:n})}),(0,a.jsx)(s.Z.Body,{children:(0,a.jsxs)("div",{className:"video-container",style:{position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden",maxWidth:"100%"},children:["#"!=l&&(0,a.jsx)("iframe",{src:l,frameBorder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}),"#"===l&&(0,a.jsx)("p",{children:"Details coming soon!"})]})})]})}var r=i(2098),d=i(6648);function c(e){let{url:t,videoUrl:i,title:l,description:s,technologies:c,date:h,index:p,bgSize:g="object-cover",highlight:m=!1}=e,[u,v]=(0,n.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"bg-white min-w-32 aspect-square ".concat(0===p?"mb-8":"my-8"," flex flex-col border-1 rounded-[12px] cursor-pointer transition duration-300 transform hover:scale-105"),onClick:()=>v(!0),children:[(0,a.jsx)("div",{className:"relative w-full h-1/2",children:(0,a.jsx)(d.default,{src:t,alt:l,fill:!0,className:"rounded-t-lg ".concat(g)})}),(0,a.jsxs)("div",{className:"p-2 flex-1 flex flex-col",children:[(0,a.jsx)("h2",{className:"text-xl font-semibold",children:l}),m&&(0,a.jsx)(r.Z,{bg:"success",className:"self-start",children:m&&"Highlight"}),(0,a.jsx)("p",{className:"mt-2 text-md text-gray-600 flex-1",children:s}),(0,a.jsxs)("div",{className:"flex justify-between items-end text-xs text-gray-500 mt-2",children:[(0,a.jsx)("div",{className:"flex flex-wrap space-x-1",children:c.map((e,t)=>(0,a.jsxs)("span",{children:[e,t!==c.length-1?" | ":""]},t))}),(0,a.jsx)("div",{children:h})]})]})]}),(0,a.jsx)(o,{show:u,handleClose:()=>v(!1),videoUrl:i,title:l})]})}var h=function(){let e=[{url:"/climate.webp",videoUrl:"#",title:"Local Climate Impact Model",description:"Created visualizations and models to study local climate impact, enhancing model interpretability with SHAP plots and partial dependence plots.",technologies:["Python","SHAP","Pandas"],date:"June 2024"},{url:"/ai_powered.png",videoUrl:"https://www.youtube.com/embed/OxJpZNXkeOE?si=c4wkO96vAHbVjT4n",title:"AI-Powered Sports Highlights Generator",description:"Developed a Retrieval-Augmented Generation (RAG) system with LangChain and OpenAI GPT-4 models for generating relevant highlights.",technologies:["Python","Flask","AWS","LangChain","GPT-4"],highlight:!0,date:"June 2024"},{url:"/covid_dashboard.png",videoUrl:"#",title:"COVID-19 Dashboard",description:"Developed interactive dashboards for COVID-19 analysis with R Shiny, optimized with asynchronous loading and data chunking.",technologies:["Python","R","Shiny","MapShaper"],highlight:!0,date:"May 2024"},{url:"/thermal.webp",videoUrl:"#",title:"Cognitive Load Detection",description:"Implemented optimized TF Lite models for CPU-based cognitive load detection on facial ROI using thermal metadata from FLIR videos.",technologies:["Python","TensorFlow Lite","OpenCV","FLIR SDK"],date:"April 2024"},{url:"/distill.png",videoUrl:"#",title:"Step-by-Step Distillation - Llama to DialoGPT",description:"Utilized the QLoRA technique to finetune Llama7B on the Empathetic Dialogues dataset from Huggingface.",technologies:["QLoRA","Llama7B","Huggingface"],highlight:!0,date:"April 2024"},{url:"/lsi_wisconsin.png",videoUrl:"#",title:"Wisconsin Dashboard",description:"Developed an interactive dashboard for analyzing social determinants of health related to opioid use in Wisconsin.",technologies:["R Shiny","Python","ShinyApps.io"],date:"March 2024"},{url:"/opioid.webp",videoUrl:"#",title:"Opioid Mortality Prediction Model",description:"Implemented regression models (CatBoost, XGBoost, Random Forest) to explain 99.5% variance in opioid mortality in the US.",technologies:["Python","R","Shiny","Scikit-learn"],date:"February 2024"},{url:"https://cdn.loom.com/sessions/thumbnails/2d224db2b0c94987891649cfbea2ea8b-1714161501968-with-play.gif",videoUrl:"https://www.loom.com/embed/2d224db2b0c94987891649cfbea2ea8b?sid=0ebba8bf-ae03-41a1-b7e0-2151ec837740",title:"Raven: AI-Powered Fashion Stylist",description:"Engineered a custom AI conversational agent using Streamlit, ChatGPT API, Langchain, and Pinecone vector database.",technologies:["React","Redux","Figma","ChatGPT API","Langchain","Pinecone"],highlight:!0,date:"October 2023"},{url:"/tweet.png",videoUrl:"#",title:"Twitter Sentiment Browser Extension",description:"Engineered a Node.js server to generate sentiment scores using Huggingface models for tweets on the Twitter website.",technologies:["Node.js","Huggingface models","JavaScript","HTML","CSS"],date:"January 2023"},{url:"/yelp.png",videoUrl:"#",title:"Lightweight Yelp",description:"Developed a website for optimized business detail retrieval with React by utilizing the Yelp API.",technologies:["React","Node.js","Express","Google API","Java","Volley"],date:"October 2022"},{url:"/asthma.png",videoUrl:"#",title:"Asthma and Diabetes Predictor",description:"Developed ML pipeline using a suite of regression models achieving R2_score ~0.95 for diabetes and asthma prediction.",technologies:["Python","Scikit-learn","kepler.gl"],date:"September 2022"},{url:"/its.png",videoUrl:"#",title:"Intelligent Tutoring System",description:"Developed an NLP-driven e-learning platform for content summarization, question generation, and keyword extraction.",technologies:["Python","Flask","TextRank","T5 model","YAKE","GCP"],highlight:!0,date:"May 2022"},{url:"/citation.jpeg",videoUrl:"#",title:"Citation Detection",description:"Enhanced citation detection/localization accuracy by 4% using Hierarchical Attention Networks and demonstrated Gated Multilayer Perceptrons' effectiveness in text alignment with qualitative analysis.",technologies:["Python","PyTorch","Document Attention"],bgSize:"object-contain",date:"June 2022"},{url:"/covid_spy.png",videoUrl:"#",title:"Covid Spy",description:"Devised a prototype for contact tracing by employing Bluetooth Low Energy Beacons (BLE) and RSSI.",technologies:["Bluetooth Low Energy Beacons (BLE)","RSSI","Graph Theory"],date:"March 2020"},{url:"/pothole.png",videoUrl:"#",title:"Pothole Detection and Reporting System",description:"Led a team of 6 to develop an end-to-end solution to detect potholes at 92% accuracy and report them to authorities for efficient management of pothole repair projects.",technologies:["Python","Support Vector Machines","Sensors"],date:"December 2019",bgSize:"object-contain"}];return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("div",{className:"absolute animate-marquee-vertical",children:e.map((e,t)=>(0,a.jsx)(c,{url:e.url,videoUrl:e.videoUrl,title:e.title,description:e.description,technologies:e.technologies,date:e.date,bgSize:e.bgSize,highlight:e.highlight,index:t},t))}),(0,a.jsx)("div",{className:"absolute animate-marquee2-vertical",children:e.map((e,t)=>(0,a.jsx)(c,{url:e.url,videoUrl:e.videoUrl,title:e.title,description:e.description,technologies:e.technologies,date:e.date,bgSize:e.bgSize,highlight:e.highlight,index:t},t))})]})},p=function(e){let{show:t,handleClose:i}=e;return(0,a.jsxs)(l.Z,{className:"color-cycle",show:t,onHide:i,placement:"end",children:[(0,a.jsx)(l.Z.Header,{closeButton:!0,children:(0,a.jsx)(l.Z.Title,{children:"Projects"})}),(0,a.jsx)(l.Z.Body,{children:(0,a.jsx)(h,{})})]})},g=i(4365),m=i.n(g),u=i(3466),v=i(4539),x=e=>{let{children:t,title:i,position:n="top"}=e;return(0,a.jsx)(u.Z,{placement:n,overlay:(0,a.jsx)(v.Z,{className:"d-none d-md-block",id:"tooltip-top",children:i}),children:t})};function f(){let[e,t]=(0,n.useState)(!1);return(0,a.jsxs)("div",{className:"h-screen w-screen flex overflow-x-hidden items-center justify-center",children:[(0,a.jsxs)("div",{className:"w-full lg:w-2/3 h-full p-6 flex flex-col items-center justify-center relative",children:[(0,a.jsxs)("div",{className:"relative flex",children:[(0,a.jsx)(d.default,{src:"/Profile pic.jpg",alt:"Aditya Vadalkar",className:"profile-image w-64 h-64 object-cover object-top z-10",width:256,height:256}),(0,a.jsx)("a",{href:"/Aditya Vadalkar Resume.pdf",target:"_blank",className:"link",children:(0,a.jsx)(x,{title:"Resume",position:"left",children:(0,a.jsxs)("svg",{id:"cv",className:"absolute svg-link top-0 left-0",width:"200",height:"100",viewBox:"0 0 200 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M1 68V1.5H32L51.5 21V68H1Z",fill:"#FFF6EB"}),(0,a.jsx)("path",{className:"svg-path",d:"M210 68H51.5M32 1.5H1V68H51.5M32 1.5L51.5 21M32 1.5V21H51.5M51.5 21V68M10.5 42H41.5M10.5 52H41.5M18.5 10C20 10 23 10.8 23 14C23 15.6667 22.1 18.9 18.5 18.5C17.1667 18.3333 14.5 17.2 14.5 14C14.3333 12.8333 14.9 10.4 18.5 10ZM26.5 31H10.5C10.5 26.8333 12.1 18.9 18.5 20.5C21.5 19.8333 27.3 21 26.5 31Z",stroke:"#647973",strokeWidth:"3"})]})})}),(0,a.jsx)("a",{href:"https://linkedin.com/in/aditya-vadalkar",target:"_blank",className:"link",children:(0,a.jsx)(x,{title:"LinkedIn",position:"left",children:(0,a.jsxs)("svg",{id:"linkedin",className:"absolute svg-link bottom-0 left-0",width:"216",height:"52",viewBox:"0 0 216 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M1 51V1H54V51H1Z",fill:"#FFF6EB"}),(0,a.jsx)("path",{className:"svg-path",d:"M216 1H54M54 1H1V51H54V1ZM13.5 19.5V41M23.5 17.5V29.25M23.5 41V29.25M23.5 29.25C24 23.8333 27.9 14.3 39.5 19.5C40.3333 21.3333 41.5 27.9 39.5 39.5",stroke:"#647973",strokeWidth:"3"})]})})}),(0,a.jsx)("a",{href:"https://github.com/adityavadalkar",target:"_blank",className:"link",children:(0,a.jsx)(x,{title:"GitHub",position:"right",children:(0,a.jsxs)("svg",{id:"github",className:"absolute svg-link top-0 right-0",width:"200",height:"100",viewBox:"0 0 200 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M0 97H111.524V87.0257M111.524 87.0257C105.13 89.163 90.68 89.3055 84.0305 72.7766C86.588 79.6637 95.6672 92.1553 111.524 87.0257ZM111.524 87.0257C111.524 81.801 112.419 71.2092 116 70.6393C120.475 69.9268 95.5394 74.2015 89.1455 46.4159C82.7517 18.6303 101.933 20.0552 95.5394 20.0552C89.1455 20.0552 95.5394 4.38128 95.5394 1.53147C95.5394 -0.748377 106.196 4.85624 111.524 7.94354C119.41 6.51863 136.332 4.52377 140.935 7.94354C146.69 12.2182 138.378 4.38128 157.559 1.53147C159.478 3.43133 162.547 9.7959 159.478 20.0552C162.888 22.905 168.685 32.4519 164.593 47.8408C160.501 63.2298 144.985 69.4519 137.739 70.6393C140.083 71.1142 144.388 77.0513 142.854 97",fill:"#FFF6EB"}),(0,a.jsx)("path",{className:"svg-path",d:"M0 98H111.524V88.0257M111.524 88.0257C105.13 90.163 90.68 90.3055 84.0305 73.7766C86.588 80.6637 95.6672 93.1553 111.524 88.0257ZM111.524 88.0257C111.524 82.801 112.419 72.2092 116 71.6393C120.475 70.9268 95.5394 75.2015 89.1455 47.4159C82.7517 19.6303 101.933 21.0552 95.5394 21.0552C89.1455 21.0552 95.5394 5.38128 95.5394 2.53147C95.5394 0.251623 106.196 5.85624 111.524 8.94354C119.41 7.51863 136.332 5.52377 140.935 8.94354C146.69 13.2182 138.378 5.38128 157.559 2.53147C159.478 4.43133 162.547 10.7959 159.478 21.0552C162.888 23.905 168.685 33.4519 164.593 48.8408C160.501 64.2298 144.985 70.4519 137.739 71.6393C140.083 72.1142 144.388 78.0513 142.854 98",stroke:"#647973",strokeWidth:"3"})]})})}),(0,a.jsx)("a",{href:"mailto:vadalkar@usc.edu",className:"link",children:(0,a.jsx)(x,{title:"Email: vadalkar@usc.edu",position:"right",children:(0,a.jsxs)("svg",{id:"mail",className:"absolute svg-link bottom-0 right-0",width:"177",height:"52",viewBox:"0 0 177 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("path",{d:"M176 1.5V51H115V1.5H176Z",fill:"#FFF6EB"}),(0,a.jsx)("path",{className:"svg-path",d:"M0.5 1.5H115M176 1.5V51H115V1.5M176 1.5H115M176 1.5L145.5 25.5L115 1.5",stroke:"#647973",strokeWidth:"3"})]})})})]}),(0,a.jsx)("header",{className:"text-4xl mt-4 mb-2 font-handwritten",children:"Aditya Vadalkar"}),(0,a.jsx)(m(),{onInit:e=>{e.typeString("Software Engineer").pauseFor(1e3).typeString(" - Generative AI").pauseFor(1e3).deleteChars(16).pauseFor(1e3).typeString(" - Full Stack").pauseFor(1e3).deleteChars(13).pauseFor(1e3).typeString(" - Machine Learning").pauseFor(1e3).deleteAll().pauseFor(1e3).typeString('<span className="font-game-text">Game Developer</span>').pauseFor(1e3).deleteChars(14).typeString('<span class="anime-text">Anime Enthusiast</span>').pauseFor(1e3).deleteChars(16).pauseFor(1e3).deleteAll().pauseFor(1e3).start()},options:{delay:50,loop:!0,wrapperClassName:"text-2xl mt-4"}}),(0,a.jsx)("main",{className:"w-3/4 mt-4 text-md text-gray-600 font-handwritten",children:"I'm based in Los Angeles, where I graduated from University of Southern California with a Master's in Computer Science. My journey includes spearheading the engineering team at Raven as a Founding Software Engineer to advancing machine learning applications at RTI International as a Data Scientist, focusing on applying AI to solve problems in the fashion and public health sector. Beyond my professional endeavors, I immerse myself in side projects, from AI-powered sports highlight generator to intelligent tutoring systems. In my downtime, I play and create video games, art, and music, and indulge in anime."})]}),(0,a.jsx)("div",{className:"fixed right-0 top-1/2 transform -translate-y-1/2 z-50 lg:hidden",children:(0,a.jsx)("button",{className:"bg-blue-500 text-white rounded-l-md py-1 px-2",onClick:()=>t(!0),children:"→"})}),(0,a.jsx)("div",{className:"lg:hidden",children:(0,a.jsx)(p,{show:e,handleClose:()=>t(!1)})}),(0,a.jsx)("div",{className:"hidden lg:block lg:w-1/3 h-full p-6 z-50 overflow-y-auto color-cycle",children:(0,a.jsx)(h,{})})]})}}},function(e){e.O(0,[703,971,23,744],function(){return e(e.s=2489)}),_N_E=e.O()}]);