'use client'
import { createCampoDeAtuacao, getCampoDeAtuacao } from "@/services/CampoDeAtuacaoService";
import { createEntidade } from "@/services/EntidadeService";
import { CampoDeAtuacaoDTO } from "@/types/campoDeAtuacao";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  // Form de Entidade
  const [showEntidadeForm, setshowEntidadeForm] = useState(false);
  const [nome, setNome] = useState("");
  const [campoDeColeta, setCampoDeColeta] = useState("");
  const [campoDeAtuacaoId, setCampoDeAtuacaoId] = useState(-1);
  const [camposDeAtuacao, setCamposDeAtuacao] = useState<CampoDeAtuacaoDTO[]>([]);

  // Form de Campo de Atuação
  const [showCampoDeAtuacaoForm, setShowCampoDeAtuacaoForm] = useState(false);
  const [campoDeAtuacao, setCampoDeAtuacao] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      const data = await getCampoDeAtuacao();
      if (isMounted) {
        setCamposDeAtuacao(data);
        console.log('campos de atuacao: ', camposDeAtuacao);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  function getField(labelText:string, placeholderText:string, setValor: (value: string) => void, typeInput:string = "text") {
    return (
      <div className="flex flex-col">
        <label className="label">{labelText}</label>
        <input
          className="input"
          type={typeInput}
          placeholder={placeholderText}
          onChange={(e) => setValor(e.target.value)}
        />
      </div>
    ); 
  }

  function submitEntidadeForm(event: React.FormEvent) {
    event.preventDefault();

    const entidadeData = {
      nome,
      campoDeAtuacaoId,
      campoDeColeta,
    };

    try {
      createEntidade(entidadeData);
    } catch (error) {
      console.error("Erro ao cadastrar entidade:", error);
    }
  }

    function submitCampoDeAtuacaoForm(event: React.FormEvent) {
    event.preventDefault();

    const campoDeAtuacaoData = {
      campo: campoDeAtuacao,
    };

    try {
      createCampoDeAtuacao(campoDeAtuacaoData);
    } catch (error) {
      console.error("Erro ao cadastrar campo de atuação:", error);
    }
  };

  function cadastrarEntidade() {
    return (
      <>
        <div className="flex">
          <button
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setshowEntidadeForm(false);
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
          {getField("Nome da Entidade", "nome", setNome)}
          <div className="flex flex-col">
            <label className="label">Campo de Atuação</label>
            <select
              name="campoAtuacao"
              className="input"
              value={campoDeAtuacaoId}
              onChange={(e) => {
                console.log('valor selecionado: ', e.target?.value);
                // setCampoDeAtuacaoId(e.target?.value);
              }}
            >
              <option>Selecione uma opção</option>
              {camposDeAtuacao.map((item) => (
                <option key={item.campo} value={item.campo}>
                  {item.campo}
                </option>
              ))}
            </select>
          </div>
          {getField("Campo de Coleta", "campo de coleta", setCampoDeColeta)}
        </form>

        <button
          style={{ cursor: 'pointer', width: '100%', margin: '50px 0 0 0' }}
          className="button"
          onClick={(e) => {
            setshowEntidadeForm(false);
            submitEntidadeForm(e)
            router.push("/");
          }}
        >
          Cadastrar
        </button>
      </>
    );
  }

  function cadastrarCampoDeAtuacao() {
    return (
      <>
        <div className="flex">
          <button
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setShowCampoDeAtuacaoForm(false);
              router.push("/");
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} style={{ color: "#ffffff" }} size="2xl" />
          </button>
          <h2
            className="font-bold text-4xl"
          >
            <span className="emphasis">Novo</span> Campo de Atuação
          </h2>
        </div>

        <form>
          {getField("Campo de Atuação", "campo de atuação", setCampoDeAtuacao)}
        </form>

        <button
          style={{ cursor: 'pointer', width: '100%', margin: '50px 0 0 0' }}
          className="button"
          onClick={(e) => {
            setshowEntidadeForm(false);
            submitCampoDeAtuacaoForm(e)
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
          {showEntidadeForm ? (
            cadastrarEntidade()
          ) : 
            showCampoDeAtuacaoForm?
              cadastrarCampoDeAtuacao() : 
            (
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
                    onClick={() => setshowEntidadeForm(true)}
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
                    onClick={() => setShowCampoDeAtuacaoForm(true)}
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    Clique aqui para sugerir um novo campo
                  </button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
}
