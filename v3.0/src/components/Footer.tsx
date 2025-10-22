import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">PlayStation</h3>
            <p className="text-muted-foreground">
              Inovação em tecnologia e entretenimento para gamers de todo o mundo.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/seguranca" className="hover:text-primary transition-colors">Segurança</Link></li>
              <li><Link to="/comunicacao" className="hover:text-primary transition-colors">Comunicação</Link></li>
              <li><Link to="/etica" className="hover:text-primary transition-colors">Ética</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/privacidade" className="hover:text-primary transition-colors">Privacidade</Link></li>
              <li><Link to="/ods" className="hover:text-primary transition-colors">ODS</Link></li>
              <li><Link to="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Projeto Acadêmico</h4>
            <p className="text-muted-foreground text-sm">
              Centro Universitário Ítalo Brasileiro<br />
              Análise e Desenvolvimento de Sistemas<br />
              Programação para Internet
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Projeto Corporativo PlayStation. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
