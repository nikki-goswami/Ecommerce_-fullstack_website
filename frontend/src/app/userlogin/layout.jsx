import { Geist, Geist_Mono } from "next/font/google";
   import "../globals.css";

import Footer from "@/components/admincomponent/Footer";
import Header from "@/components/admincomponent/Header";
import Sidebar from "@/components/admincomponent/Sidebar";
  import { ToastContainer, toast } from 'react-toastify';






export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>

          
        
          <main className="p-6">
                {children}

          </main>
        </div>

      </body>
    </html>
  );
}
