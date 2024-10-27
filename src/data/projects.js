// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import { FiGithub, FiLinkedin } from 'react-icons/fi';

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
        ProjectImages: [
            { id: 1, title: 'Kabul Project Management UI', img: Image1 },
            { id: 2, title: 'Kabul Project Management UI', img: Image2 },
            {
                id: 3,
                title: 'Kabul Project Management UI',
                img: Image3,
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Infomation',
            CompanyInfo: [
                {
                    id: 1,
                    title: 'Demo Website',
                    details: 'jamievuong.netlify.app',
                    url: 'https://jamievuong-ecommerce.netlify.app',
                },
                {
                    id: 2,
                    title: 'GitHub',
                    details: 'github.com/HuyVuong08',
                    url: 'https://github.com/HuyVuong08/shopping-cart-react',
                },
                {
                    id: 3,
                    title: 'Tech Stack',
                    details: 'ReactJS, NodeJS, Context API',
                },
                {
                    id: 4,
                    title: 'Email',
                    details: 'huy.vuongle123@gmail.com',
                },
                {
                    id: 5,
                    title: 'Phone',
                    details: '+1 419 409 0908',
                },
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'TBA',
            Technologies: [
                {
                    title: 'Tech Stack',
                    techs: [
                        'ReactJS',
                        'useReducer() Hooks',
                        'React Router Dom',
                        'Context API',
                        'JavaScript',
                    ],
                },
            ],
            ProjectDetailsHeading: 'Challenge',
            ProjectDetails: [
                {
                    id: 1,
                    heading: 'Descriptions',
                    details:
                        'The Shopping Cart React Application is a dynamic and interactive e-commerce platform built using React and React-Bootstrap. It allows users to browse through a list of products, add items to their cart, and manage their shopping cart with ease. The application leverages context and reducers for state management, ensuring a seamless user experience.',
                },
                {
                    id: 2,
                    heading: 'Features',
                    details: [
                        {
                            heading: 'Product Listing',
                            details:
                                'Displays a list of products with details such as name, price, image, stock availability, delivery options, and ratings.',
                        },
                        {
                            heading: 'Shopping Cart Management',
                            details:
                                'Users can add products to the cart, adjust quantities, and remove items.',
                        },
                        {
                            heading: 'Search and Filter',
                            details:
                                'Includes functionality to search for products and filter them based on stock availability, fast delivery, and ratings.',
                        },
                        {
                            heading: 'Responsive Design',
                            details:
                                'Utilizes React-Bootstrap for a responsive and visually appealing design.',
                        },
                    ],
                },
                {
                    id: 3,
                    heading: 'Technologies Used',
                    details: [
                        {
                            heading: 'React',
                            details: 'For building the user interface.',
                        },
                        {
                            heading: 'React-Bootstrap',
                            details: 'For responsive and styled components.',
                        },
                        {
                            heading: 'Context API and Reducers',
                            details: 'For state management.',
                        },
                        {
                            heading: 'Faker.js',
                            details: 'For generating mock product data.',
                        },
                    ],
                },
                {
                    id: 4,
                    heading: 'Key Components',
                    details: [
                        {
                            heading: 'Context.js',
                            details:
                                "Manages the global state using React's Context API and reducers.  Initializes the product list with mock data generated by Faker.js.  Provides state and dispatch functions to the rest of the application.",
                        },
                        {
                            heading: 'Reducers.js',
                            details:
                                'Contains the logic for updating the state based on different actions, such as adding or removing items from the cart and updating product filters.',
                        },
                        {
                            heading: 'Cart.js',
                            details:
                                'Displays the items in the shopping cart and allows users to modify quantities or remove items.  Calculates the total price of items in the cart and rounds it to 2 decimal places.',
                        },
                        {
                            heading: 'Header.js',
                            details:
                                'Contains the navigation bar and search functionality.  Includes a dropdown menu for the shopping cart, aligned to the right.',
                        },
                        {
                            heading: 'ProductListing.js',
                            details:
                                'Displays the list of products and allows users to add items to their cart. Supports filtering and sorting of products based on user preferences.',
                        },
                    ],
                },
            ],
            SocialSharingHeading: 'Share This',
            SocialSharing: [
                {
                    id: 1,
                    name: 'GitHub',
                    icon: <FiGithub />,
                    url: 'https://github.com/HuyVuong08',
                },
                {
                    id: 2,
                    name: 'LinkedIn',
                    icon: <FiLinkedin />,
                    url: 'https://linkedin.com/',
                },
            ],
        },
        RelatedProject: {
            title: 'Related Projects',
            Projects: [
                {
                    id: 1,
                    title: 'Mobile UI',
                    img: Image4,
                },
                {
                    id: 2,
                    title: 'Web Application',
                    img: Image5,
                },
                {
                    id: 3,
                    title: 'UI Design',
                    img: Image6,
                },
                {
                    id: 4,
                    title: 'Kabul Mobile App UI',
                    img: Image3,
                },
            ],
        },
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
        ProjectImages: [
            {
                id: 1,
                title: 'Kabul Project Management UI',
                img: Image1,
            },
            {
                id: 2,
                title: 'Kabul Project Management UI',
                img: Image2,
            },
            {
                id: 3,
                title: 'Kabul Project Management UI',
                img: Image3,
            },
        ],
        ProjectInfo: {
            ClientHeading: 'Project Infomation',
            CompanyInfo: [
                {
                    id: 1,
                    title: 'Demo Website',
                    details: 'jamievuong.netlify.app',
                    url: 'https://jamievuong-weather.netlify.app',
                },
                {
                    id: 2,
                    title: 'GitHub',
                    details: 'github.com/HuyVuong08',
                    url: 'https://github.com/HuyVuong08/weather-app-react',
                },
                {
                    id: 3,
                    title: 'Tech Stack',
                    details: 'ReactJS, NodeJS, React Bootstrap, Context API',
                },
                {
                    id: 4,
                    title: 'Email',
                    details: 'huy.vuongle123@gmail.com',
                },
                {
                    id: 5,
                    title: 'Phone',
                    details: '+1 419 409 0908',
                },
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'TBA',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'ReactJS',
                        'useReducer() Hooks',
                        'React Router Dom',
                        'Context API',
                        'JavaScript',
                    ],
                },
            ],
            ProjectDetailsHeading: 'Challenge',
            ProjectDetails: [
                {
                    id: 1,
                    details: 'TBA',
                },
                {
                    id: 2,
                    details: 'TBA',
                },
                {
                    id: 3,
                    details: 'TBA',
                },
                {
                    id: 4,
                    details: 'TBA',
                },
            ],
            SocialSharingHeading: 'Share This',
            SocialSharing: [
                {
                    id: 1,
                    name: 'GitHub',
                    icon: <FiGithub />,
                    url: 'https://github.com/HuyVuong08',
                },
                {
                    id: 2,
                    name: 'LinkedIn',
                    icon: <FiLinkedin />,
                    url: 'https://linkedin.com/',
                },
            ],
        },
        RelatedProject: {
            title: 'Related Projects',
            Projects: [
                {
                    id: 1,
                    title: 'Mobile UI',
                    img: Image4,
                },
                {
                    id: 2,
                    title: 'Web Application',
                    img: Image5,
                },
                {
                    id: 3,
                    title: 'UI Design',
                    img: Image6,
                },
                {
                    id: 4,
                    title: 'Kabul Mobile App UI',
                    img: Image3,
                },
            ],
        },
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
