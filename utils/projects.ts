import { PageContent } from '@/components/ExperiencePage'

export const projects: PageContent[] = [
  {
    title: 'Tellete',
    startDate: '2022',
    link: 'https://tellete-web.vercel.app/',
    summary: [
      'Web3 app that provides a privacy-focused decentralized messaging app',
      "Made a smart contract using solidity, hardhat, and deployed to Polygon's Mumbai testnet",
      'Made and deployed a Next.js app that uses the deployed smart contract for the messaging functionalities',
      'Uses tRPC and zod for making the end-to-end typesafe APIs',
      'Transactions with the smart contract happens on the backend with a dedicated account with enough MATIC for testing, so users just need to signup with their Metamask account and provide a signature for authorization and authentication purposes',
      'Uses asymmetric encryption technique for the messages',
    ],
  },
  {
    title: '2D Space shooter game',
    startDate: '2019',
    link: 'https://react2d-game.herokuapp.com/',
    summary: [
      'Made this "space invaders" inspired game when I was just starting out learning React and GraphQL',
      'This is not totally a finished game and is only playable in desktop view, but you can play it up to third round',
      'Uses KeystoneJS as a CMS for adding/updating enemies, levels, etc',
      'Uses Canvas API for the animations',
    ],
  },
  {
    title: 'Adventurers Trail',
    startDate: '2018',
    link: 'https://adventurerstrail.herokuapp.com/',
    summary: [
      'This is just a training project I made that uses vanilla javascript, express, mongodb, scss, ...and whatever is there',
      'Has CRUD functionalities',
      'Users can create a post about their adventures',
    ],
  },
]
