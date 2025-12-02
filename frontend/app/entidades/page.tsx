'use client';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import './styles.css';

export default function Entidade() { 
  const router = useRouter();

  function getItemListagem(nomeEntidade:string, campoAtuacao:string) {
    return (
      <>
        <div className="flex items-center justify-between">
          <span style={{ marginRight: '10px' }}>{nomeEntidade}</span>
          <h3>{campoAtuacao}</h3>
        </div>
        <hr style={{ margin: '10px 0 10px 0' }}/>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col h-full items-center">
        <h1
        className="font-bold text-7xl text-center"
        style={{ marginTop: '50px' }}
        >
          <span className="emphasis">We</span> Form
        </h1>
        <div
          className="flex flex-col"
          style={{
            border: '1px solid white',
            width: '40%',
            height: '80%',
            marginTop: '50px',
            padding: '20px',
            borderRadius: '8px',
          }}>
          <div className="flex" style={{ marginBottom: '20px' }}>
            <button
            style={{ cursor: 'pointer' }}
            onClick={() => {
              router.push("/");
            }}
            >
              <FontAwesomeIcon icon={faAngleLeft} style={{ color: "#ffffff" }} size="2xl" />
            </button>
            <h2
              className="font-bold text-4xl"
            >
              <span className="emphasis">Entidades</span> Cadastradas
            </h2>
          </div>

          <div id="listagem">
            {getItemListagem("Abrigo Vida Animal", "Abrigo de Animais")}
            {getItemListagem("Nosso Prato", "Centro de Alimentação")}
            {getItemListagem("Creche do Sol", "Creche Infantil")}
          </div>
        </div>
      </div>
    </>
  );
}