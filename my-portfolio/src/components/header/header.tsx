import Image from "next/image";

export function Header() {
  return (
      <div className='header'>
        <Image
          src="/profile.jpeg"
          alt="Profile Picture"
          width={200}
          height={200}
        />
        <div>
          <h1>Hi, I´m Fabio!</h1>
          <h2>Web Developer</h2>
        </div>
      </div>
  )
}