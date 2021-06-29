import api from './api';

import GoldPass from '../src/goldpass/GoldPass';


;(async() => {
    // call -> /goldpass/seasons/current

    try {
        const goldPass = await GoldPass.get(api);
        console.log(goldPass);
    } catch (err) {
        console.log(err);
        return;
    }
})()

