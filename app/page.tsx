import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-row items-center justify-evenly min-h-screen container-home">
        <div className="flex flex-col items-center gap-3">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
          />
          <h1 className="font-bold"><span className="emphasis">We</span> Form</h1>
        </div>
          
        <div className="flex flex-col items-center gap-3 mt-4">
          <h2 className="font-bold">Cadastre sua <span className="emphasis">Entidade</span> ou acesse dados de <span className="emphasis">parceiras</span></h2>
          <Link href="/entidade">
            <button className="button">Cadastrar Entidades</button>
          </Link>
          <button className="button">Ver Entidades Listadas</button>
        </div>

      </div>

    </>
  );
}
