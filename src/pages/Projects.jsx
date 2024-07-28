import React from 'react';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { SiRoblox } from "react-icons/si";
import { CgGym } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";


const Projects = () => {
    return (
        <div>
            <VerticalTimeline lineColor="#000">
                <VerticalTimelineElement
                 className="vertical-timeline-element--education" 
                 iconStyle={{background:"#000", color: "#fff"}} 
                 icon={<SiRoblox />} 
                 date="June 2024 - Present">
                    <h3 className="vertical-timeline-element-title">Roblox Group Management Service</h3>
                    <p>ROBLOX group management service, handling 300+ members.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline lineColor="#000">
                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                iconStyle={{background:"#000", color: "#fff"}} 
                icon={<FaTasks />} 
                date="March 2023 - July 2023">
                    <h3 className="vertical-timeline-element-title">Task Manager</h3>
                    <p>C++ application using a linked list data structure, with functionalities such as adding, deleting, and updating tasks, and a user-friendly interface.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline lineColor="#000">
                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                iconStyle={{background:"#000", color: "#fff"}} 
                icon={<CgGym />} 
                date="February 2022 - June 2022">
                    <h3 className="vertical-timeline-element-title">Barbell Path Tracker</h3>
                    <p>OpenCV program to track the path of a barbell and calculate the deviation from the center of path.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
            
        </div>
    );
}

export default Projects