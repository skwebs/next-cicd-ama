import Clock from "@/utils/Clock";
import Notification from "@/components/Notification";

const TopHeader = () => {

    return (
        <>
            <div className="w-full py-1 bg-slate-50 dark:bg-slate-800">
                <div className="px-4 md:px-6 lg:px-8">

                    <div>
                        <div className="relative w-full flex md:justify-between md:items-center flex-col justify-start md:flex-row">
                            {/* left side */}
                            <div className=" h-6 min-w-[230px] whitespace-nowrap font-semibold border-b dark:border-b-slate-700 md:border-none ">
                                <Clock />
                            </div>

                            {/* right side */}
                            <div className="w-full md:ml-8 h-6">
                                <Notification />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopHeader;
