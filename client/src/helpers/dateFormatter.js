import moment from 'moment';

const dateFormatter = dateStr => {
  let date = new Date(dateStr);
  moment(date).format('LL');
  return date;
};

export default dateFormatter;
