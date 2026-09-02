import { copyFileSync, existsSync } from "node:fs";

const example = ".env.example";
const target = ".env.local";

if (existsSync(target)) {
  console.log(`${target} already exists, leaving it as is.`);
} else {
  copyFileSync(example, target);
  console.log(`Created ${target} from ${example}. Fill in the real keys before running the app.`);
}

console.log("Next: fill in .env.local, then run npm run db:migrate, then npm run dev.");
