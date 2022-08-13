import type { NextApiRequest, NextApiResponse } from "next";

import Axios from "../../components/api/Axios";
import { ResponseItem } from "../../types/apiResponseTypes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id || 1;
  const response = await Axios.get<ResponseItem>(`/IN/${id}`);

  let data = {
    ...response.data,
    stateCode: Number(response.data.stateCode),
    lat: Number(response.data.lat),
    lon: Number(response.data.lon),
    accuracy: Number(response.data.accuracy),
  };

  return res.status(200).json(data);
}
