import type { NextApiRequest, NextApiResponse } from "next";

import Axios from "../../components/api/Axios";
import { ResponseType } from "../../types/apiResponseTypes";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let page = Number(req.query.page || 1);
  let page_size = Number(req.query.page_size || 30);
  let skip = (page - 1) * page_size;
  const response = await Axios.get<ResponseType>("/IN", {
    params: { limit: page_size, skip: skip },
  });

  // console.log(response.data);
  response.data.results.map((item) => {
    item.stateCode = Number(item.stateCode);
    item.accuracy = Number(item.accuracy);
    item.lat = Number(item.lat);
    item.lon = Number(item.lon);
  });

  return res.status(200).json(response.data);
}
