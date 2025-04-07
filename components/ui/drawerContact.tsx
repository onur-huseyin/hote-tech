"use client"
import { useState } from "react";
import { Drawer } from "vaul";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "sonner";



export const DrawerContact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    adSoyad: "",
    sirketAdi: "",
    telefon: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData.adSoyad || !formData.sirketAdi || !formData.telefon) {
      toast.error("Lütfen tüm alanları doldurunuz.", {
        position: "top-center",
        duration: 3000
      });
      return;
    }
  
    setLoading(true);
    try {
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        createdAt: serverTimestamp()
      });
      toast.success("Başarılı! Mesajınız bize ulaştı 🎉", {
        position: "top-center",
        duration: 3000
      });
      setFormData({ adSoyad: "", sirketAdi: "", telefon: "" });
    } catch (err) {
      console.error("Hata:", err);
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin!", {
        position: "top-center",
        duration: 3000
      });
    } finally {
      setLoading(false);
    }
  };
  return (
<div className="z-20">
<Drawer.Root >
       <Drawer.Trigger className="z-10 border-gray-200  rounded-xl border-2">
     <p className="px-6 py-1 bg-white text-black rounded-lg font-semibold  text-md" >İletişim</p>
   </Drawer.Trigger>
   <Drawer.Portal>
     <Drawer.Overlay className="fixed inset-0 bg-black/40" />
     <Drawer.Content className="bg-white flex flex-col z-50 fixed bottom-0 left-0 right-0 max-h-[82vh] rounded-t-[10px]">
       <div className="max-w-md w-full mx-auto overflow-auto p-4 rounded-t-[10px]">
         <Drawer.Handle />
         <Drawer.Title className="font-medium text-gray-900 mt-8">İletişme geçin!</Drawer.Title>
         <Drawer.Description className="leading-6 mt-2 text-gray-600">
           Çok kısa sürede size döneceğiz..
         </Drawer.Description>
         <label htmlFor="name" className="font-medium text-gray-900 text-sm mt-8 mb-2 block">
           Ad Soyad
         </label>
         <input
         name="adSoyad"
           id="name"
           placeholder="Ad Soyad"
           value={formData.adSoyad}
           onChange={handleChange}
           className="border border-gray-200 bg-white w-full px-3 h-9 rounded-lg outline-none focus:ring-2 focus:ring-black/5 text-gray-900"
         />
         <label htmlFor="name" className="font-medium text-gray-900 text-sm mt-8 mb-2 block">
           Şirket Adı
         </label>
         <input
         placeholder="ABC Mühendislik"
           id="sirketAdi"
           name="sirketAdi"
           value={formData.sirketAdi}
           onChange={handleChange}
           className="border border-gray-200 bg-white w-full px-3 h-9 rounded-lg outline-none focus:ring-2 focus:ring-black/5 text-gray-900"
         />
                  <label htmlFor="name" className="font-medium text-gray-900 text-sm mt-8 mb-2 block">
           Telefon Numarası
         </label>
         <input
           id="telefon"
           name="telefon"
           placeholder="05XXXXXXXXX"
           value={formData.telefon}
           onChange={handleChange}
           className="border border-gray-200 bg-white w-full px-3 h-9 rounded-lg outline-none focus:ring-2 focus:ring-black/5 text-gray-900"
         />

         <button type="submit" onClick={handleSubmit}   className={`h-[44px] flex items-center justify-center bg-black text-gray-50 rounded-lg mt-4 w-full font-medium ${
    loading ? "opacity-70 cursor-not-allowed" : ""
  }`}>
      {loading ? (
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      ></path>
    </svg>
  ) : (
    "Gönder"
  )}
  </button>
       </div>
     </Drawer.Content>
   </Drawer.Portal>
 </Drawer.Root>
</div>
  );
};

