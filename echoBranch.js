'use strict';

const branch = process.env.BRANCH_NAME;

if(!branch) {
    console.error(`Environmental variable 'BRANCH_NAME' not set`);
    process.exit(3);
}

console.log(`branch = ${branch}`);
