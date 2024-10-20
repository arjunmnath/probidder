const Footer = () => {
    return <>

        <div className={`bg-[#5B7347] bg-sprinkle-shade text-[#C5CEBD] font-extrabold rounded-tr-3xl px-4 rounded-tl-3xl py-4`}>
            {/*<div className={`w-full h-[.1em] bg-[#72885F]`}></div>*/}
            <div className={`px-12 py-2 flex flex-row justify-between`}>
                <div className={`copyright`}>
                    ©Copyright 2024
                    <span className={`text-white px-1`}>
                    Probidder
                    </span>
                </div>

                <div className={`text-[#C5CEBD] flex flex-row gap-6`}>
                    <span>Support Center</span>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    </>
}


export default Footer