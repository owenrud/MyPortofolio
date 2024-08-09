import { Card } from "flowbite-react";
import profileImg from "@/app/img_about.jpg"
import Image from "next/image";
import { EnvelopeSimple, Phone,MapPin,LinkedinLogo,GithubLogo,FacebookLogo} from "@phosphor-icons/react/dist/ssr";


const Page = () => {
    return(
        <>
        <div className="h-screen bg-color-primary p-4 pt-28 md:pt-20 overflow-auto">
            <h1 className="text-4xl text-color-secondary text-center">Contact Me</h1>
            <div className="flex-1 flex-col justify-center items-center mt-8 md:ml-96 md:mr-96 p-4 md:pl-28">
            <Card className="max-w-lg">
      
      <div className="flex flex-col items-center pb-10">
        <Image
          alt="Bonnie image"
          height={100}
          src={profileImg}
          width={100}
          className="mb-3 rounded-xl shadow-lg"
          style={{objectFit:"cover"}}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Owen Rudiyanto So</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-4">Developer</span>
        <div className="space-y-4">
        <div className="flex flex-row items-center justify-between space-x-4 min-w-72">
        <EnvelopeSimple className="text-color-accent" size={32}/>
         <span className="flex-1 text-left text-lg text-wrap">owenrudiantoso@gmail.com</span>
        </div>
        <div className="flex flex-row items-center justify-between space-x-4 min-w-72">
        <FacebookLogo className="text-color-accent" size={32}/>
         <span className="flex-1 text-left text-lg text-wrap">Owen Rudianto Soo</span>
        </div>
        <div className="flex flex-row items-center  justify-between space-x-4 min-w-72">
        <LinkedinLogo className="text-color-accent" size={32}/>
         <span className="flex-1 text-left text-lg text-wrap">Owen Rudiyanto So</span>
        </div>
        <div className="flex flex-row items-center  justify-between space-x-4 min-w-72">
        <GithubLogo className="text-color-accent" size={32}/>
         <span className="flex-1 text-left text-lg text-wrap">github.com/owenrud</span>
        </div>
        <div className="flex flex-row items-center justify-between space-x-4 min-w-72">
        <Phone className="text-color-accent" size={32}/>
         <span className="flex-1 text-left  text-lg text-wrap">+628981054872</span>
        </div>

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