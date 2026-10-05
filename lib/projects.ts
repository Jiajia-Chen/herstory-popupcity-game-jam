export type Project = {
  id: string;
  title: string;
  author: string;
  description: string;
  category: "互动游戏" | "随身工具" | "城市社交" | "实验作品";
  accent: "pink" | "mint" | "lavender" | "gold";
  status: "verified" | "review";
  version: string;
  size: string;
  installs: number;
};

export const projects: Project[] = [
  {
    id: "nushu-exchange",
    title: "女书秘密交换机",
    author: "Jiajia",
    description: "两台 Passport 靠近后交换一段只属于彼此的女书字句，并留下相遇记录。",
    category: "城市社交",
    accent: "pink",
    status: "verified",
    version: "1.0.0",
    size: "698 KB",
    installs: 128,
  },
  {
    id: "city-oracle",
    title: "城市今日签",
    author: "小七",
    description: "从 Pop-up City 的活动、天气与情绪里抽取一张今日行动卡。",
    category: "随身工具",
    accent: "mint",
    status: "verified",
    version: "0.8.2",
    size: "1.2 MB",
    installs: 96,
  },
  {
    id: "night-walk",
    title: "夜游像素地图",
    author: "Momo",
    description: "用三个按键探索城市夜路，在沿途收集灯牌、声音和陌生人的线索。",
    category: "互动游戏",
    accent: "lavender",
    status: "review",
    version: "0.4.0",
    size: "2.6 MB",
    installs: 42,
  },
  {
    id: "hardware-diary",
    title: "硬件情绪日记",
    author: "阿遥",
    description: "每天用一个按键和一段声音记录状态，重新刷回应用后仍能找回历史。",
    category: "实验作品",
    accent: "gold",
    status: "verified",
    version: "1.1.0",
    size: "884 KB",
    installs: 73,
  },
];
