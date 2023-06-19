import type { NextApiRequest, NextApiResponse } from "next";
import { TweetData } from "types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.body.input);
    const contents: TweetData[] = [
      {
        id: "0",
        content: "Hello, this is a tweet!",
        name: "ブタさん",
        profilePicture:
          "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
        label: 0,
      },
      {
        id: "1",
        content: "はむはむはむ！",
        name: "ハムスター",
        profilePicture:
          "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
        label: 0,
      },
      {
        id: "2",
        content: "パンダです。",
        name: "熊猫",
        profilePicture:
          "https://4.bp.blogspot.com/-xHGCCaOsEIU/VCIixHoXZTI/AAAAAAAAmfQ/Ek3BjRbafrQ/s800/animal_panda.png",
        label: 0,
      },
      {
        id: "3",
        content: "Hello, this is a tweet!",
        name: "ブタさん2",
        profilePicture:
          "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
        label: 1,
      },
      {
        id: "4",
        content: "はむはむはむ！",
        name: "ハムスター2",
        profilePicture:
          "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
        label: 1,
      },
      {
        id: "5",
        content: "パンダです。",
        name: "熊猫2",
        profilePicture:
          "https://4.bp.blogspot.com/-xHGCCaOsEIU/VCIixHoXZTI/AAAAAAAAmfQ/Ek3BjRbafrQ/s800/animal_panda.png",
        label: 1,
      },
      {
        id: "6",
        content: "Hello, this is a tweet!",
        name: "ブタさん3",
        profilePicture:
          "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
        label: 0,
      },
      {
        id: "7",
        content: "はむはむはむ！",
        name: "ハムスター3",
        profilePicture:
          "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
        label: 0,
      },
      {
        id: "8",
        content: "パンダです。",
        name: "熊猫3",
        profilePicture:
          "https://4.bp.blogspot.com/-xHGCCaOsEIU/VCIixHoXZTI/AAAAAAAAmfQ/Ek3BjRbafrQ/s800/animal_panda.png",
        label: 0,
      },
      {
        id: "9",
        content: "Hello, this is a tweet!",
        name: "ブタさん4",
        profilePicture:
          "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
        label: 1,
      },
      {
        id: "10",
        content: "はむはむはむ！",
        name: "ハムスター4",
        profilePicture:
          "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
        label: 1,
      },
      {
        id: "11",
        content: "パンダです。",
        name: "熊猫4",
        profilePicture:
          "https://4.bp.blogspot.com/-xHGCCaOsEIU/VCIixHoXZTI/AAAAAAAAmfQ/Ek3BjRbafrQ/s800/animal_panda.png",
        label: 1,
      },
      {
        id: "12",
        content: "Hello, this is a tweet!",
        name: "ブタさん5",
        profilePicture:
          "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
        label: 0,
      },
      {
        id: "13",
        content: "はむはむはむ！",
        name: "ハムスター5",
        profilePicture:
          "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
        label: 0,
      },
      {
        id: "14",
        content: "パンダです。",
        name: "熊猫5",
        profilePicture:
          "https://4.bp.blogspot.com/-xHGCCaOsEIU/VCIixHoXZTI/AAAAAAAAmfQ/Ek3BjRbafrQ/s800/animal_panda.png",
        label: 0,
      },
      {
        id: "15",
        content: "Hello, this is a tweet!",
        name: "ブタさん6",
        profilePicture:
          "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
        label: 1,
      },
      {
        id: "16",
        content: "はむはむはむ！",
        name: "ハムスター6",
        profilePicture:
          "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
        label: 1,
      },
      {
        id: "17",
        content: "パンダです。",
        name: "熊猫6",
        profilePicture:
          "https://4.bp.blogspot.com/-xHGCCaOsEIU/VCIixHoXZTI/AAAAAAAAmfQ/Ek3BjRbafrQ/s800/animal_panda.png",
        label: 1,
      },
      {
        id: "18",
        content: "Hello, this is a tweet!",
        name: "ブタさん7",
        profilePicture:
          "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
        label: 0,
      },
      {
        id: "19",
        content: "はむはむはむ！",
        name: "ハムスター7",
        profilePicture:
          "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
        label: 0,
      },
      {
        id: "20",
        content: "パンダです。",
        name: "熊猫7",
        profilePicture:
          "https://4.bp.blogspot.com/-xHGCCaOsEIU/VCIixHoXZTI/AAAAAAAAmfQ/Ek3BjRbafrQ/s800/animal_panda.png",
        label: 0,
      },
      {
        id: "21",
        content: "Hello, this is a tweet!",
        name: "ブタさん8",
        profilePicture:
          "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
        label: 1,
      },
      {
        id: "22",
        content: "はむはむはむ！",
        name: "ハムスター8",
        profilePicture:
          "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
        label: 1,
      },
      {
        id: "23",
        content: "パンダです。",
        name: "熊猫8",
        profilePicture:
          "https://4.bp.blogspot.com/-xHGCCaOsEIU/VCIixHoXZTI/AAAAAAAAmfQ/Ek3BjRbafrQ/s800/animal_panda.png",
        label: 1,
      },
      {
        id: "24",
        content: "Hello, this is a tweet!",
        name: "ブタさん9",
        profilePicture:
          "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
        label: 0,
      },
      {
        id: "25",
        content: "はむはむはむ！",
        name: "ハムスター9",
        profilePicture:
          "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
        label: 0,
      },
      {
        id: "26",
        content: "パンダです。",
        name: "熊猫9",
        profilePicture:
          "https://4.bp.blogspot.com/-xHGCCaOsEIU/VCIixHoXZTI/AAAAAAAAmfQ/Ek3BjRbafrQ/s800/animal_panda.png",
        label: 0,
      },
      {
        id: "27",
        content: "Hello, this is a tweet!",
        name: "ブタさん10",
        profilePicture:
          "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
        label: 1,
      },
      {
        id: "28",
        content: "はむはむはむ！",
        name: "ハムスター10",
        profilePicture:
          "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
        label: 1,
      },
      {
        id: "29",
        content: "パンダです。",
        name: "熊猫10",
        profilePicture:
          "https://4.bp.blogspot.com/-xHGCCaOsEIU/VCIixHoXZTI/AAAAAAAAmfQ/Ek3BjRbafrQ/s800/animal_panda.png",
        label: 1,
      },
      {
        id: "30",
        content: "Hello, this is a tweet!",
        name: "ブタさん11",
        profilePicture:
          "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
        label: 0,
      },
      {
        id: "31",
        content: "はむはむはむ！",
        name: "ハムスター11",
        profilePicture:
          "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
        label: 0,
      },
      {
        id: "32",
        content: "パンダです。",
        name: "熊猫11",
        profilePicture:
          "https://4.bp.blogspot.com/-xHGCCaOsEIU/VCIixHoXZTI/AAAAAAAAmfQ/Ek3BjRbafrQ/s800/animal_panda.png",
        label: 0,
      },
      {
        id: "33",
        content: "Hello, this is a tweet!",
        name: "ブタさん12",
        profilePicture:
          "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
        label: 1,
      },
      {
        id: "34",
        content: "はむはむはむ！",
        name: "ハムスター12",
        profilePicture:
          "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
        label: 1,
      },
      {
        id: "35",
        content: "パンダです。",
        name: "熊猫12",
        profilePicture:
          "https://4.bp.blogspot.com/-xHGCCaOsEIU/VCIixHoXZTI/AAAAAAAAmfQ/Ek3BjRbafrQ/s800/animal_panda.png",
        label: 1,
      },
      {
        id: "36",
        content: "Hello, this is a tweet!",
        name: "ブタさん13",
        profilePicture:
          "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
        label: 0,
      },
      {
        id: "37",
        content: "はむはむはむ！",
        name: "ハムスター13",
        profilePicture:
          "https://3.bp.blogspot.com/-n0PpkJL1BxE/VCIitXhWwpI/AAAAAAAAmfE/xLraJLXXrgk/s800/animal_hamster.png",
        label: 0,
      },
      {
        id: "38",
        content: "パンダです。",
        name: "熊猫13",
        profilePicture:
          "https://4.bp.blogspot.com/-xHGCCaOsEIU/VCIixHoXZTI/AAAAAAAAmfQ/Ek3BjRbafrQ/s800/animal_panda.png",
        label: 0,
      },
      {
        id: "39",
        content: "Hello, this is a tweet!",
        name: "ブタさん14",
        profilePicture:
          "https://3.bp.blogspot.com/-2VIWJTc7MBs/VCIiteBs3wI/AAAAAAAAmec/BkjJno4Qh5U/s800/animal_buta.png",
        label: 1,
      },
    ];
    res.status(200).json(contents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default handler;
