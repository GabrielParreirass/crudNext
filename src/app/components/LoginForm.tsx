"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [psswd, setPsswd] = useState("");

  const router = useRouter();

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    console.log(email)
    console.log(psswd)

    if(email != "" && psswd != ""){
        router.push('/pages/home')
    }else{
        alert("Insira uma senha e email")
    }

    setEmail("")
    setPsswd("")
  };

  return (
    <div>
      <form onSubmit={ (e) => handleSubmit(e) }>
        <h2 className="mb-4 text-center">Bem vindo ao cadastro de animais</h2>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            id="email"
            className="rounded border border-black p-1"
            placeholder=" Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            className="rounded border border-black p-1"
            placeholder=" Senha"
            value={psswd}
            onChange={(e) => setPsswd(e.target.value)}
          />
          <Button variant="outline" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
