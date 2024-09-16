import axios from "axios";

export async function getMyLocation(x: string = '0' , y:string = '0') {

  const response = await axios.get(`https://dapi.kakao.com/v2/local/geo/coord2regioncode`, {
    headers: {
      Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`
    },
    params: {
      x,
      y
    }
  });
  return response;

}
