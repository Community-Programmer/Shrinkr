"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaLink } from 'react-icons/fa';

const page = () => {

    const [shortUrl, setShortUrl] = useState<string>('');


    const router = useRouter();

    const handleSubmit = async () => {
    
        const id = shortUrl.substring(shortUrl.lastIndexOf('/') + 1);
        router.push(`/analytics/${id}`)
      };

    

  return (
    <>
    <span className="page__sub__heading">
    <FaLink fontSize={40} color="grey" />
    <h1>Shrinkr Url Analytics</h1>
  </span>
    <main className='container'>
    <div className='linkBox'>
    <form  onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}>
    <label htmlFor="url">
       Enter Shorted link to get Analytics
    </label>
    <div className='urlBox'>
      <input
        type="url"
        name="url"
        id="url"
        value={shortUrl}
        onChange={(e) => setShortUrl(e.target.value)}
        placeholder="Enter shorted url here"
      />
        <button type="submit">Get Analytics</button>
 
    </div>
  </form>
  </div>
  </main>
  </>
  )
}

export default page