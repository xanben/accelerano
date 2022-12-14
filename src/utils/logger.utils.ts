import { getDateNow } from './date.utils';

const APP_NAME = process.env.APPLICATION_NAME;

export interface Trace {
  traceId: string;
  spanId: string;
}

const log = (type: string, message: string, trace?: Trace) => {
  const traceInfo = trace ? `[${APP_NAME},${trace.traceId},${trace.spanId}]` : `[${APP_NAME}]`;

  console.log(`${getDateNow()} ${type} ${traceInfo} ${message}`);
};

export const LOG = {
  info: (message: string, trace?: Trace) => log('INFO', message, trace),
  error: (message: string, trace?: Trace) => log('ERROR', message, trace)
};
