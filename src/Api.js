import axios from 'axios';

// fetching user
const fetchUser = () => {
    console.log('fetching user....')
    return axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.date)
        .then(err => console.log(err))
};


// fetching post
const fetchPosts = () => {
    console.log('fetching Posts....')
    return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then(res => res.date)
        .then(err => console.log(err))
};