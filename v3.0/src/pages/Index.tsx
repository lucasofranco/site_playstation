import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, MessageSquare, Scale, Lock, Target, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-playstation.jpg";
import ps5Image from "@/assets/products/ps5-console.jpg";
import dualsenseImage from "@/assets/products/dualsense.jpg";
import godOfWarImage from "@/assets/products/god-of-war.jpg";
import spidermanImage from "@/assets/products/spiderman-2.jpg";
import pulse3dImage from "@/assets/products/pulse-3d.jpg";
import psvr2Image from "@/assets/products/psvr2.jpg";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Proteção avançada de dados e privacidade dos usuários.",
      path: "/seguranca"
    },
    {
      icon: MessageSquare,
      title: "Comunicação",
      description: "Canais eficientes para conectar jogadores globalmente.",
      path: "/comunicacao"
    },
    {
      icon: Scale,
      title: "Ética",
      description: "Compromisso com práticas corporativas responsáveis.",
      path: "/etica"
    },
    {
      icon: Lock,
      title: "Privacidade",
      description: "Transparência no tratamento de informações pessoais.",
      path: "/privacidade"
    },
    {
      icon: Target,
      title: "Objetivos ODS",
      description: "Alinhamento com os Objetivos de Desenvolvimento Sustentável.",
      path: "/ods"
    },
    {
      icon: Mail,
      title: "Contato",
      description: "Entre em contato conosco para mais informações.",
      path: "/contato"
    }
  ];

  const products = [
    {
      image: ps5Image,
      name: "PlayStation 5",
      description: "Console de última geração com gráficos em 4K e tecnologia ray tracing.",
      price: "R$ 4.399,00",
      category: "Console"
    },
    {
      image: dualsenseImage,
      name: "Controle DualSense",
      description: "Controle sem fio com feedback tátil e gatilhos adaptáveis.",
      price: "R$ 499,00",
      category: "Acessório"
    },
    {
      image: godOfWarImage,
      name: "God of War Ragnarök",
      description: "Aventura épica protagonizada por Kratos e Atreus.",
      price: "R$ 299,00",
      category: "Jogo"
    },
    {
      image: spidermanImage,
      name: "Spider-Man 2",
      description: "Jogue com Peter Parker e Miles Morales em Nova York.",
      price: "R$ 349,00",
      category: "Jogo"
    },
    {
      image: pulse3dImage,
      name: "Headset PULSE 3D",
      description: "Áudio 3D imersivo projetado para o PS5.",
      price: "R$ 699,00",
      category: "Acessório"
    },
    {
      image: psvr2Image,
      name: "PlayStation VR2",
      description: "Realidade virtual de próxima geração com eye tracking.",
      price: "R$ 4.999,00",
      category: "Acessório"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        </div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              O Futuro do<br />
              <span className="text-primary">Entretenimento Digital</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Explorando tecnologia, inovação e responsabilidade corporativa na indústria de jogos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/seguranca">
                <Button size="lg" className="text-lg px-8">
                  Explorar Recursos
                </Button>
              </Link>
              <Link to="/contato">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Entre em Contato
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Pilares</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça os fundamentos que guiam nossas operações e compromissos com a comunidade global de jogadores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link key={index} to={feature.path}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Produtos em Destaque</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore o portfólio de produtos PlayStation que revolucionam a experiência de entretenimento digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                <div className="aspect-video w-full overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2 w-fit">
                    {product.category}
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm">Ver Mais</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">Sobre o Projeto</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-center mb-8">
                Este projeto corporativo apresenta uma análise abrangente sobre PlayStation, 
                explorando aspectos fundamentais como segurança digital, práticas de comunicação, 
                ética corporativa, políticas de privacidade e alinhamento com os Objetivos de 
                Desenvolvimento Sustentável da ONU.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Tecnologia</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Inovação constante em hardware e software para experiências imersivas.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Comunidade</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Milhões de jogadores conectados em uma rede global de entretenimento.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Responsabilidade</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      Compromisso com práticas sustentáveis e éticas em todos os processos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
