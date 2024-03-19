"use client";

import { useState } from "react";

import { FaLink } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";

import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

export type urlData = {
  data: {
    originalUrl: string;
    shortUrlId: string;
    shortUrl: string;
    QrData: string;
    timestamp: Date[];
  };
};

const Shrinkurl = () => {
  const [longUrl, setLongUrl] = useState<string>("");

  const [urlData, seturlData] = useState<urlData>({
    data: { originalUrl: "", shortUrlId: "", shortUrl:"", QrData: "", timestamp:[] },
  });

  const fetchData = async () => {
    try {
      const res = await axios.post("/api/shorturl", {
        longUrl,
      });
      console.log(res.data);
      seturlData(res.data);
      setLongUrl(res.data.shortUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const copylink = () => {
    navigator.clipboard.writeText(urlData.data.shortUrl);
  };

  const downloadImage = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = urlData.data.QrData;
    link.download = `${urlData.data.shortUrlId}.png`;
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    // Clean up
    document.body.removeChild(link);
  };
  return (
    <>
      <span className="page__sub__heading">
        <FaLink fontSize={40} color="grey" />
        <h1>Shrinkr Url Shortner</h1>
      </span>
      <main className='container'>
        <div className='linkBox'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchData();
            }}
          >
            <label htmlFor="url">
              <IoLink /> Shorten a long URL
            </label>
            <div className='urlBox'>
              <input
                type="url"
                name="url"
                id="url"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                placeholder="Enter long link here"
              />
              {urlData.data.shortUrl !== "" ? (
                <button type="button" onClick={copylink}>
                  Copy URL
                </button>
              ) : (
                <button type="submit">Shorten URL</button>
              )}
            </div>
          </form>
          {urlData.data.shortUrl !== "" ?
          <div className='displayBox'>
            <div className='leftSection'>
              <h3>Shorted Url</h3>
              <span>
                <Link href={`${urlData.data.shortUrl}`}>{urlData.data.shortUrl}</Link>
                <MdContentCopy onClick={copylink} cursor="pointer" size={20} />
              </span>

              <div className='btnContainer'>
                <button>Analytics</button> <button>Short another URL</button>
              </div>
              <h3>Share</h3>
              <div className='socialLinks'>
                <WhatsappShareButton url={urlData.data.shortUrl}>
                  <WhatsappIcon size={40}/>
                </WhatsappShareButton>

                <TelegramShareButton url={urlData.data.shortUrl}>
                  <TelegramIcon size={40}/>
                </TelegramShareButton>

                <EmailShareButton url={urlData.data.shortUrl}>
                  <EmailIcon  size={40}/>
                </EmailShareButton>

                <FacebookShareButton url={urlData.data.shortUrl}>
                  <FacebookIcon size={40} />
                </FacebookShareButton>

                <LinkedinShareButton url={urlData.data.shortUrl}>
                <LinkedinIcon size={40}/>
                </LinkedinShareButton>
                
                <RedditShareButton url={urlData.data.shortUrl}>
                  <RedditIcon size={40}/>
                </RedditShareButton>

              </div>
            </div>

            <div className='rightSection'>
              <Image
                src={urlData.data.QrData}
                alt="qrCode"
                width={200}
                height={200}
              />
              <button onClick={downloadImage}>Download</button>
            </div>
          </div> : ''}
        </div>
      </main>
    </>
  );
};

export default Shrinkurl;
