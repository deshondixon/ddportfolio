// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { services } from '/Users/deshondixon/projects/side_projects/ddportfolio/portfolio/data.ts';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(services);
  res.status(200).json({ services });
}
