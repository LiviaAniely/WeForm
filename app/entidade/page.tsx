import Link from "next/link";

export default function Entidade() {  
  return (
    <>
      <h1>Cadastro de Entidade</h1>
      <Link href="/">
        <button className="button">Voltar à página inicial</button>
      </Link>
    </>
  );
}