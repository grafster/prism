import { Dictionary } from '@stoplight/types';
import { Options } from 'yargs';
import * as pino from 'pino';

const sharedOptions: Dictionary<Options> = {
  port: {
    alias: 'p',
    description: 'Port that Prism will run on.',
    default: 4010,
    demandOption: true,
    number: true,
  },

  host: {
    alias: 'h',
    description: 'Host that Prism will listen to.',
    default: '127.0.0.1',
    demandOption: true,
    string: true,
  },

  cors: {
    description: 'Enables CORS headers.',
    boolean: true,
    default: true,
  },

  multiprocess: {
    alias: 'm',
    description: 'Forks the http server from the CLI for faster log processing.',
    boolean: true,
    default: process.env.NODE_ENV === 'production',
  },

  errors: {
    description: 'Specifies whether request/response violations marked as errors will produce an error response',
    required: true,
    boolean: true,
    default: false,
  },

  verboseLevel: {
    alias: 'v',
    description: 'Turns on verbose logging.',
    default: 'info',
    demandOption: true,
    // log level choices: "silent" | "fatal" | "error" | "warn" | "info" | "debug" | "trace"
    // custom levels like "success" and "start" are set to the same severity value as "info"
    choices: Object.keys(pino.levels.values).concat('silent')
  },
};

export default sharedOptions;
