import { hello } from "./hello.js";
import { say } from "./say.ts";
import { v4 } from "uuid";
import * as data from "./test.json"

hello("Vite");
say("Hi");
console.log(v4());
console.log(data.name);
console.log(data.description);