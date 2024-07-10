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
    description: 'A realtime fullstack messaging application with a user interface inspired by WhatsApp. It enables users to exchange messages individually or within groups.',
    technologies: ['Spring Boot', 'React', 'JWT', 'Websockets'],
    links: [
        {href: 'https://github.com/nicolasjusten95/chat-app', text: 'Github'},
    ],
};

const algorithmVisualizer: PaperItemProps = {
    image: algorithmVisualizerImage,
    title: 'Algorithm Visualizer',
    description: 'An interactive website showcasing major search and sorting algorithms, such as Quick Sort. It features adjustable problem sizes and animation speeds.',
    technologies: ['Algorithms', 'Typescript', 'React', 'Git'],
    links: [
        {href: 'https://nicolasjusten95.github.io/algorithm-visualizer/', text: 'Website'},
        {href: 'https://github.com/nicolasjusten95/algorithm-visualizer', text: 'Github'}
    ],
};

const snakAI: PaperItemProps = {
    image: snakeAiImage,
    title: 'Snake AI',
    description: 'A simple retro snake game where you can either take control and play yourself or watch as an AI learns to master the game. Can you beat the high score?',
    technologies: ['Python', 'Reinforcement Learning'],
    links: [
        {href: 'https://github.com/nicolasjusten95/snake-ai', text: 'Github'}
    ],
};

const spaceWar: PaperItemProps = {
    image: spaceWarImage,
    title: 'Space War',
    description: 'A retro arcade-style game where the player takes control of a spaceship. Shoot down enemies and avoid collisions with allies as the game ramps up in difficulty.',
    technologies: ['Python', 'Game development', 'Game design'],
    links: [
        {href: 'https://github.com/nicolasjusten95/space-war', text: 'Github'}
    ]
}

const relaxationAndVitality: PaperItemProps = {
    image: relaxationAndVitalityImage,
    title: 'Professional Website',
    description: 'A professional and user-friendly website tailored for a regional massage business, designed to enhance online presence and elevate client engagement.',
    technologies: ['WordPress', 'Hosting', 'Webdesign'],
    links: [
        {href: 'https://relaxationandvitality.de/', text: 'Website'},
    ],
};

const myPortfolio: PaperItemProps = {
    image: myPortfolioImage,
    title: 'Developer Portfolio',
    description: 'My developer portfolio website showcasing my journey, significant milestones and notable achievements as a professional software developer.',
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