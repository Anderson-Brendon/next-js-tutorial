import DashboardSkeleton from '@/app/ui/skeletons';
 
export default function Loading() {
  return <DashboardSkeleton />;
}

/*a técnica de streaming permite que os componentes carreguem paralelamente, 
 evitando o bloqueio do fetch entre os mesmos*/

/*o loading.tsx é um arquivo especial que funciona como falback
 enquanto um componente dinamico está carregando */

 
 /*o sidenav não é dinamico(não precisa fazer fetch dos dados) por isso carrega na 
 primeira renderização da página*/

 /*
 
  */