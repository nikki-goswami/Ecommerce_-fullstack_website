     import { ToastContainer, toast } from 'react-toastify';
     import axios from 'axios';
import { Currency } from 'lucide-react';
 
    
    
    const notify = (msg,flag) => toast(msg,{type:flag ? "success":"error"});

// ye slug create wala function h
     function slugCreate(name){

   
   const slug= name .toLowerCase()                 // lowercase
    .trim()                        // extra spaces remove
    .replace(/[^a-z0-9\s-]/g, "")  // special characters remove
    .replace(/\s+/g, "-")          // spaces → -
    .replace(/-+/g, "-");          // multiple - → single -

    return slug
  }


  const axiosbaseURL = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials:true
  
});




function formatIndianCurrency(amount) {
  return amount.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR'  // ✅ lowercase `currency`
  });
}



    export {notify,slugCreate,axiosbaseURL,formatIndianCurrency}