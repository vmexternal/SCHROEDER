 import { Phone } from "lucide-react";
 import { Button } from "./ui/button";
 
 const Header = () => {
   return (
     <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
       <div className="container mx-auto px-4 h-16 flex items-center justify-between">
         <div className="flex items-center gap-2">
          <span className="font-semibold text-lg text-foreground">A. SCHROEDER CONTABILIDADE LTDA</span>
        </div>
         
         <nav className="hidden md:flex items-center gap-8">
           <a href="#inicio" className="text-muted-foreground hover:text-foreground transition-colors">Início</a>
           <a href="#vantagens" className="text-muted-foreground hover:text-foreground transition-colors">Vantagens</a>
           <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">Como Funciona</a>
         </nav>
         
         <Button className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity">
           <Phone className="w-4 h-4 mr-2" />
           Fale Conosco
         </Button>
       </div>
     </header>
   );
 };
 
 export default Header;