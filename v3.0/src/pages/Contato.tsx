import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contato = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Retornaremos em breve.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@playstation.edu.br"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 3000-0000"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Centro Universitário Ítalo Brasileiro"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta, 9h às 18h"
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
              <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
              <p className="text-xl text-muted-foreground">
                Estamos aqui para responder suas perguntas e ouvir suas sugestões sobre o projeto.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
                    <CardDescription>
                      Preencha o formulário abaixo e retornaremos o mais breve possível.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input 
                          id="name" 
                          placeholder="Seu nome"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input 
                          id="email" 
                          type="email"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Assunto</Label>
                        <Input 
                          id="subject" 
                          placeholder="Sobre o que você gostaria de falar?"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Escreva sua mensagem aqui..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        Enviar Mensagem
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Informações de Contato</CardTitle>
                      <CardDescription>
                        Você também pode nos contatar diretamente através dos canais abaixo.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-muted-foreground">{info.content}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle>Sobre o Projeto</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Este é um projeto acadêmico desenvolvido por estudantes do curso de 
                        Análise e Desenvolvimento de Sistemas do Centro Universitário Ítalo 
                        Brasileiro, sob orientação do Prof. Mauricio Tanizaka.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5">
                    <CardHeader>
                      <CardTitle>Sugestões e Feedback</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Sua opinião é muito importante para nós! Compartilhe suas ideias, 
                        sugestões de melhoria ou feedback sobre o conteúdo apresentado neste site.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contato;
