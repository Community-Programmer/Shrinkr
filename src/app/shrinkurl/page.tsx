"use client";

import { useState } from "react";
import styles from "./shrinkurl.module.scss";

import { FaLink } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

type urlData = {
  shortUrl: string;
  data: {
    originalUrl: string;
    shortUrlId: string;
    QrData: string;
  };
};

const shrinkurl = () => {
  const [longUrl, setLongUrl] = useState<string>("");

  const [urlData, seturlData] = useState<urlData>({
    shortUrl: "",
    data: { originalUrl: "", shortUrlId: "", QrData: "" },
  });

  const fetchData = async () => {
    try {
      const res = await axios.post("/api/shorturl", {
        longUrl,
      });
      console.log(res.data);
      seturlData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <span className="page__sub__heading">
        <FaLink fontSize={40} color="grey" />
        <h1>Shrinkr Url Shortner</h1>{" "}
      </span>
      <main className={styles.container}>
        <div className={styles.linkBox}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchData();
            }}
          >
            <label htmlFor="url">
              <IoLink /> Shorten a long URL
            </label>
            <div className={styles.urlBox}>
              <input
                type="url"
                name="url"
                id="url"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                placeholder="Enter long link here"
              />
              <button>Shorten URL</button>
            </div>
          </form>
        </div>
        <div className={styles.linkBox}>
          <Link href={`${urlData.shortUrl}`}>
            {urlData.shortUrl}
          </Link>
          <Image src={urlData.data.QrData} alt='qrCode' width={250} height={250}/>
        </div>
      </main>
    </>
  );
};

export default shrinkurl;
