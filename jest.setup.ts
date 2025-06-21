import '@testing-library/jest-dom';

import fetch from 'cross-fetch';

// o con node-fetch en CJS:
// const fetch = require('node-fetch');

global.fetch = fetch;
