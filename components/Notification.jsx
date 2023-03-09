import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

const Notification = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const marqueeLinkStyle = 'dark:hover:text-slate-300 hover:underline active:text-sky-500 dark:active:text-sky-500';

    if (!mounted) return <><Link href={`/`} className={`${marqueeLinkStyle}`}> This is a link for notification</Link></>;

    return (
        <>
            <Marquee gradient={false} speed={50} pauseOnHover>
                <div className="space-x-10 md:pl-8">
                    <Link href={`/`} className={`${marqueeLinkStyle}`}> This is a link for notification</Link>
                    <Link href={`/`} className={`${marqueeLinkStyle}`}> This is a link for notification</Link>
                    <Link href={`/`} className={`${marqueeLinkStyle}`}> This is a link for notification</Link>
                    <Link href={`/`} className={`${marqueeLinkStyle}`}> This is a link for notification</Link>
                    <Link href={`/`} className={`${marqueeLinkStyle}`}> This is a link for notification</Link>
                    <Link href={`/`} className={`${marqueeLinkStyle}`}> This is a link for notification</Link>
                    <Link href={`/`} className={`${marqueeLinkStyle}`}> This is a link for notification</Link>
                    <Link href={`/`} className={`${marqueeLinkStyle}`}> This is a link for notification</Link>
                </div>
            </Marquee>
        </>
    )
}

export default Notification
