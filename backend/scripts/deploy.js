const hre = require("hardhat");

async function main() {
  const Message = await hre.ethers.getContractFactory("Message");
  const message = await Message.deploy("Halo Breyy!");
  await message.waitForDeployment();
  console.log("Message deployed to:", message.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});








// const hre = require("hardhat");

// async function main() {
//   const Greeter = await hre.ethers.getContractFactory("Greeter");
//   const greeter = await Greeter.deploy();
//   await greeter.waitForDeployment()
//   console.log("jalan deploy : ", greeter.target);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// })