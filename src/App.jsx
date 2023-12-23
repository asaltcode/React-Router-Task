import React from "react";
import Navication from "./components/Navication";
import All from "./components/courses/All";
import FullStackDevelopement from "./components/courses/FullStackDevelopement";
import DataScience from "./components/courses/DataScience";
import CyberSecurity from "./components/courses/CyberSecurity";
import Carrer from "./components/courses/Carrer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  let courseData = [    
    {
      id: "1",
      category: "cyber-security",
      img: "https://img.freepik.com/free-vector/cyber-security-concept_23-2148532223.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=ais",
      title: "Cloud security",
      description: ""
    },
    {
      id: "2",
      category: "cyber-security",
      img: "https://img.freepik.com/free-vector/data-security-technology-background-vector-blue-tone_53876-112201.jpg?size=626&ext=jpg",
      title: "Privacy",
      description: ""
    },
    {
      id: "3",
      category: "full-stack",
      img: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=ais",
      title: "What is Programming",
      description: "Put simply, programming is giving a set of instructions to a computer to execute. If you’ve ever cooked using a recipe before, you can think of yourself as the computer and the recipe’s author as a programmer."
    },
    {
      id: "4",
      category: "full-stack",
      img: "https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=ais",
      title: "Create your own website",
      description: "Zoho Commerce contains all the tools you need to build a website, accept orders, track inventory, process payments, manage shipping, market your brand, and analyze your data."
    },
    {
      id: "5",
      category: "full-stack",
      img: "https://img.freepik.com/free-photo/medium-shot-man-working-laptop_23-2150323506.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=ais",
      title: "What is HTML?",
      description: "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page"
    },
    {
      id: "6",
      category: "full-stack",
      img: "https://img.freepik.com/free-vector/application-programming-interface-concept-illustration_114360-9145.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=ais",
      title: "WEB API Introduction",
      description: "A Web API also called Web Services is an extensively used API over the web and can be easily accessed using the HTTP protocols. A Web API is an open-source interface and can be used by a large number of clients through their phones, tablets, or PCs."
    },
    {
      id: "7",
      category: "full-stack",
      img: "https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=ais",
      title: "Responsive web design",
      description: "Responsive web design is about creating web pages that look good on all devices!"
    },
    {
      id: "8",
      category: "cyber-security",
      img: "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595831.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=ais",
      title: "Mobile Security",
      description: ""
    },
    {
      id: "9",
      category: "data-science",
      img: "https://img.freepik.com/free-photo/business-person-looking-finance-graphs_23-2150461326.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=ais",
      title: "Data Analysis",
      description: ""
    },
    {
      id: "10",
      category: "data-science",
      img: "https://img.freepik.com/free-photo/revenue-operations-collage_23-2150847854.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=ais",
      title: "Deep learning",
      description: ""
    },
    {
      id: "11",
      category: "data-science",
      img: "https://img.freepik.com/free-photo/data-online-technology-internet-circuit-board-concept_53876-122988.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=ais",
      title: "Data visualization",
      description: ""
    },
    {
      id: "12",
      category: "data-science",
      img: "https://img.freepik.com/free-photo/two-colleagues-working-late-office-blue-light-night-view_482257-32812.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=ais",
      title: "Data mining",
      description: ""
    },
    {
      id: "13",
      category: "carrer",
      img: "https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=sph",
      title: "Goal setting",
      description: ""
    },
    {
      id: "14",
      category: "carrer",
      img: "https://img.freepik.com/free-photo/group-three-modern-architects_23-2147702101.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=sph",
      title: "Diversity and inclusion",
      description: ""
    },
    {
      id: "15",
      category: "carrer",
      img: "https://img.freepik.com/free-photo/career-employment-job-work-concept_53876-123876.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=sph",
      title: "Carrer grow",
      description: ""
    },
    {
      id: "16",
      category: "carrer",
      img: "https://img.freepik.com/free-photo/close-up-business-people-hands-together-teamwork-concept_1150-2583.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=sph",
      title: "Success !",
      description: ""
    },
    {
      id: "17",
      category: "carrer",
      img: "https://img.freepik.com/free-photo/handshake-businessmen_1098-742.jpg?size=626&ext=jpg&ga=GA1.1.1584469758.1703309811&semt=sph",
      title: "Leadership",
      description: ""
    },
  ];
  return (
    <>
          <BrowserRouter>
            <Navication />
      <div className="container-fluid mt-4 mb-5">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-sm-2 g-4">
            <Routes>
              <Route path="/all" element={<All data={courseData} />} />
              <Route path="/full-stack-development" element={<FullStackDevelopement data={courseData} />}/>
              <Route path="/data-science" element={<DataScience data={courseData} />} />
              <Route path="/cyber-security" element={<CyberSecurity data={courseData} />} />
              <Route path="/carrer" element={<Carrer data={courseData} />} />
              <Route path="/*" element={<Navigate to="/all" />} />
            </Routes>
        </div>
      </div>
          </BrowserRouter>
    </>
  );
};

export default App;
