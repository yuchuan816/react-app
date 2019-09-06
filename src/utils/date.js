import moment from 'moment';

export const date2commonDate = (date) => moment(date).format('YYYY-MM-DD HH:mm');
