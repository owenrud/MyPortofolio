import { Card } from "flowbite-react";
import profileImg from "@/app/img_about.jpg"
import Image from "next/image";
import { EnvelopeSimple, Phone,MapPin,LinkedinLogo,GithubLogo,FacebookLogo} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";


const Page = () => {
    return(
        <>
        <div className="h-screen bg-color-primary p-4 pt-28 md:pt-20 overflow-auto">
            <h1 className="flex text-4xl justify-center items-center text-color-secondary text-center">Contact Me</h1>
            <div className="flex flex-col justify-center items-center mt-8 mx-auto p-2">
            <Card className="CardResponsive">
      
      <div className="flex flex-col items-center pb-10">
        <Image
          alt="Bonnie image"
          height={100}
          src={profileImg}
          width={100}
          className="makeImageCircularContact mb-3 rounded-xl shadow-lg"
          style={{objectFit:"cover"}}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Owen Rudiyanto So</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-4">Developer</span>
        <div className="space-y-4">
        <Link href="mailto:owenrudiantoso@gmail.com" target="_blank" className="flex flex-row items-center justify-between space-x-4 min-w-72 hover:text-color-winterGradient hover:font-bold hover:underline">
          <EnvelopeSimple className="text-color-accent" size={32}/>
         <span className="flex-1 text-left text-lg text-wrap">owenrudiantoso@gmail.com</span>
          </Link>
        <Link  href="https://www.facebook.com/owen.rudiantosoo/" target="_blank" className="flex flex-row items-center justify-between space-x-4 min-w-72 hover:text-color-winterGradient hover:font-bold hover:underline">
        <FacebookLogo className="text-color-accent" size={32}/>
         <span className="flex-1 text-left text-lg text-wrap">Owen Rudianto Soo</span>
        </Link>
        <Link  href="https://www.linkedin.com/in/owen-rudiyanto-so-b57993213/" target="_blank" className="flex flex-row items-center  justify-between space-x-4 min-w-72 hover:text-color-winterGradient hover:font-bold hover:underline">
        <LinkedinLogo className="text-color-accent" size={32}/>
         <span className="flex-1 text-left text-lg text-wrap">Owen Rudiyanto So</span>
        </Link>
        <Link  href="https://github.com/owenrud" target="_blank" className="flex flex-row items-center  justify-between space-x-4 min-w-72 hover:text-color-winterGradient hover:font-bold hover:underline">
        <GithubLogo className="text-color-accent" size={32}/>
         <span className="flex-1 text-left text-lg text-wrap">github.com/owenrud</span>
        </Link>
        <Link  href="https://wa.me/628981054872" target="_blank" className="flex flex-row items-center justify-between space-x-4 min-w-72 hover:text-color-winterGradient hover:font-bold hover:underline">
        <Phone className="text-color-accent" size={32}/>
         <span className="flex-1 text-left  text-lg text-wrap">+628981054872</span>
        </Link>

        <div className="flex flex-row items-center justify-between space-x-4 min-w-72">
        <MapPin className="text-color-accent" size={32}/>
         <span className="flex-1 text-left text-lg text-wrap">Samarinda, East Kalimantan</span>
        </div>
        </div>
        
        
      </div>
    </Card>
            </div>
        </div>
        </>
    )
}

export default Page