import axios from 'axios';
import moment from 'moment';

const api = 'http://datos.gov.co/resource/ceyp-9c7c.json';

export const TrmRepository = {
    getTrmValue : async () => {
        const date = moment().format('YYYY-MM-DD');
        const res = await axios.get(`${api}?vigenciadesde=${date}`);
        return res.data;
    }
}