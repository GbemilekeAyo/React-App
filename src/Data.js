  
 export const service = [
{
    id: 1,
    largetxt: 1,
    title: "Precise",
    info:"Curabitur cursus mattis ligula a maximus pellentesque in purus malesuada pharetra eros. ",
    path: ""
},

{
    id: 2,
    largetxt: 2,
    title: "Support",
    info:"Curabitur cursus mattis ligula a maximus pellentesque in purus malesuada pharetra eros. ",
    path: ""
},


{
    id: 3,
    largetxt: 3,
    title: "Responsive",
    info:"Curabitur cursus mattis ligula a maximus pellentesque in purus malesuada pharetra eros. ",
    path: ""
},

]


export const clients = [
    {
        id: 1,
        name: "Peter Hall",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "ceo",
        avatar: require("./Images/quote_image_02.jpg")
    },
    {
        id: 2,
        name: "Jane Williams",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Designer",
        avatar: require("./Images/quote_image_03.jpg")
    },
    {
        id: 3,
        name: "John Smith",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "guru",
        avatar: require("./Images/quote_image_04.jpg")
    }
]




const News1 = require('./Images/blog_img_01.jpg')
const News2 = require('./Images/blog_img_02.jpg')
const News3 = require('./Images/blog_img_03.jpg')





export const news = [
    {
    id: 1,
    image: News1,
    title: "How to write Mogue of duste love",
    info: "Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global death ..."
},

{
    id: 2,
    image: News2,
    title: "Epochs encyclopa galactica stellar",
    info: "Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global death ..."
},

{
    id: 3,
    image: News3,
    title: "How to write Mogue of duste love",
    info: "Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global death ..."
}
]





export const price = [
    
    {
        id: 1,
        largetxt: 1,
        name: 'Basic',
        price: 25,
        features: [
            {feature: 'Ulimited Support', available: true},
            {feature: '5GB Server Space', available: true},
            {feature: '2 Users per Prohect', available: true},
            {feature: 'Email Integration', available: false},
            {feature: 'Unlimited Download', available: false},
        ]
    },
    {
        id: 2,
        largetxt: 2,
        name: 'Advanced',
        price: 50,
        features: [
            {feature: 'Ulimited Support', available: true},
            {feature: '5GB Server Space', available: true},
            {feature: '2 Users per Prohect', available: true},
            {feature: 'Email Integration', available: true},
            {feature: 'Unlimited Download', available: false},
        ]
    },
    {
        id: 3,
        largetxt: 3,
        name: 'Expert',
        price: 75,
        features: [
            {feature: 'Ulimited Support', available: true},
            {feature: '5GB Server Space', available: true},
            {feature: '2 Users per Prohect', available: true},
            {feature: 'Email Integration', available: true},
            {feature: 'Unlimited Download', available: true},
        ]
    }
    ]


    const Team1 = require('./Images/about_item_01.jpg')
    const Team2 = require('./Images/about_item_02.jpg')
    const Team3 = require('./Images/about_item_03.jpg')





    export const team =[
        {
            id:1,
            image: Team1,
            position:"CEO",
            name:"Marty Stone",
            description:"Code the energy hidden in matter citizens of distant epochs sun. Citizens of distant epochs encyclopaedia galant ctica the ash of stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim ipsam volupta tem quia voluptas sit aspernatur aut odit aut fugit radio telescope quis nostrum exercitatio nem ullam corporis suscipit laboriosam quis."
        },

        {
            id:2,
            image: Team2,
            position:"Designer",
            name:"Johnson Williams",
            description:"Code the energy hidden in matter citizens of distant epochs sun. Citizens of distant epochs encyclopaedia galant ctica the ash of stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim ipsam volupta tem quia voluptas sit aspernatur aut odit aut fugit radio telescope quis nostrum exercitatio nem ullam corporis suscipit laboriosam quis."
        },
        {
            id:3,
            image: Team3,
            position:"Developer",
            name:"Vanessa Doe",
            description:"Code the energy hidden in matter citizens of distant epochs sun. Citizens of distant epochs encyclopaedia galant ctica the ash of stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim ipsam volupta tem quia voluptas sit aspernatur aut odit aut fugit radio telescope quis nostrum exercitatio nem ullam corporis suscipit laboriosam quis."
        }
    ]



    export const milestone =[
        {
            id:1,
            rate: 135,
            title:"Terabyte of files uploaded",
            description:"Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis pharetra."
        },

        {
            id:2,
            rate: 67,
            title:"Lines of css code wrote",
            description:"Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis pharetra."
        },
        {
            id:3,
            rate: 74,
            title:"Cups of coffee drinked per week",
            description:"Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis pharetra."
        },

        {
            id:4,
            rate: 389,
            title:"Happy clients served this year",
            description:"Nulla ac laoreet est, a mollis nibh. Aenean eget auctor velit quis pharetra."
        }
    ]