import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

/*todas as sub-rotas da rota "dashboard" vão receber esse componente,
 que é comum a todos desta rota*/

 /*o nome do arquivo layout.tsx é um padrao  do nextjs que reconhece automaticamente como 
 um componente que será utilizado por outros componente a partir da rota dashboard*/