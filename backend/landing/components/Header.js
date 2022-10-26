import Image from 'next/image';

export default function Header() {
  return (
    <header className="masthead" style={{backgroundImage: "url(header-bg.jpg)"}}>
      <div className="container">
        <div className="masthead-subheading">Welcome To Our Studio!</div>
        <div className="masthead-heading text-uppercase">It&apos;s Nice To Meet You</div>
        <a className="btn btn-primary btn-xl text-uppercase" href="#services">
          Tell Me More
        </a>
      </div>
    </header>
  );
}
