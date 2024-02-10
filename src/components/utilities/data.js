import frontendpic from '../../assets/coding_5741785.png'
import softskillpic from '../../assets/icons8-skill-50.png'
import backendpic from '../../assets/icons8-backend-development-48.png'
import toolspic from '../../assets/icons8-tools-50.png'
import eccommerce from '../../assets/eccommerce pic.png';
import pmapp from '../../assets/Screenshot (pmapp).png'
import game from '../../assets/Screenshot (9).png'


export const SkillsData = [
    {   
        id:1,
        
        
        title:'Frontend',
        image:frontendpic,
        skills:[
            {skill:'HTML5', percentage:'80%'},
            {skill:'CSS', percentage:'80%'},
            {skill:'JavaScript', percentage:'70%'},
            {skill:'React.js', percentage:'65%'},
            {skill:'Bootstrap', percentage:'60%'},
            {skill:'Tailwind', percentage:'35%'},
            {skill:'JQuery', percentage:'70%'}
        ],
    },

    {   
        id:2,
        title:'Backend',
        image:backendpic,
        skills:[
            {skill:'Python', percentage:'50%'},
            {skill:'Node.js', percentage:'60%'},
            {skill:'Express.js', percentage:'60%'},
            {skill:'MongoDB', percentage:'40%'},
            {skill:'PostgreSQL', percentage:'40%'}
            
        ],
    },

    {   
        id:3,
        title:'Tools',
        image:toolspic,
        skills:[
            {skill:'Git % GitHub', percentage:'40%'},
            {skill:'Visual studio Code', percentage:'80%'},
            {skill:'Responsive Design', percentage:'60%'},
            {skill:'Devtools', percentage:'70%'},
            
            
        ],
    },

    {   
        id:4,
        title:'Soft Skills',
        image:softskillpic,
        skills:[
            {skill:'Problem-solving', percentage:'70%'},
            {skill:'Team player', percentage:'90%'},
            {skill:'Attention to Detail', percentage:'80%'},
            {skill:'TimeManagement', percentage:'65%'},
            {skill:'Self-Learning', percentage:'90%'}
            
        ],
    },
    
]


export const ProjectData = [
    {
    id:1,
    name:'project one',
    projectpic:eccommerce,
    github_link:'https://github.com/peterjr99/my-online-store',
    live_Demo:'https://my-store-hosting.web.app/',
},
{
    id:2,
    name:'project',
    projectpic:pmapp,
    github_link:'https://github.com/peterjr99/project-management-App',
    live_Demo:'https://65c1b67c2e5fca31858d496c--pm99.netlify.app/',
},
{
    id:3,
    name:'project three',
    projectpic:game,
    github_link:'https://github.com/peterjr99/stop-timer-game',
    live_Demo:'https://stoptimegame.netlify.app/',
},
]
