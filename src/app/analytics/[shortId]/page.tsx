"use client"

import { urlData } from "@/app/shrinkurl/page";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { GiClick } from "react-icons/gi";



type Props = {
    params: {
      shortId: string;
    };
  };

type analyticsData =  urlData & {
    totalClicks: string;
  };
  
  


const ShortId = ({params}:Props) => {

    const {shortId} = params;

    const [analyticsData, setAnalyticsData] = useState<analyticsData | null>(null);

    const fetchAnalyticalData = async (shortId:string) => {
    
        try {
          const res = await axios.get(`/api/analytics/${shortId}`);
          console.log(res.data);
          setAnalyticsData(res.data);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(()=>{
          fetchAnalyticalData(shortId);
      },[shortId])


  return (
    <>
    <span className="page__sub__heading">
    <SiGoogleanalytics fontSize={40} color="grey" />
    <h1>Analytics</h1>
  </span>

<main className="container">


<div className="linkBox">

 <div className="analyticsBox">
  <h3><FaLink /> Original Url</h3>
  <span><Link href={analyticsData?.data.originalUrl || '#'}>{analyticsData?.data.originalUrl}</Link></span>


  <h3><FaLink />Shorted Url</h3>
  <span><Link href={analyticsData?.data.shortUrl || '#'}>{analyticsData?.data.shortUrl}</Link></span>

  <h3><GiClick/> Total Clicks</h3>
  <div className="CounterBox">
  <h1>{analyticsData?.totalClicks}</h1>
  </div>
  </div>
  </div>
  </main>
    </>
  )
}

export default ShortId