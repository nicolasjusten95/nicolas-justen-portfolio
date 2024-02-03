import {ProjectProps} from "./Project";
import algorithmVisualizerImage from "../../../images/algorithm_visualizer.png";
import relaxationAndVitalityImage from "../../../images/relaxation_and_vitality.png";
import myPortfolioImage from "../../../images/developer_portfolio.png";

const algorithmVisualizer: ProjectProps = {
    image: algorithmVisualizerImage,
    title: 'Algorithm Visualizer',
    description: 'A responsive web application showcasing major search and sorting algorithms with interactive visualizations.',
    technologies: ['Algorithms', 'Typescript', 'React', 'Git'],
    links: [
        {href: 'https://nicolasjusten95.github.io/algorithm-visualizer/', text: 'Website'},
        {href: 'https://github.com/nicolasjusten95/algorithm-visualizer', text: 'Github'}
    ],
};

const relaxationAndVitality: ProjectProps = {
    image: relaxationAndVitalityImage,
    title: 'Professional Website',
    description: 'A professional and user-friendly website for a regional massage business, enhancing online presence and client engagement.',
    technologies: ['WordPress', 'Hosting', 'Webdesign'],
    links: [
        {href: 'https://relaxationandvitality.de/', text: 'Website'},
    ],
};

const myPortfolio: ProjectProps = {
    image: myPortfolioImage,
    title: 'Developer Portfolio',
    description: 'My developer portfolio website showcasing my achievements as a software developer.',
    technologies: ['Typescript', 'React', 'HTML', 'CSS', 'Git'],
    links: [
        {href: 'https://nicolasjusten.com/', text: 'Website'},
        {href: 'https://github.com/nicolasjusten95/nicolas-justen-portfolio', text: 'Github'}
    ],
}

export const projects = [
    algorithmVisualizer,
    relaxationAndVitality,
    myPortfolio,
];