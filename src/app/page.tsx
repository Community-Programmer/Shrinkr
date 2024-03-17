import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h1>
          <span>Shrinkr: </span>Your Ultimate URL Shortening and QR Code
          Generation Solution
        </h1>
        <p>
          Empower your links with Shrinkr! Simplify your URLs and elevate your
          communication with our seamless URL shortening and QR code generation
          services. Say goodbye to long, unwieldy links and hello to concise,
          shareable content. Join us and experience the convenience of Shrinkr
          today!
        </p>
        <button> Get Started</button>
      </div>

      <div className={styles.imageContainer}>
        <Image src={"/landingpage.jpg"} alt="" width={500} height={500} />
      </div>
    </main>
  );
}
