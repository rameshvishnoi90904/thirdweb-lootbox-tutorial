import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0xAADF0B280eF94293A114A2ab6F2cAC701B7390B1';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}