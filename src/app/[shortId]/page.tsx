import { getShortUrl } from "@/libs/getUrl";
import { updateAnalytics } from "@/libs/updateAnalytics";
import { permanentRedirect } from "next/navigation";


type Props = {
    params: {
      shortId: string;
    };
  };

const page = async({params}:Props) => {
    const { shortId } = params;

    const shortUrl = await getShortUrl(shortId);
    await updateAnalytics(shortId);
    return permanentRedirect(shortUrl.originalUrl);
}

export default page