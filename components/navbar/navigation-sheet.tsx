import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { PatronCards } from "@/components/ui/patronCards"


export const NavigationSheet = () => {
  return (
    <div>
          <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Drawer</SheetTitle>
      </VisuallyHidden>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Logo />
        <NavMenu  orientation="vertical" className="mt-12" />
        <div className="mt-8 space-y-4">
      <div>
      <h3 className="text-xl text-gray-500 font-semibold mb-4">Hizmetlerimiz</h3>
        <ul>
          <li className="text-sm mt-2 pl-2">3D görselleştirme</li>
          <li className="text-sm mt-2 pl-2">Web Sitesi</li>
          <li className="text-sm mt-2 pl-2">VR (Sanal Gerçeklik)</li>
          <li className="text-sm mt-2 pl-2"> Malzeme simülasyonları</li>
          <li className="text-sm mt-2 pl-2">Ürün katalogları</li>
          <li className="text-sm mt-2 pl-2">3D modelleme ve render</li>
          <li className="text-sm mt-2 pl-2">Sektöre özel dijital dönüşüm danışmanlığı</li>

        </ul>
      </div>
      <PatronCards/>
        </div>
      </SheetContent>
    </Sheet>
    </div>
  );
};
