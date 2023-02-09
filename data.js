let products = [
    {
        id:1,
        title: 'Pişik evi',
        price: 42,
        img: './imgs/sec_two_photo1.png'
    },
    {
        id:2,
        title: 'İt üçün köynək',
        price: 60,
        img: './imgs/sec_two_photo2.png'
    },
    {
        id:3,
        title: 'Yemək qabları',
        price: 35,
        img: './imgs/sec_two_photo3.png'
    },
    {
        id:4,
        title: 'Müxtəlif tasmalar',
        price: 22,
        img: './imgs/sec_two_photo4.png'
    }
]
let sebet = JSON.parse(localStorage.getItem('sebet')) || []

let likes = JSON.parse(localStorage.getItem('likes')) || []

let users = JSON.parse(localStorage.getItem('users')) || [
    {
        id: 1,
        email:'orxan@gmail.com',
        phoneNumber:'0772776688',
        userName: 'Mirzayefx',
        password: '12345',
        fullName: 'Orkhan Mirzayev'
    },
]
