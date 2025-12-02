'use client'
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  function getField(labelText:string, placeholderText:string, typeInput:string = "text") {
    return (
      <div className="flex flex-col">
        <label className="label">{labelText}</label>
        <input
          className="input"
          type={typeInput}
          placeholder={placeholderText}
        />
      </div>
    ); 
  }

  function cadastrarEntidade() {
    return (
      <>
        <div className="flex">
          <button
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setShowForm(false);
              router.push("/");
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} style={{ color: "#ffffff" }} size="2xl" />
          </button>
          <h2
            className="font-bold text-4xl"
          >
            <span className="emphasis">Nova</span> Entidade
          </h2>
        </div>

        <form>
          {getField("Nome da Entidade", "nome")}
          <div className="flex flex-col">
            <label className="label">Campo de Atuação</label>
            <select name="campoAtuacao" className="input">
              <option>Selecione uma opção</option>
              <option value="abrigoAnimais">Abrigo de Animais</option>
              <option value="centroAlimentacao">Centro de Alimentação</option>
              <option value="crecheAnimais">Creche de Animais</option>
            </select>
          </div>
          {getField("Campo de Coleta", "campo de coleta")}
        </form>

        <button
          style={{ cursor: 'pointer', width: '100%', margin: '50px 0 0 0' }}
          className="button"
          onClick={() => {
            setShowForm(false);
            router.push("/");
          }}
        >
          Cadastrar
        </button>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-row items-center justify-center min-h-screen container-home">
        <div className="flex flex-col items-center gap-3">
          <Image
            className="dark:invert"
            src="/main-image.svg"
            alt="Next.js logo"
            width={500}
            height={500}
          />
          <h1 className="font-bold text-7xl"><span className="emphasis">We</span> Form</h1>
        </div>
          
        <div
          style={{
            padding: '40px',
            width: '600px',
            height: '500px',
            border: '1px solid var(--foreground)',
            borderRadius: '8px',
            marginLeft: '40px',
          }}
        >
          {showForm ? (
            cadastrarEntidade()
          ) : (
            <div className="flex flex-col h-full items-center gap-3">
              <div className="flex flex-col items-center gap-3">
                <h2
                  className="font-bold text-4xl text-center"
                  style={{ marginBottom: '50px' }}
                >
                  Cadastre sua <span className="emphasis">Entidade</span> ou acesse dados de <span className="emphasis">parceiras</span>
                </h2>

                <button
                  className="button"
                  onClick={() => setShowForm(true)}
                >
                  Cadastrar Entidades
                </button>

                <button
                  className="button"
                  onClick={() => router.push("/entidades")}
                >
                  Ver Entidades Listadas
                </button>
              </div>

              <div className="mt-auto flex flex-col items-center gap-1">
                <h3>Sua entidade não se enquadra nos campos de atuação disponíveis?</h3>
                <button
                  onClick={() => router.push("/campoAtuacao")}
                  style={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                  Clique aqui para sugerir um novo campo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
