import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Vinicius" },
    { id: 2, name: "Vinicius Alexsander" },
    { id: 3, name: "Vinicius Alexsander Lima" },
    { id: 4, name: "Vinicius Alexsander Lima Marinho" },
  ];

  return response.json(users);
};
