import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Eye, FileText, UserCheck } from "lucide-react";

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Lock className="w-12 h-12 text-primary" />
                <h1 className="text-5xl font-bold">Privacidade</h1>
              </div>
              <p className="text-xl text-muted-foreground">
                Compromisso com a proteção e transparência no tratamento de dados pessoais.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Política de Privacidade</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e 
                    protegemos as informações pessoais dos usuários da plataforma PlayStation. 
                    Estamos comprometidos em manter a privacidade e segurança dos seus dados.
                  </p>
                  <p>
                    Nossa política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) 
                    e o Regulamento Geral de Proteção de Dados (GDPR), garantindo os mais altos 
                    padrões de proteção de dados pessoais.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Eye className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Coleta de Informações</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Informações que Coletamos</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Dados de cadastro: nome, e-mail, data de nascimento</li>
                      <li>• Informações de pagamento: processadas de forma segura através de parceiros certificados</li>
                      <li>• Dados de uso: histórico de jogos, preferências e interações na plataforma</li>
                      <li>• Informações técnicas: endereço IP, tipo de dispositivo, navegador</li>
                      <li>• Comunicações: mensagens trocadas através dos serviços da plataforma</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Como Coletamos</h3>
                    <p className="text-muted-foreground">
                      As informações são coletadas quando você cria uma conta, utiliza nossos 
                      serviços, interage com outros usuários ou acessa conteúdos. Utilizamos 
                      cookies e tecnologias similares para melhorar sua experiência.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Lock className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Uso das Informações</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Utilizamos suas informações pessoais para:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Fornecer e melhorar nossos serviços e experiência do usuário</li>
                    <li>• Processar transações e gerenciar sua conta</li>
                    <li>• Personalizar conteúdo e recomendações</li>
                    <li>• Enviar comunicações importantes sobre serviços e atualizações</li>
                    <li>• Garantir a segurança da plataforma e prevenir fraudes</li>
                    <li>• Cumprir obrigações legais e regulatórias</li>
                    <li>• Realizar análises e pesquisas para desenvolvimento de produtos</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <UserCheck className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Seus Direitos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    De acordo com a LGPD, você tem os seguintes direitos sobre seus dados pessoais:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Acesso:</strong> Solicitar cópia dos dados que mantemos sobre você</li>
                    <li>• <strong>Correção:</strong> Atualizar ou corrigir informações imprecisas</li>
                    <li>• <strong>Exclusão:</strong> Solicitar a remoção de seus dados pessoais</li>
                    <li>• <strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                    <li>• <strong>Oposição:</strong> Opor-se ao processamento de seus dados</li>
                    <li>• <strong>Revogação:</strong> Retirar consentimento previamente fornecido</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Compartilhamento de Dados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Não vendemos suas informações pessoais a terceiros. Compartilhamos dados apenas 
                    nas seguintes situações:
                  </p>
                  <ul className="space-y-2">
                    <li>• Com prestadores de serviços que auxiliam em nossas operações</li>
                    <li>• Quando exigido por lei ou processo legal</li>
                    <li>• Para proteger direitos, propriedade ou segurança da empresa e usuários</li>
                    <li>• Com seu consentimento explícito para finalidades específicas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Segurança dos Dados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Implementamos medidas técnicas e organizacionais apropriadas para proteger seus 
                    dados contra acesso não autorizado, alteração, divulgação ou destruição. Isso 
                    inclui criptografia, controles de acesso, auditorias regulares e treinamento 
                    de equipe.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contato</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="mb-4">
                    Para exercer seus direitos, esclarecer dúvidas ou fazer solicitações relacionadas 
                    à privacidade de dados, entre em contato através de:
                  </p>
                  <p className="font-semibold">E-mail: privacidade@playstation.edu.br</p>
                  <p className="text-sm mt-4">
                    Última atualização: Outubro de 2025
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

export default Privacidade;
