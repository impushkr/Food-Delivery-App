export default function Footer(){

    return(<>
        <div className="bg-gray-100 shadow mt-20 flex gap-20 flex-wrap justify-center pt-15 pb-15">
            
            <div className="mb-50">
            <div className="flex gap-4 items-center  ">
             <img src="/swiggylogo.png" alt="Logo" className="size-12 rounded-2xl"/>
             <h2 className="text-2xl text-orange-600 font-bold">Swiggy</h2>
            </div>
            <p className="text-gray-500 text-sm mt-1 ml-1">@ 2025 Swiggy Limited</p>
            <p className="text-gray-500 text-sm mt-1 ml-1">Clone by Pushkar Singh</p>
            </div>

            <div>
                <p><strong>Company</strong></p>
                <div className="text-gray-500 ">
                   <p>About Us</p>
                   <p>Swiggy Corporate</p>
                   <p>Careers</p>
                   <p>Team</p>
                   <p>Swiggy One</p>
                   <p>Swiggy Instamart</p>
                   <p>Swiggy Dineout</p>
                   <p>Swiggy Genie</p>
                   <p>Minis</p>
                   <p>Pyng</p>
                </div>

            </div>

            <div className="flex flex-col gap-9">
            <div>
                <p><strong>Contact us</strong></p>
                <div className="text-gray-500 ">
                   <p>Help & Support</p>
                   <p>Partner With Us</p>
                   <p>Ride With Us</p>
                </div>

            </div>

            <div>
                <p><strong>Legal</strong></p>
                <div className="text-gray-500 ">
                   <p>Terms & Conditions</p>
                   <p>Cookie Policy</p>
                   <p>Private Policy</p>
                </div>

            </div>
            </div>

            <div>
                <p><strong>Available in</strong></p>
                <div className="text-gray-500 ">
                   <p>Banglore</p>
                   <p>Gurgaon</p>
                   <p>Hydrabad</p>
                   <p>Delhi</p>
                   <p>Mumbai</p>
                   <p>Pune</p>
                   <p>+685 cities</p>
                </div>

            </div>

            <div>
                <p><strong>Life at Swiggy</strong></p>
                <div className="text-gray-500 ">
                   <p>Explore With Swiggy</p>
                   <p>Swiggy News</p>
                   <p>Snackable</p>
                </div>

            </div>
        
        </div>


        <hr/>


        <div className="flex gap-10 text-2xl items-center p-5 justify-center">
            <h3><strong> For Better experience, download the swiggy app now</strong></h3>
            <img 
            src="/downloadfrom.png" 
            alt="download-links"
            className="h-15" />
        </div>
        </>
    )

}