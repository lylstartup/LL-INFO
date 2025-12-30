import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="font-display font-bold text-primary text-lg">F</span>
              </div>
              <span className="font-display font-semibold text-lg text-foreground">FinEco</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Ecosistema fintech en desarrollo. Construyendo el futuro de las finanzas personales 
              con tecnología, educación e inteligencia artificial.
            </p>
          </div>

          {/* Sumate */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Sumate</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                Próximamente podrás unirte a nuestra comunidad y ser parte del desarrollo.
              </p>
              <div className="inline-block px-4 py-2 rounded-lg bg-secondary/50 border border-border text-muted-foreground text-sm">
                Disponible pronto
              </div>
            </div>
          </div>

          {/* Aviso Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Aviso</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Este sitio presenta un proyecto en fase de desarrollo. 
              La información mostrada describe una visión y plan, no un producto final disponible.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 FinEco. Proyecto en desarrollo.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground/60 text-xs">
              Construido con visión de largo plazo
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
