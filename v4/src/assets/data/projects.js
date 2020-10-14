export const projects = [
  {
    key: "DELTA",
    name: "DELTA",
    description:
      "A simple, yet difficult, word game made with React and Golang.",
    github: "https://github.com/chinanwu/delta-ui",
    link: "https://delta.chinanwu.com",
    technologies: {
      backend: "Go, Javascript, AWS",
      frontend: "React, Redux, Jest, Webpack, Babel, Less"
    },
    features: [
      "Hints for when players are stumped",
      "The optimal solution, as a learning opportunity",
      "Editing the game words to solve specific problems",
      "Daily challenge with a leaderboard"
    ],
    faq: [
      {
        question: "How was this deployed?",
        answer:
          "The frontend is deployed using AWS' CloudFront, while the backend is a series of AWS Lambdas hooked up to a AWS API Gateway which the frontend hits.",
        tldr: "AWS Cloudfront, API Gateway, Lambda functions."
      },
      {
        question: "How does this provide the optimal solution?",
        answer:
          "I made a package 'Solver' that solves the problem! To do that, it creates a graph of all the words, and connects nodes that are one letter off from one another. Then it simply finds the shortest path between the two problem words!",
        tldr: "A graph and a shortest path algorithm."
      },
      {
        question: "How are the Daily Challenges made?",
        answer:
          "Using similar code to the 'Solver', I did a bit of research on the problem set and I found that the majority of problems can be solved in under 10 steps. The problem sets that take more than 10 steps are the ones that make up a pool of problems that is then used to generate a daily challenge!",
        tldr: "A sub-list of problems that take more than 10 steps."
      }
    ]
  },
  {
    key: "DND",
    name: "DRAGONS 'N DUNGEONS",
    description:
      "An online D&D player sheet with “smart” fields and a responsive design.",
    github: "https://github.com/chinanwu/dragons-n-dungeons",
    technologies: {
      frontend: "React, Redux, Jest, Webpack, Babel, Less"
    },
    features: [
      "Auto-updates fields related to change applied",
      "Responsive design that allows for comfy usage no matter the screen size",
      "Minimized information displayed to counter information overload",
      "Fun themes"
    ]
  },
  {
    key: "POMELO-LIB",
    name: "POMELO-LIB",
    description:
      "A component library that comes in both React and Vue flavour.",
    github: "https://github.com/chinanwu/pomelo-lib",
    link: "https://chinanwu.github.io/pomelo-lib",
    technologies: {
      frontend: "React, Vue, Jest, Webpack, Babel, Less"
    }
  },
  {
    key: "SHOWCASE",
    name: "SHOWCASE",
    list: [
      {
        name: "AFFIRMER",
        description: "A site to made to help users with daily afirmations.",
        madeWith: "Vue",
        github: "https://github.com/chinanwu/affirmer",
        link: "https://chinanwu.github.io/affirmer"
      },
      {
        name: "MAGNET-POETRY",
        description: "A fake fridge to make real magnetic poetry with!",
        madeWith: "Vue",
        github: "https://github.com/chinanwu/magnet-poetry",
        link: "https://chinanwu.github.io/magnet-poetry"
      },
      {
        name: "SOLVER",
        description:
          "A small go package that finds the optimal solution to Delta problems!",
        madeWith: "Golang",
        github: "https://github.com/chinanwu/solver",
        link: "https://chinanwu.github.io/solver"
      }
    ]
  }
];

export default projects;
