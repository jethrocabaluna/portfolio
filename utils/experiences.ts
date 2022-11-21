import { PageContent } from '@/components/ExperiencePage'

export const experiences: PageContent[] = [
  {
    title: 'SiteMinder',
    startDate: 'June 2021',
    endDate: 'present',
    subtitle: 'Senior Software Engineer',
    summary: [
      'Work with the product that allows hotel chains to easily manage room rates across their hotels',
      'Made enhancements on the syncing system of our product for making sure the hotels and room rates data are in synced with the other products of SiteMinder, and make sure necessary retries are in place',
      'Made improvements on our monitoring system for any warnings or errors across our microservices, and create new ones for un-monitored and new functionalities',
      'Made improvements on deploying builds, infrastructure, and configurations across multiple environments',
      'Made enhancements and new components and features on the frontend and backend',
      'Write end-to-end and unit tests for my pull requests with high coverage',
      'Work mainly with Typescript, Node.js, Vue, GraphQL, MySQL, Sequelize, Docker, Kubernetes, Terraform, AWS KDS/SQS/Lambda/S3, Cloudwatch, Prometheus, Grafana, Graylog, Buildkite',
    ],
    summarySize: 'base',
  },
  {
    title: 'Lokal App',
    startDate: 'February 2021',
    endDate: 'August 2022 (paused development)',
    subtitle: 'Freelance Backend and CMS Developer',
    summary: [
      'Work part-time as a Full Stack Developer for a start-up project about an e-commerce mobile app',
      'Work on the backend for creating REST APIs to be used by the mobile app',
      'Work on creating a custom CMS for the admins',
      'Work on creating a custom CMS for the sellers for easier management of their products in desktop version',
      'Work mainly with Firebase, Typescript, React, Node.js, Next.js, Algolia',
    ],
  },
  {
    title: 'Haven, Inc (now FourKites)',
    startDate: 'November 2019',
    endDate: 'June 2021',
    subtitle: 'Software Engineer',
    summary: [
      'Work on a shipment booking platform web application that also provides other services like track and trace, and showing shipments and containers that has anomalies like delays',
      'Made improvements on our track and trace by enhancing web scraping logic for shipping companies like Maersk, Evergreen, Hapag-Lloyd, and more, and create new web scrapers for new supported shipping companies',
      'Made a new service for determining and showing the shipments and containers that has anomalies based on the latest track and trace data',
      'Work mainly with Typescript, Node.js, React, Angular2, GraphQL, NestJS, Loopback3, MariaDB, Puppeteer, Docker, AWS ECS/S3',
    ],
  },
  {
    title: 'Code and Theory',
    startDate: 'May 2018',
    endDate: 'November 2019',
    subtitle: 'Software Engineer',
    summary: [
      'Work on building mobile-first responsive websites with top-notch designs and visuals by our designers',
      'Have been assigned to 7 or 8 projects and had an opportunity to work with vast range of technology with the old and new clients',
      "Most notable work for me is being a main frontend developer for the company's own website www.codeandtheory.com",
      'Work mainly with React, Node.js, GraphQL, jQuery, PHP, SQL, Wordpress, CraftCMS',
    ],
  },
  {
    title: 'Trend Micro',
    startDate: 'August 2016',
    endDate: 'February 2018',
    subtitle: 'Threat Response Engineer',
    summary: [
      "Undergone a 6-months training for doing analysis of different types of malware like trojan, worm, virus, ransomware, etc, and creating a script using the Company's own tool for detecting multiple variants of a malware",
      'Work on analysis of malicious softwares by debugging/reading source code down to assembly code to understand the behavior and figure out patterns that can be used to be able to write a script that can detect multiple variants of that malware',
      "Write scripts that can detect multiple variants of a malware while making sure that it will not also detect non-malware files in the consumer's machines",
      'Work mainly on analysis/debugging/reading of malware codes written mostly with C, C++, bash script, Java, Python, VBScript, JScript',
    ],
  },
]
