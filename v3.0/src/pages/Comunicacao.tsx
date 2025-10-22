import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Globe, Headphones } from "lucide-react";
import communicationBanner from "@/assets/communication-banner.jpg";

const Comunicacao = () => {
  const communicationChannels = [
    {
      icon: MessageSquare,
      title: "Chat Online",
      description: "Sistema de mensagens em tempo real para interação entre jogadores durante partidas e navegação na plataforma."
    },
    {
      icon: Users,
      title: "Comunidades",
      description: "Grupos temáticos onde jogadores compartilham experiências, estratégias e formam conexões duradouras."
    },
    {
      icon: Globe,
      title: "Suporte Multilíngue",
      description: "Atendimento disponível em diversos idiomas para garantir acessibilidade global aos nossos serviços."
    },
    {
      icon: Headphones,
      title: "Suporte Técnico",
      description: "Equipe especializada disponível para auxiliar usuários com questões técnicas e dúvidas sobre produtos."
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
            backgroundImage: `url(${communicationBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
          <div className="relative container mx-auto px-4 z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-12 h-12 text-primary" />
                <h1 className="text-5xl font-bold">Comunicação</h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Conectando jogadores através de canais eficientes e seguros de comunicação global.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-3xl font-bold mb-6">Estratégias de Comunicação</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  A comunicação é fundamental para criar uma experiência de jogo envolvente e 
                  colaborativa. Nossa plataforma oferece múltiplos canais que permitem aos jogadores 
                  se conectarem, compartilharem experiências e construírem relacionamentos significativos.
                </p>
                <p className="text-muted-foreground text-lg">
                  Investimos continuamente em tecnologias que melhoram a qualidade da comunicação, 
                  garantindo baixa latência, clareza de áudio e ferramentas eficientes de moderação 
                  para manter um ambiente respeitoso e inclusivo.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {communicationChannels.map((channel, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <channel.icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle>{channel.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {channel.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card className="bg-muted/50 mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Comunicação Corporativa</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Transparência</h3>
                    <p className="text-muted-foreground">
                      Mantemos nossos usuários informados sobre atualizações, mudanças de políticas 
                      e novos recursos através de comunicados claros e acessíveis.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Feedback da Comunidade</h3>
                    <p className="text-muted-foreground">
                      Valorizamos a opinião dos jogadores e mantemos canais abertos para sugestões, 
                      críticas e ideias que ajudam a moldar o futuro da plataforma.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Responsabilidade Social</h3>
                    <p className="text-muted-foreground">
                      Comunicamos ativamente nossas iniciativas de responsabilidade social e 
                      sustentabilidade, demonstrando compromisso com valores além do entretenimento.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Moderação e Segurança</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Para garantir um ambiente saudável de comunicação, implementamos:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Filtros automáticos de conteúdo inapropriado</li>
                    <li>• Sistema de denúncias acessível e responsivo</li>
                    <li>• Equipe de moderadores treinados disponível 24/7</li>
                    <li>• Diretrizes claras de conduta comunitária</li>
                    <li>• Ferramentas de bloqueio e privacidade personalizáveis</li>
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

export default Comunicacao;
