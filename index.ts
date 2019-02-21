'use strict';

import parseArgv from '@dkh-dev/parse-argv';

/**
 * Node.js process.argv parsed.
 */
const argv = parseArgv(process.argv);

export default argv;
