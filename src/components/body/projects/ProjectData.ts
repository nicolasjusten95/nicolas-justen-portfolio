import {PaperItemProps} from "../util/PaperItem";
import algorithmVisualizerImage from "../../../images/algorithm_visualizer.png";
import relaxationAndVitalityImage from "../../../images/relaxation_and_vitality.png";
import myPortfolioImage from "../../../images/developer_portfolio.png";
import spaceWarImage from "../../../images/space_war.png";
import chatAppImage from "../../../images/chat_app.png";
import snakeAiImage from "../../../images/snake_ai.png";

const chatApp: PaperItemProps = {
    image: chatAppImage,
    title: 'Chat App',
    description: 'A realtime chat application for chatting with groups or privately with your friends.',
    technologies: ['Spring Boot', 'React', 'JWT', 'Websockets'],
    links: [
        {href: 'https://github.com/nicolasjusten95/chat-app', text: 'Github'},
    ],
};

const algorithmVisualizer: PaperItemProps = {
    image: algorithmVisualizerImage,
    title: 'Algorithm Visualizer',
    description: 'A responsive web application showcasing major search and sorting algorithms with interactive visualizations.',
    technologies: ['Algorithms', 'Typescript', 'React', 'Git'],
    links: [
        {href: 'https://nicolasjusten95.github.io/algorithm-visualizer/', text: 'Website'},
        {href: 'https://github.com/nicolasjusten95/algorithm-visualizer', text: 'Github'}
    ],
};

const snakAI: PaperItemProps = {
    image: snakeAiImage,
    title: 'Snake AI',
    description: 'A retro snake game in python. Play it yourself or whatch an AI learn how to do it.',
    technologies: ['Python', 'Reinforcement Learning', 'Game Development'],
    links: [
        {href: 'https://github.com/nicolasjusten95/snake-ai', text: 'Github'}
    ],
};

const spaceWar: PaperItemProps = {
    image: spaceWarImage,
    title: 'Space War',
    description: 'A retro arcade-style game where the player takes control of a spaceship to navigate through space filled with allies and enemies.',
    technologies: ['Python', 'Game development', 'Game design'],
    links: [
        {href: 'https://github.com/nicolasjusten95/space-war', text: 'Github'}
    ]
}

const relaxationAndVitality: PaperItemProps = {
    image: relaxationAndVitalityImage,
    title: 'Professional Website',
    description: 'A professional and user-friendly website for a regional massage business, enhancing online presence and client engagement.',
    technologies: ['WordPress', 'Hosting', 'Webdesign'],
    links: [
        {href: 'https://relaxationandvitality.de/', text: 'Website'},
    ],
};

const myPortfolio: PaperItemProps = {
    image: myPortfolioImage,
    title: 'Developer Portfolio',
    description: 'My developer portfolio website showcasing my achievements as a software developer.',
    technologies: ['Typescript', 'React', 'HTML', 'CSS', 'Git'],
    links: [
        {href: 'https://nicolasjusten.com/', text: 'Website'},
        {href: 'https://github.com/nicolasjusten95/nicolas-justen-portfolio', text: 'Github'}
    ],
};

export const projects = [
    chatApp,
    algorithmVisualizer,
    snakAI,
    spaceWar,
    relaxationAndVitality,
    myPortfolio,
];