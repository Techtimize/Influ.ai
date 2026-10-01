'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bell } from 'lucide-react';
import { PAGE_ROUTES } from '@/constant/page-routes';

// Temporary data. Replace with the analysis API response later.
const DUMMY_COMPANY = {
    name: 'Brand.co',
    status: 'Building live...',
    details: [
        { label: 'Company Name', value: 'Building live...' },
        {
            label: 'Target audience',
            value: 'Primarily 24–38 year olds interested in skincare & beauty, researched from site content and product framing.',
        },
        {
            label: 'Gender skew of audience',
            value: 'Skews female (~70%), based on site imagery and product positioning.',
        },
    ],
};

const ANALYSIS_SECONDS = 20;

export default function CompanyDetail() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((value) => Math.min(value + 100 / ANALYSIS_SECONDS, 100));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-white">
            {/* Soft background glow */}
            <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[720px] rounded-full bg-[#DCE1FB] opacity-70 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[620px] rounded-full bg-[#E6E9FB] opacity-70 blur-3xl" />

            {/* Header */}
            <header className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10">
                <Link href={PAGE_ROUTES.HOME} className="flex items-center gap-2">
                    <Image src="/assets/Logo.svg" alt="Fluenca.ai" width={24} height={24} className="h-6 w-6" />
                    <span className="text-base font-semibold text-[#2B2F8F]">
                        fluenca<span className="text-[#5B5BD6]">.ai</span>
                    </span>
                </Link>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        aria-label="Notifications"
                        className="grid size-10 place-items-center rounded-full border border-[#E6E8F5] bg-white text-neutral-700 hover:bg-neutral-50"
                    >
                        <Bell className="size-4" />
                    </button>
                    <div className="grid size-10 place-items-center rounded-full bg-[#5B5BD6] text-sm font-semibold text-white">
                        U
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="relative z-10 flex flex-col items-center px-4 pb-16 pt-10 sm:pt-16">
                <Image src="/assets/Logo.svg" alt="" width={48} height={48} className="h-12 w-12" />

                <h1 className="mt-4 max-w-xs text-center text-2xl font-semibold leading-snug text-gray-900 sm:text-[28px]">
                    Our AI agents are analyzing your company
                </h1>
                <p className="mt-2 text-center text-sm text-gray-500">
                    Reading your site, positioning and market. This takes about {ANALYSIS_SECONDS} seconds.
                </p>

                {/* Progress */}
                <div
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(progress)}
                    className="mt-6 h-1.5 w-full max-w-sm overflow-hidden rounded-full bg-[#E6E9FB]"
                >
                    <div
                        className="h-full rounded-full bg-linear-to-r from-[#5B5BD6] to-[#7B7BF0] transition-[width] duration-1000 ease-linear"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Company card */}
                <div className="mt-6 w-full max-w-[340px] rounded-3xl border border-[#E6E8F5] bg-white p-4 shadow-[0_8px_30px_rgba(91,91,214,0.08)]">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                        <div className="size-10 rounded-xl bg-linear-to-br from-[#5B5BD6] to-[#8B8BF5]" />
                        <div>
                            <p className="text-sm font-semibold text-gray-900">{DUMMY_COMPANY.name}</p>
                            <p className="text-xs text-gray-500">{DUMMY_COMPANY.status}</p>
                        </div>
                    </div>

                    <dl className="space-y-3 pt-4">
                        {DUMMY_COMPANY.details.map((item) => (
                            <div key={item.label} className="text-xs leading-relaxed">
                                <dt className="inline font-semibold text-gray-900">{item.label}</dt>{' '}
                                <dd className="inline text-gray-500">{item.value}</dd>
                            </div>
                        ))}
                    </dl>

                    {/* Loading placeholders */}
                    <div className="space-y-1.5 pb-6 pt-3">
                        <div className="h-1 w-2/5 animate-pulse rounded-full bg-[#C5CBF7]" />
                        <div className="h-1 w-3/5 animate-pulse rounded-full bg-[#A9B1F3]" />
                    </div>
                </div>
            </main>
        </div>
    );
}
