const topics = [
  {
    name: "Web Development",
    icon: "/icons/webdev.png",
    code: "web",
  },
  {
    name: "Machine Learning",
    icon: "/icons/ml.png",
    code: "ml",
  },
  {
    name: "Data Structures",
    icon: "/icons/dsa.png",
    code: "dsa",
  },
  {
    name: "Blockchain",
    icon: "/icons/blockchain.jpg",
    code: "blockchain",
  },
  {
    name: "App Development",
    icon: "/icons/appdev.png",
    code: "app",
  },
  {
    name: "UI/UX Design",
    icon: "/icons/uiux.png",
    code: "uiux",
  },
];

export type Topic = (typeof topics)[number];
export default topics;
