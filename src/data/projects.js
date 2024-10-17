// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        category: 'ReactJS Web App',
        img: WebImage2,
        ProjectHeader: {
            title: 'E-Commerce Platform',
            publishDate: 'Jul 26, 2021',
            tags: 'ReactJS / Context API',
        },
        ProjectUrl: 'e-commerce',
    },
    {
        id: 2,
        title: 'Weather App',
        category: 'ReactJS Web App',
        img: MobileImage2,
        ProjectHeader: {
            title: 'Weather App',
            publishDate: 'Jul 26, 2021',
            tags: 'ReactJS / Axios',
        },
        ProjectUrl: 'weather-app',
    },
    {
        id: 3,
        title: 'iOS Instagram Clone',
        category: 'Swift Mobile Application',
        img: UIImage2,
    },
    {
        id: 4,
        title: 'iOS Threads Clone',
        category: 'Swift Mobile Application',
        img: MobileImage1,
    },
    {
        id: 5,
        title: 'iOS Messenger Clone',
        category: 'Swift Mobile Application',
        img: UIImage1,
    },
    {
        id: 6,
        title: 'Apple Design System',
        category: 'Web Application',
        img: WebImage1,
    },
];
