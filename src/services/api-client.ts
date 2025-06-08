import axios from 'axios';

export default axios.create({
        baseURL: 'https://api.rawg.io/api',
        params: {
                key: '304fffda882c4d278ff0b391e0a5267b'
        }
})