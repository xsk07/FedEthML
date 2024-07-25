# FedEthML

### Blockchain and Distributed Ledger Technologies project - Sapienza Università di Roma

Our Dapp, FedEthML, shows how the blockchain technology can be adopted to address
two of the main issues of Federated Learning. The first is centralization: the central
server is replaced by the blockchain, and any adversarial behavior of the central node is
therefore prevented. The second issue is represented by the lazy/adversarial behavior
of training nodes. This problem is (partially) solved by introducing an incentive
mechanism based on the proof-of-stake upon which the Ethereum environment relies

Different workers with different datasets will participate in the training, which will be coordinated by a smart contract deployed on an Ethereum blockchain.

For further details check the <a href="https://github.com/michelegranatiero/blockchain-project/blob/main/Report.pdf" >Report</a>.

------
USAGE:

'cd' into the root folder.

If it's the first time you open this project, run: 'npm install' to install all the dependencies.

'npx hardhat node' to spin up a local developement blockchain.

In another terminal:

'npx hardhat compile' to compile the contract inside the contracts folder.

'npx hardhat run --network hardhat ./scripts/deploy.js' to deploy the smart contract.

'python ./scripts/python/number_oracle.py' starts and oracle sending random numbers to the smart contract (they are needed for some stuff).

In another terminal:

'npm run dev' starts the web app.

------
IMPORTANT: This project uses IPFS from Pinata. To correctly create and visualize the tasks you need to correctly place your Pinata credentials in the ipfsFunctions.jsx file.

------

<img src="https://github.com/michelegranatiero/blockchain-project/blob/main/public/frontend-images/home-light.png" width=800>
<img src="https://github.com/michelegranatiero/blockchain-project/blob/main/public/frontend-images/home-dark.png" width=800>
<img src="https://github.com/michelegranatiero/blockchain-project/blob/main/public/frontend-images/task-dep-light.png" width=800>
<img src="https://github.com/michelegranatiero/blockchain-project/blob/main/public/frontend-images/newTask-light.png" width=800>
<img src="https://github.com/michelegranatiero/blockchain-project/blob/main/public/frontend-images/task-lastRound-light.png" width=800>
