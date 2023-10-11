import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import { Image } from "./Image";
import { Link } from "react-router-dom";

export interface PhotoMetadata {
  aspectRatio: string;
}

interface Props {
  alt: string;
  category: string;
  title: string;
  titleWidth: number;
  photos: PhotoMetadata[];
}

export function Gallery({ category, alt, title, titleWidth, photos }: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const isPresent = useIsPresent();

  return (
    <article>
      <h1 style={{ "--base-width": `${titleWidth}vw`, x: "-50%" } as any}>
        {title}
      </h1>
      {photos.map(({ aspectRatio }, index) => (
        <Image
          category={category}
          index={index + 1}
          alt={alt}
          aspectRatio={aspectRatio}
        />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
      <footer className="back">
        <Link to="/">Back to galleries</Link>
      </footer>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </article>
  );
}
