const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(                     
        ["Gimli", "Aragorn", "Legolas"],       // Names
        ["https://imgur.com/gallery/LwcRPn0.png", // Images
        "https://imgur.com/gallery/0p9lK3K.png", 
        "https://imgur.com/gallery/D3DH1KN.png"],
        [100, 200, 300],                    // HP values
        [100, 50, 25],
        "Gollum", // Boss name
        "https://imgur.com/gallery/OM3wb4O.png", // Boss image
        10000, // Boss hp
        50 // Boss attack damage                       
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
    
    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Minted NFT #1");
  
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #2");
  
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #3");
  
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #4");
  
    console.log("Done deploying and minting!");
  
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