import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import { PatronCards } from "@/components/ui/patronCards"

import Link from "next/link";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"


const Footer = () => {
    const testimonials = [
      {
        quote:
          "Arkadaşlar çok ilgiliydi, makinalarımızla özel ilgilendiler katalog ve web sitesi yaptırdık teşekkürler.",
        name: "Mahmut Taraman",
        title: "Tehdit Makina A.Ş",
      },
      {
        quote:
          "Kendilerine teşekkür ediyorum, çok ilgililer işinde uzman arkadaşlar ile çalışmak keyifli birşey..",
        name: "Tuğçe Güral",
        title: "Mir Teknoloji",
      },
      {
        quote: "Kendi sektörümüz için özel hazırlanmış 3D modellemeler sayesinde müşterilerimize çok daha etkileyici sunumlar yapabiliyoruz. Web tasarım tarafında da sürekli destek sağladılar. Süreç boyunca iletişim ve hız konusunda da gayet memnun kaldık.",
        name: "Ayşe Korkmaz",
        title: "Vintek Hidrolik",
      },
      {
        quote:
          "Makinalarımızın tanıtımı için katalog ve web sitesi hizmeti aldık. Tasarımlar oldukça modern ve sektöre uygun oldu. Özellikle 3D renderlar satışlarımızı olumlu etkiledi diyebilirim. Tavsiye ederim.",
        name: "Hasan Yılmaz",
        title: "Alfa Endüstri",
      },
      {
        quote:
          "Karmaşık makinelerimizin detaylı ve gerçekçi renderlarını çok kısa sürede tamamladılar. Satış ekibimiz artık toplantılarda çok daha etkileyici sunumlar yapabiliyor. Web sitemizin yeni hali de müşteri geri dönüşlerini artırdı.",
        name: "Nurgül Erdem",
        title: "ProTech Makina",
      },
    ];
  return (
    <>
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    <div>
      <PatronCards/>
    </div>
    <footer className="mt-12 xs:mt-20 dark bg-background border-t">
      <div className="max-w-screen-xl mx-auto py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6">
        <div className="col-span-full xl:col-span-4">
          {/* Logo */}
          
          <div style={{fontWeight:'700', fontSize:'20px'}}>Hote Teknoloji</div>
<p className="mt-4 text-muted-foreground">
  Tüm ürün ve makinelerinizin yüksek kaliteli, profesyonel renderlarını oluşturmak için bizimle iletişime geçin!
</p>
          
        </div>

      </div>
      <Separator />
      <div className="max-w-screen-xl mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        {/* Copyright */}
        <span className="text-muted-foreground text-center xs:text-start">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="#" target="_blank">
            Hote teknoloji Tüm hakları saklıdır.
          </Link>
          
        </span>

        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="#" target="_blank">
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <DribbbleIcon className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <TwitchIcon className="h-5 w-5" />
          </Link>
          <Link href="#" target="_blank">
            <GithubIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
