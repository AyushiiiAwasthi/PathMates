export type Unit = {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
    }
  | { type: "treasure" };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    description: "Learn about Complexity",
    backgroundColor: "bg-[#235390]",
    textColor: "text-blue-500",
    borderColor: "border-[#1e4177]",
    tiles: [
      {
        type: "star",
        description: "What is time complexity?",
      },
      {
        type: "book",
        description: "What is space complexity?",
      },
      {
        type: "star",
        description: "What is Big-O notation?",
      },
      { type: "treasure" },
      { type: "book", description: "what is small-O ?" },
      { type: "trophy", description: "Unit 1 review" },
    ],
  },
  {
    unitNumber: 2,
    description: "Learn sorting techniques",
    backgroundColor: "bg-[#ce82ff]",
    textColor: "text-[#ce82ff]",
    borderColor: "border-[#a568cc]",
    tiles: [
      { type: "fast-forward", description: "What is inplace sorting?" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "Bubble sort" },
      { type: "treasure" },
      { type: "star", description: "Radix Sort" },
      { type: "book", description: "Insertion Sort" },
      { type: "star", description: "Merge Sort" },
      { type: "book", description: "Revision" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "trophy", description: "Unit 2 review" },
    ],
  },
  {
    unitNumber: 3,
    description: "Learn Arrays",
    backgroundColor: "bg-[#00cd9c]",
    textColor: "text-[#00cd9c]",
    borderColor: "border-[#00a47d]",
    tiles: [
      { type: "fast-forward", description: "what is an array?" },
      { type: "book", description: "1D Array" },
      { type: "star", description: "Search in an array" },
      { type: "treasure" },
      { type: "book", description: "Reverse an array" },
      { type: "star", description: "Count frequency of element" },
      { type: "treasure" },
      { type: "dumbbell", description: "Personalized practice" },
      { type: "book", description: "2D array" },
      { type: "trophy", description: "Unit 2 review" },
    ],
  },
];
