 import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
 import { Button } from "./ui/button";
 import { Card, CardContent } from "./ui/card";
 
 const Contact = () => {
   const contactInfo = [
     {
       icon: Phone,
       title: "Telefone",
       value: "(11) 98024-5198",
       action: "tel:+5511980245198",
     },
     {
       icon: MessageCircle,
       title: "WhatsApp",
       value: "(11) 98024-5198",
       action: "https://wa.me/5511980245198",
     },
     {
       icon: Mail,
       title: "E-mail",
       value: "contato@creditobrasil.com.br",
       action: "mailto:contato@creditobrasil.com.br",
     },
   ];
 
   return (
     <section id="contato" className="py-16 md:py-24">
       <div className="container mx-auto px-4">
         <div className="max-w-4xl mx-auto">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
               Fale Conosco
             </h2>
             <p className="text-lg text-muted-foreground">
               Estamos prontos para ajudar você a conquistar seu crédito.
             </p>
           </div>
 
           <div className="grid md:grid-cols-3 gap-6 mb-12">
             {contactInfo.map((info, index) => (
               <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                 <CardContent className="p-6">
                   <div className="w-12 h-12 rounded-full hero-gradient mx-auto flex items-center justify-center mb-4">
                     <info.icon className="w-6 h-6 text-primary-foreground" />
                   </div>
                   <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                   <a
                     href={info.action}
                     className="text-primary hover:underline"
                     target={info.action.startsWith("http") ? "_blank" : undefined}
                     rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                   >
                     {info.value}
                   </a>
                 </CardContent>
               </Card>
             ))}
           </div>
 
           <Card className="hero-gradient border-0">
             <CardContent className="p-8 text-center">
               <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                 Pronto para começar?
               </h3>
               <p className="text-primary-foreground/90 mb-6 max-w-lg mx-auto">
                 Faça uma simulação gratuita agora mesmo e descubra quanto você pode conseguir de crédito.
               </p>
               <Button
                 size="lg"
                 className="bg-background text-foreground hover:bg-background/90 text-lg px-8"
               >
                 Simular Meu Crédito
               </Button>
             </CardContent>
           </Card>
         </div>
       </div>
     </section>
   );
 };
 
 export default Contact;