import Layout from "@/components/layout/Layout";
import Countdown from "@/components/home/Countdown";
import { Sparkles, TrendingUp, Shield } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <Sparkles size={16} className="text-primary" />
              <span className="text-primary text-sm font-medium">Proyecto en desarrollo</span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up">
              El futuro de tus{" "}
              <span className="gradient-text">finanzas personales</span>
            </h1>

            {/* Subtitle */}
            <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed animate-slide-up max-w-3xl mx-auto" style={{ animationDelay: "0.1s" }}>
              Un ecosistema fintech integral que combina educación financiera, 
              inversión asistida por inteligencia artificial y automatización para 
              transformar la manera en que gestionas tu dinero.
            </p>

            {/* Vision Statement */}
            <div className="glass rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-16 animate-slide-up border border-primary/10" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingUp size={24} className="text-primary" />
                <span className="font-display font-semibold text-foreground">Visión a largo plazo</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Este proyecto representa una visión ambiciosa que estamos construyendo paso a paso. 
                No es un producto terminado, sino un camino hacia democratizar el acceso a herramientas 
                financieras sofisticadas.
              </p>
            </div>

            {/* Countdown Section */}
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Shield size={20} className="text-primary/60" />
                <span className="text-muted-foreground text-sm font-medium">Lanzamiento estimado</span>
              </div>
              <Countdown />
              <p className="text-muted-foreground/60 text-sm mt-6">
                12 de enero de 2028 – 00:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Quick Overview */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-display font-bold gradient-text mb-2">IA</div>
              <p className="text-muted-foreground">Inversión asistida por inteligencia artificial</p>
            </div>
            <div className="text-center p-6 border-y md:border-y-0 md:border-x border-border/50">
              <div className="text-4xl font-display font-bold gradient-text mb-2">EDU</div>
              <p className="text-muted-foreground">Educación financiera integrada</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-display font-bold gradient-text mb-2">AUTO</div>
              <p className="text-muted-foreground">Automatización financiera inteligente</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
