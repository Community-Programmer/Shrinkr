import { getShortUrl } from "@/libs/getUrl";
import { permanentRedirect } from "next/navigation";


type Props = {
    params: {
      shortId: string;
    };
  };

const page = async({params}:Props) => {
    const { shortId } = params;

    const shortUrl = await getShortUrl(shortId);
    return permanentRedirect(shortUrl.originalUrl);
}

export default page