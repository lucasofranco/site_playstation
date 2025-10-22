import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle } from "lucide-react";
import securityBanner from "@/assets/security-banner.jpg";

const Seguranca = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Criptografia de Ponta a Ponta",
      description: "Todos os dados dos usuários são protegidos com criptografia avançada durante transmissão e armazenamento."
    },
    {
      icon: Eye,
      title: "Monitoramento 24/7",
      description: "Sistemas de segurança operam continuamente para detectar e prevenir ameaças em tempo real."
    },
    {
      icon: AlertTriangle,
      title: "Detecção de Fraudes",
      description: "Algoritmos inteligentes identificam e bloqueiam atividades suspeitas automaticamente."
    },
    {
      icon: CheckCircle,
      title: "Autenticação Multifator",
      description: "Camadas adicionais de verificação garantem que apenas usuários autorizados acessem contas."
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
            backgroundImage: `url(${securityBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
          <div className="relative container mx-auto px-4 z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-12 h-12 text-primary" />
                <h1 className="text-5xl font-bold">Segurança</h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Protegendo sua experiência digital com tecnologia de segurança de classe mundial.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-12">
                <h2 className="text-3xl font-bold mb-6">Compromisso com a Segurança</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  A segurança dos nossos usuários é nossa prioridade máxima. Implementamos múltiplas 
                  camadas de proteção para garantir que dados pessoais, informações de pagamento e 
                  atividades online estejam sempre protegidos contra ameaças digitais.
                </p>
                <p className="text-muted-foreground text-lg">
                  Nossa infraestrutura de segurança é constantemente atualizada para combater as 
                  ameaças mais recentes, utilizando tecnologias de ponta e melhores práticas da 
                  indústria de tecnologia.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {securityFeatures.map((feature, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Proteção de Dados Pessoais</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Conformidade com LGPD e GDPR para proteção de dados dos usuários</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Auditorias regulares de segurança realizadas por empresas especializadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Equipe dedicada de especialistas em segurança cibernética</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Resposta rápida a incidentes de segurança com protocolos estabelecidos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Educação contínua dos usuários sobre práticas seguras online</span>
                    </li>
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

export default Seguranca;
