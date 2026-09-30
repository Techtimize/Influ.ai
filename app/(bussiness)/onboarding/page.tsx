'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { OnboardingFormSchema, OnboardingFormValidator } from '@/validator/Auth/onboarding-validator';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { OnboardingMutation } from '@/routes/bussiness/Bussiness-Mutation';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import OnboardingSide from '@/components/onboardingside';
import { SelectContent, SelectGroup, SelectValue, SelectItem, SelectTrigger, Select } from '@/components/ui/select';
import { INDUSTRY_LIST } from '@/constant/industry';
import { LANGUAGE_LIST } from '@/constant/language';
import { COUNTRY_LIST } from '@/constant/country';
import { PAGE_ROUTES } from '@/constant/page-routes';


export default function Onboarding() {
    const { mutate: onboardingMutation, isPending } = OnboardingMutation();
    const form = useForm<OnboardingFormValidator>({
        resolver: zodResolver(OnboardingFormSchema),
        defaultValues: {
            company_name: '',
            industry: '',
            primary_product_or_service: '',
            language: '',
            website_url: '',
            target_country: '',
        },
    });

    const onSubmit = (data: OnboardingFormValidator) => onboardingMutation(data);

    return (
        <div className="h-screen w-full overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            {/* Form */}
            <div className="h-full w-full flex items-start justify-center px-4 pt-4 pb-4 sm:px-6 sm:pt-6 md:px-10 lg:px-12 lg:pt-8">
                <div className="w-full max-w-md space-y-3 sm:space-y-4">
                    <Link href={PAGE_ROUTES.HOME} className="flex justify-center">
                        <Image
                            src="/assets/Logo.svg"
                            alt="Logo"
                            loading="eager"
                            width={64}
                            height={64}
                            className="h-12 w-12 sm:h-14 sm:w-14"
                        />
                    </Link>

                    {/* Heading */}
                    <div className="text-center space-y-1">
                        <h1 className="text-xl sm:text-2xl font-semibold tracking-[0.04em]">
                            Tell us about your company
                        </h1>
                        <p className="text-sm font-light tracking-[0.04em] text-gray-500 px-1">
                            Add a few details and let AI analyze your market opportunities.
                        </p>
                    </div>

                    {/* Form */}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                            <FormField
                                control={form.control}
                                name="company_name"
                                render={({ field }) => (
                                    <FormItem className="gap-1">
                                        <FormLabel className="text-sm font-light tracking-[0.04em] text-black">
                                            Company Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Company name"
                                                {...field}
                                                className="h-10 sm:h-11 border-gray-300 text-black placeholder:text-slate-500 rounded-full focus:ring-2 focus:ring-primarytext"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="industry"
                                render={({ field }) => (
                                    <FormItem className="gap-1">
                                        <FormLabel className="text-sm font-light tracking-[0.04em] text-black">
                                            Industry
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="h-10 sm:h-11 w-full data-[size=default]:h-10 sm:data-[size=default]:h-11 border-gray-300 text-black placeholder:text-slate-500 rounded-full focus:ring-2 focus:ring-primarytext">
                                                    <SelectValue placeholder="Select Industry" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {INDUSTRY_LIST.map((item) => (
                                                        <SelectItem key={item.id} value={item.name}>
                                                            {item.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="text-xs text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="primary_product_or_service"
                                render={({ field }) => (
                                    <FormItem className="gap-1">
                                        <FormLabel className="text-sm font-light tracking-[0.04em] text-black">
                                            Services
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Services"
                                                {...field}
                                                className="h-10 sm:h-11 border-gray-300 text-black placeholder:text-slate-500 rounded-full focus:ring-2 focus:ring-primarytext"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="language"
                                render={({ field }) => (
                                    <FormItem className="gap-1">
                                        <FormLabel className="text-sm font-light tracking-[0.04em] text-black">
                                            Preferred Language
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="h-10 sm:h-11 w-full data-[size=default]:h-10 sm:data-[size=default]:h-11 border-gray-300 text-black placeholder:text-slate-500 rounded-full focus:ring-2 focus:ring-primarytext">
                                                    <SelectValue placeholder="Select Language" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {LANGUAGE_LIST.map((item) => (
                                                        <SelectItem key={item.id} value={item.code}>
                                                            {item.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="text-xs text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="target_country"
                                render={({ field }) => (
                                    <FormItem className="gap-1">
                                        <FormLabel className="text-sm font-light tracking-[0.04em] text-black">
                                            Target Country
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="h-10 sm:h-11 w-full data-[size=default]:h-10 sm:data-[size=default]:h-11 border-gray-300 text-black placeholder:text-slate-500 rounded-full focus:ring-2 focus:ring-primarytext">
                                                    <SelectValue placeholder="Select Country" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {COUNTRY_LIST.map((item) => (
                                                        <SelectItem key={item.id} value={item.code}>
                                                            {item.name}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className="text-xs text-red-400" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="website_url"
                                render={({ field }) => (
                                    <FormItem className="gap-1">
                                        <FormLabel className="text-sm font-light tracking-[0.04em] text-black">
                                            Website Link
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Enter your website link"
                                                {...field}
                                                className="h-10 sm:h-11 border-gray-300 text-black placeholder:text-slate-500 rounded-full focus:ring-2 focus:ring-primarytext"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs text-red-400" />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full cursor-pointer bg-brand text-white rounded-full shadow-[0_3px_0_#bfc1ff] hover:bg-brand-700 h-10 sm:h-11 font-semibold hover:opacity-90 transition-all"
                                disabled={isPending}
                            >
                                {isPending ? (
                                    <Loader2 className="animate-spin text-white" />
                                ) : (
                                    'Generate Report'
                                )}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>

            {/* Side panel */}
            <div className="hidden lg:block h-full overflow-hidden">
                <OnboardingSide />
            </div>
        </div>
    );
}