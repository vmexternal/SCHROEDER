 import { ArrowRight, CheckCircle, Clock, Shield, Zap } from "lucide-react";
 import { Button } from "./ui/button";
 
 const Hero = () => {
   const benefits = [
     { icon: Zap, text: "Taxa a partir de 1,85% ao mês" },
     { icon: Clock, text: "Até 96 meses para pagar" },
     { icon: Shield, text: "Sem consulta ao SPC/Serasa" },
     { icon: CheckCircle, text: "Aprovação em até 24 horas" },
   ];
 
   return (
     <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24">
       <div className="container mx-auto px-4">
         <div className="max-w-3xl mx-auto text-center">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm mb-6 animate-fade-in">
             <CheckCircle className="w-4 h-4" />
             Liberado para Aposentados e Pensionistas
           </div>
           
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
             Seu Crédito Rápido,{" "}
             <span className="text-gradient">Sem Burocracia</span>
           </h1>
           
           <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
             A solução financeira ideal para você realizar seus sonhos. Dinheiro na conta com as menores taxas do mercado.
           </p>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
             {benefits.map((benefit, index) => (
               <div
                 key={index}
                 className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
               >
                 <benefit.icon className="w-6 h-6 text-primary" />
                 <span className="text-sm text-center text-foreground">{benefit.text}</span>
               </div>
             ))}
           </div>
           
           <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
             <Button size="lg" className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8">
               Simular Agora
               <ArrowRight className="w-5 h-5 ml-2" />
             </Button>
             <Button size="lg" variant="outline" className="text-lg px-8">
               Falar no WhatsApp
             </Button>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default Hero;