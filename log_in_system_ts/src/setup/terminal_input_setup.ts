import * as readline from "readline";

export const input = async (msg): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  process.stdout.write(msg);
  let result;
  for await (const line of rl) {
    result = line;
    rl.close();
  }
  return result;
};
