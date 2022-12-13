import moment from 'moment';

moment.updateLocale(moment.locale(), { invalidDate: '-' });

export const INSTANT_FORMAT = 'YYYY-MM-DD HH:mm:ss.SSS';
export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const ORDINAL_DATE_FORMAT = 'YYYY-MM-DD HH:mm';
export const DATE_FORMAT = 'YYYY-MM-DD';

export const formatInstant = (date: any) => moment(date).format(INSTANT_FORMAT);
export const formatDateTime = (date: any) => moment(date).format(DATE_TIME_FORMAT);
export const formatOrdinalDate = (date: any) => moment(date).format(ORDINAL_DATE_FORMAT);
export const formatDate = (date: any) => moment(date).format(DATE_FORMAT);
export const getDateNow = () => formatInstant(new Date());

//all values are indicated in milliseconds
export const SECOND = 1000;
export const MINUTE = 60000;
export const HOUR = 3600000;
