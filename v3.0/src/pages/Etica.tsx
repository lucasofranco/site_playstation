import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Heart, Users2, Briefcase } from "lucide-react";
import ethicsBanner from "@/assets/ethics-banner.jpg";

const Etica = () => {
  const ethicalPrinciples = [
    {
      icon: Scale,
      title: "Integridade",
      description: "Conduzimos nossos negócios com honestidade, transparência e respeito às leis e regulamentações."
    },
    {
      icon: Heart,
      title: "Respeito",
      description: "Valorizamos a diversidade e promovemos um ambiente inclusivo para todos os usuários e colaboradores."
    },
    {
      icon: Users2,
      title: "Responsabilidade Social",
      description: "Comprometidos com o desenvolvimento sustentável e impacto positivo nas comunidades que servimos."
    },
    {
      icon: Briefcase,
      title: "Governança Corporativa",
      description: "Mantemos padrões elevados de gestão ética e prestação de contas em todas as operações."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section 
          className="relative h-96 flex items-center justify-center"
          style={{ 
            backgroundImage: `url(${ethicsBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
          <div className="relative container mx-auto px-4 z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-12 h-12 text-primary" />
                <h1 className="text-5xl font-bold">Ética</h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Princípios éticos que orientam nossas decisões e práticas corporativas.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-3xl font-bold mb-6">Código de Ética Corporativa</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Nossa conduta é guiada por um conjunto de valores fundamentais que refletem nosso 
                  compromisso com práticas empresariais responsáveis e sustentáveis. Acreditamos que 
                  o sucesso empresarial deve estar alinhado com o bem-estar social e ambiental.
                </p>
                <p className="text-muted-foreground text-lg">
                  Todos os colaboradores, parceiros e fornecedores são incentivados a seguir estes 
                  princípios éticos, criando uma cultura organizacional baseada em confiança, 
                  respeito mútuo e responsabilidade compartilhada.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {ethicalPrinciples.map((principle, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <principle.icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle>{principle.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {principle.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card className="bg-muted/50 mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Práticas Éticas na Indústria de Jogos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Proteção de Menores</h3>
                    <p className="text-muted-foreground">
                      Implementamos controles parentais robustos e sistemas de classificação etária 
                      rigorosos para garantir que o conteúdo seja apropriado para cada faixa etária.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Jogo Responsável</h3>
                    <p className="text-muted-foreground">
                      Promovemos práticas saudáveis de entretenimento digital, incluindo ferramentas 
                      de monitoramento de tempo de jogo e recursos educacionais sobre uso equilibrado.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Diversidade e Inclusão</h3>
                    <p className="text-muted-foreground">
                      Comprometidos em representar e incluir todas as culturas, identidades e 
                      comunidades em nossos produtos e ambiente de trabalho.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Compromissos Éticos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Combate rigoroso a qualquer forma de discriminação ou assédio</li>
                    <li>• Transparência nas práticas de coleta e uso de dados dos usuários</li>
                    <li>• Remuneração justa e condições de trabalho dignas para todos os colaboradores</li>
                    <li>• Seleção de fornecedores baseada em critérios éticos e sustentáveis</li>
                    <li>• Investimento em projetos sociais e culturais nas comunidades locais</li>
                    <li>• Canal confidencial para denúncias de práticas antiéticas</li>
                    <li>• Revisão periódica e atualização das políticas éticas corporativas</li>
                  </ul>
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

export default Etica;
