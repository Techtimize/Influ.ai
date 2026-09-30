import Image from 'next/image';
import Link from 'next/link';
import { Building2 } from 'lucide-react';
import { PAGE_ROUTES } from '@/constant/page-routes';

// Temporary data. Replace with the onboarding API response later.
const DUMMY_DETAILS = [
    { label: 'Company Name', value: 'Techtimize' },
    { label: 'Industry', value: 'Software' },
    { label: 'Primary Product / Service', value: 'AI automation for marketing teams' },
    { label: 'Language', value: 'English' },
    { label: 'Target Country', value: 'Pakistan' },
    { label: 'Website', value: 'https://techtimize.co' },
];

export default function CompanyDetail() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[radial-gradient(circle_at_top_left,#E3E6FB,transparent_55%)] px-4 py-10">
            <div className="w-full max-w-lg space-y-6">
                <div className="flex justify-center">
                    <Image src="/assets/Logo.svg" alt="Logo" width={56} height={56} />
                </div>

                <div className="text-center space-y-1">
                    <h1 className="text-xl sm:text-2xl font-semibold">Company Detail</h1>
                    <p className="text-sm text-gray-500">
                        Review the details you shared about your company.
                    </p>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF0FB] text-[#5B5BD6]">
                            <Building2 className="h-5 w-5" />
                        </div>
                        <h2 className="font-semibold">Company basics</h2>
                    </div>

                    <dl className="divide-y divide-gray-100">
                        {DUMMY_DETAILS.map((item) => (
                            <div key={item.label} className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between">
                                <dt className="text-sm text-gray-500">{item.label}</dt>
                                <dd className="text-sm font-medium text-gray-900 break-all sm:text-right">{item.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <Link
                    href={PAGE_ROUTES.QUESTIONS}
                    className="flex h-11 w-full items-center justify-center rounded-full bg-[#5B5BD6] text-white font-semibold shadow-lg hover:bg-[#4a4ac5] transition-all"
                >
                    Continue
                </Link>
            </div>
        </div>
    );
}
