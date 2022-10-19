import { FormEvent, useState } from 'react';
import { Envelope, Lock } from 'phosphor-react';
import axios from 'axios';

import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text'
import { TextInput } from '../../components/TextInput';
import { Logo } from '../../Logo';

import BannerImg from '../../assets/servers.gif';

export function SignIn() {
  const [isUserSignIn, setIsUserSignIn] = useState(false);

  async function handleSignIn(event: FormEvent){
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'teste@email.com.br',
      password: 'senhateste123'
    });

    setIsUserSignIn(true);
  }

  return (
    <>
    <div className='w-screen h-screen flex flex-col md:flex-row items-stretch'>
      <aside className='md:w-6/12 flex flex-col bg-[#fff] justify-center items-center'>
        <img src={BannerImg} alt="Banner" className='md:max-w-[620px] sm:max-w-[320px]'/>
        <div className='flex flex-col md:pl-4 md:pr-32 sm:w-full sm:pr-24 sm:pl-8'>
          <Heading className='font-semibold mt-8 text-cyan-600' size='lg' >
            Monitore suas aplicações e sistemas na nuvem em tempo real.
          </Heading>
          <Text className='font-medium mt-1 text-gray-400' size='md'>
            Receba avisos e alertar assim que sistema ou aplicações forem identificados off-line, acompanhe serviços e atividades de suas aplicações
          </Text>
        </div>
      </aside>
    
      <div className="md:w-6/12 h-screen bg-cyan-600 flex flex-col items-center justify-center text-gray-100">
        <header className='flex flex-col items-center sm:mt-12'>
          <Logo />
            <Heading className='mt-4'>
              System Monitor
            </Heading>

            <Text size="lg" className="text-gray-200 mt-1">
              Faça login e monitore seus sistemas!
            </Text>
        </header>
        
        {isUserSignIn && (
          <Text size='lg'>Login realizado com sucesso!</Text>
        )}

        <form onSubmit={handleSignIn} className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-3'>
            <label htmlFor="email">
              <Text>Endereço de e-mail</Text>
              <TextInput.Root>
                <TextInput.Incon>
                  <Envelope/>
                </TextInput.Incon>
                <TextInput.Input type="email" placeholder='Digite seu email'/>
              </TextInput.Root>
            </label>
            <label htmlFor="password">
              <Text>Sua senha</Text>
              <TextInput.Root>
                <TextInput.Incon>
                  <Lock/>
                </TextInput.Incon>
                <TextInput.Input type="password" placeholder='Digite sua senha'/>
              </TextInput.Root>
            </label>

            <label htmlFor='remember' className='flex items-center gap-2'>
              <Checkbox id='remember'/>
              <Text size='sm' className='text-gray-200'>Lembra login por 30 dias.</Text>
            </label>

            <Button type="submit" className='mt-4'>
              Entrar na plataforma
            </Button>
        </form>

        <footer className='flex flex-col items-center mt-8 gap-4'>
          <Text size='sm' className='text-gray-200 underline hover:text-gray-100'>
            <a href="#" >Esqueceu sua senha?</a>
          </Text>
          <Text size='sm' className='text-gray-200 underline hover:text-gray-100'>
            <a href="#" >Não possui conta? Crie uma agora!</a>
          </Text>
          <div className='flex items-baseline gap-1 flex-row'>
           
            <Text size='sm'>
              &copy; 2022 - HF NET | v0.0.1
            </Text>
          </div>
        </footer>
        </div> 
    </div>
    </>
  )
}