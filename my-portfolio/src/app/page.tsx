import { Header } from "@/components/header/header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className='experience'>
        <h3>Experience</h3>
        <p>Texto</p>
        <div className='experience-time'></div>
        <div className='infos'>
          <h3>Languages</h3>
          <div className='languages-info'>
            <span>
              <Image
                src="/🇺🇸.png"
                alt="Bandeira USA"
                width={24}
                height={24}
              /> EN - Fluent
            </span>
            <span>
              <Image
                src="/🇧🇷.png"
                alt="Bandeira Brasil"
                width={24}
                height={24}
              /> PT-BR - Native Speaker
            </span>
          </div>
          <h3>Education</h3>
          <div className='educational-info'>
            <span>🎓</span>
            <span>Analysis and Systems Development - Toledo Prudente</span>
          </div>
        </div>
      </div>
    </main>
  )
}
