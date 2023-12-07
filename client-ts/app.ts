// Example in test-app's index.js
import {helloWorld} from 'hello-world-module';
import {defaultFunction} from 'hello-world-module';

import {helloWorld as hwesm} from 'hello-world-module-esm';

console.log(helloWorld());
console.log(defaultFunction())

console.log(hwesm());