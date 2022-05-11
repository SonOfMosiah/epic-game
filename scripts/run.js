const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Gimli", "Aragorn", "Legolas"],       // Names
    ["https://imgur.com/gallery/LwcRPn0", // Images
    "https://imgur.com/gallery/0p9lK3K", 
    "https://imgur.com/gallery/D3DH1KN"],
    [100, 200, 300],                    // HP values
    [100, 50, 25],
    "Gollum", // Boss name
    "https://imgur.com/gallery/OM3wb4O.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage                      // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    console.log("Done!");
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();