'use client'
import { useRouter } from "next/navigation";

export default function CampoAtuacao() {
  const router = useRouter();
  return (
    <>
      <h1>Hello, criar novo campo de atuação!</h1>
      <button
        className="button"
        onClick={() => router.push("/")}
      >
        Voltar à página inicial
      </button>
    </>
  );
}