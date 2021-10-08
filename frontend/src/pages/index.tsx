import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import  SafeEnvironment  from '../ui/components/feedback/SafeEnvironment'
import { PageTitle } from '../ui/components/data-display/PageTitle'
import { UserInformation } from 'ui/components/data-display/UserInformation'


const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
      title = {'Conheça os Profissionais'}
      subtitle = {'Preencha o seu endereço e veja todos os profissionais da sua localidade'}/>

      <UserInformation 
      name={'Giovanna Sousa'}
      rating={5}
      description="Natural de Bom Sucesso/MG, 22 anos"/>
      <UserInformation name={'Clarice Rodrigues'}
      rating={5}
      description="Natural de Varginha/MG, 25 anos"/>
      <UserInformation name={'Ana Luísa Costa'}
      rating={5}
      description="Natural de Lavras/MG, 31 anos"/>
    </div>
  )
}

export default Home