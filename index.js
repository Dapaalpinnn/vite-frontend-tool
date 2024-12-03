import { hello } from "./hello.js";
import { say } from "./say.ts";
import { v4 } from "uuid";

hello("Vite");
say("Hi");
console.log(v4());