import weatherImg from '../assets/weather.jpg'
import portfolioImg from '../assets/portfolio.jpg'
import todoImg from '../assets/todo.jpg'

export const Data = [
    {
        id: 0,
        image: weatherImg,
        title: "weather API",
        description: "A weather app using Openweather.com API. A real time API with mutliple call options based on city, latitude and longitude.",
        tech: ["nextJS, Express, REST API, Redux"]
    },
    {
        id: 1,
        link: "https://rohandagale.com/",
        image: portfolioImg,
        title: "Portfolio",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis itaque tempora aut ullam delectus obcaecati eveniet deleniti reprehenderit iusto explicabo accusantium, minus a eaque officiis placeat? Tenetur officiis nesciunt illum?",
        tech: ["nextJS, Express, REST API, Redux"]
    },
    {
        id: 2,
        image: todoImg,
        title: "to do",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis itaque tempora aut ullam delectus obcaecati eveniet deleniti reprehenderit iusto explicabo accusantium, minus a eaque officiis placeat? Tenetur officiis nesciunt illum?",
        tech: ["nextJS, Express, REST API, Redux"]
    },
    {
        id: 3,
        image: <weatherImg />,
        title: "weather API",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis itaque tempora aut ullam delectus obcaecati eveniet deleniti reprehenderit iusto explicabo accusantium, minus a eaque officiis placeat? Tenetur officiis nesciunt illum?",
        tech: ["nextJS, Express, REST API, Redux"]
    }
]