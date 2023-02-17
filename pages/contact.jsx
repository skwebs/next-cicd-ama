import ConstantWideLayout from "@/components/layouts/ConstantWideLayout"
import Head from "next/head"
import Link from "next/link"

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us | Anshu Memorial Academy </title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <div className="w-full">
                <ConstantWideLayout className="px-4 md:px-6 lg:px-8">

                    <div>
                        <div>Contact</div>
                    </div>
                </ConstantWideLayout>
            </div>
        </>
    )
}
