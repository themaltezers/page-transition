import { Logo } from "./Logo";

export function Footer({ title = "", url = "" }) {
  return (
    <footer id="sandbox-title">
      <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer">
        <Logo />
      </a>
      <a href={url} target="_blank" rel="noreferrer">
        <code>{title}</code>
      </a>
    </footer>
  );
}
