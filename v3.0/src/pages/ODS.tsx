import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Recycle, Users } from "lucide-react";

const ODS = () => {
  const odsGoals = [
    {
      number: "4",
      title: "Educação de Qualidade",
      description: "Utilizamos jogos educacionais e programas de treinamento para promover aprendizado acessível e inclusivo."
    },
    {
      number: "8",
      title: "Trabalho Decente e Crescimento Econômico",
      description: "Criamos empregos de qualidade e apoiamos desenvolvedores independentes no crescimento sustentável."
    },
    {
      number: "9",
      title: "Indústria, Inovação e Infraestrutura",
      description: "Investimos em pesquisa e desenvolvimento de tecnologias inovadoras para o futuro do entretenimento."
    },
    {
      number: "12",
      title: "Consumo e Produção Responsáveis",
      description: "Implementamos práticas sustentáveis na fabricação de consoles e embalagens recicláveis."
    },
    {
      number: "13",
      title: "Ação Contra a Mudança Global do Clima",
      description: "Reduzimos emissões de carbono nas operações e promovemos conscientização ambiental."
    },
    {
      number: "17",
      title: "Parcerias e Meios de Implementação",
      description: "Colaboramos com organizações globais para alcançar objetivos sustentáveis compartilhados."
    }
  ];

  const initiatives = [
    {
      icon: Lightbulb,
      title: "Inovação Sustentável",
      description: "Desenvolvimento de produtos com menor impacto ambiental e maior eficiência energética."
    },
    {
      icon: Recycle,
      title: "Economia Circular",
      description: "Programas de reciclagem de eletrônicos e reutilização de materiais na produção."
    },
    {
      icon: Users,
      title: "Inclusão Social",
      description: "Iniciativas para tornar o entretenimento digital acessível a todas as comunidades."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Target className="w-12 h-12 text-primary" />
                <h1 className="text-5xl font-bold">Alinhamento com a ODS</h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Compromisso com os Objetivos de Desenvolvimento Sustentável das Nações Unidas.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12 text-center">
                <h2 className="text-3xl font-bold mb-6">O que são os ODS?</h2>
                <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
                  Os Objetivos de Desenvolvimento Sustentável (ODS) são uma agenda mundial adotada 
                  pela ONU com 17 objetivos e 169 metas para alcançar um futuro mais sustentável 
                  até 2030. Como empresa de tecnologia e entretenimento, contribuímos ativamente 
                  para diversos desses objetivos.
                </p>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">ODS Prioritários</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {odsGoals.map((goal, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-lg">
                              {goal.number}
                            </span>
                          </div>
                          <CardTitle className="text-lg">{goal.title}</CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {goal.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Nossas Iniciativas</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {initiatives.map((initiative, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <initiative.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle>{initiative.title}</CardTitle>
                        <CardDescription className="text-base">
                          {initiative.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Metas e Compromissos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Até 2030</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Reduzir em 50% as emissões de carbono nas operações globais</li>
                      <li>• Alcançar 100% de energia renovável em todos os centros de dados</li>
                      <li>• Garantir que 90% dos materiais de embalagem sejam recicláveis</li>
                      <li>• Investir US$ 100 milhões em projetos de educação e inclusão digital</li>
                      <li>• Capacitar 1 milhão de pessoas através de programas educacionais</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-8 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-2xl">Relatório de Sustentabilidade</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-4">
                    Publicamos anualmente relatórios detalhados sobre nosso progresso em relação 
                    aos ODS, incluindo métricas transparentes, desafios enfrentados e planos futuros.
                  </p>
                  <p>
                    Acreditamos que a transparência é fundamental para manter a responsabilidade 
                    corporativa e inspirar outras empresas do setor a adotarem práticas sustentáveis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ODS;
