import fs from "fs";



export function readDir() {
  fs.readdirSync(".").forEach(file => {
    console.log(file);
  });
}