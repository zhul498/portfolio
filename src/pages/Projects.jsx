import React, { useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiRoblox } from "react-icons/si";
import { CgGym } from "react-icons/cg";
import { FaTasks } from "react-icons/fa";
import { GiVikingHelmet } from "react-icons/gi";
import { DarkModeContext } from '../components/DarkModeContext.jsx';

const Projects = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={`projects-container ${darkMode ? 'bg-neutral-900' : 'bg-white'}`}>
            <VerticalTimeline lineColor={darkMode ? "#fff" : "#000"}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}
                    contentArrowStyle={{ borderRight: `7px solid ${darkMode ? '#333' : '#fff'}` }}
                    iconStyle={{ background: darkMode ? '#333' : '#000', color: '#fff' }}
                    icon={<GiVikingHelmet />}
                    date="December 2024 - Present">
                    <a href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-green-700 hover:text-green-900 hover:underline">
                        <h3 className="vertical-timeline-element-title">Viking Grades</h3>
                    </a>
                    <p>Currently developing a website to enhance transparency at PSU. This website will provide students with detailed information about course performance trends,
                        grade distributions, and instructor data.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}
                    contentArrowStyle={{ borderRight: `7px solid ${darkMode ? '#333' : '#fff'}` }}
                    iconStyle={{ background: darkMode ? '#333' : '#000', color: '#fff' }}
                    icon={<SiRoblox />}
                    date="June 2024 - December 2024">
                    <a href="https://github.com/zhul498/discord-bot-public"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-blue-500 hover:text-blue-700 hover:underline">
                        <h3 className="vertical-timeline-element-title">Roblox Group Management Service</h3>
                    </a>
                    <p>ROBLOX group management service, handling 300+ members.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}
                    contentArrowStyle={{ borderRight: `7px solid ${darkMode ? '#333' : '#fff'}` }}
                    iconStyle={{ background: darkMode ? '#333' : '#000', color: '#fff' }}
                    icon={<CgGym />}
                    date="February 2024 - June 2024">
                    <h3 className="vertical-timeline-element-title text-xl font-semibold">Barbell Path Tracker</h3>
                    <p>OpenCV program to track the path of a barbell and calculate the deviation from the center of path.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}
                    contentArrowStyle={{ borderRight: `7px solid ${darkMode ? '#333' : '#fff'}` }}
                    iconStyle={{ background: darkMode ? '#333' : '#000', color: '#fff' }}
                    icon={<FaTasks />}
                    date="March 2023 - July 2023">
                    <h3 className="vertical-timeline-element-title text-xl font-semibold">Task Manager</h3>
                    <p>C++ application using a linked list data structure, with functionalities such as adding, deleting, and updating tasks, and a user-friendly interface.</p>
                </VerticalTimelineElement>

                <span className="pb-8" />
            </VerticalTimeline>
        </div>
    );
}

export default Projects;