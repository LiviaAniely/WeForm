'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  function cadastrarEntidade() {
    return (
      <>
        <h1>Cadastro de Entidade</h1>
          <button
            className="button"
            onClick={() => {
              setShowForm(false);
              router.push("/");
            }}
          >
            Voltar à página inicial
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
