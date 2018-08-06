'use strict';

const branch = process.env.BRANCH;

if(!branch) {
    console.error(`Environmental variable 'BRANCH' not set`);
    process.exit(3);
}

console.log(`branch = ${branch}`);
