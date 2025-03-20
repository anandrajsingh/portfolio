import ContactButton from "./ContactButton";
import NavigationSection from "./NavigationSection";

export function Navbar(){
    return (
        <header className="fixed top-0  h-[100px] w-full">
            <div className="px-60 py-10">
                <div className="flex justify-between items-center">
                    <div className="">
                        <img className="h-[50px] w-[50px]" src="https://www.freeiconspng.com/uploads/chess-knight-icon-13.png" alt="Logo" />
                    </div>
                    <NavigationSection />
                    <ContactButton />
                </div>
            </div>
        </header>
    )
}