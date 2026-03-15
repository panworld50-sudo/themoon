import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata = {
 title:"THE MOON",
 description:"Global News Platform"
}

export default function RootLayout({children}){

return(

<html lang="en">

<body>

<Header/>

{children}

<Footer/>

</body>

</html>

)

}
