'use client';
import { Card } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { LoginMutation } from '@/routes/auth/Auth-Mutation';
import {
  LoginFormSchema,
  LoginFormValidator,
} from '@/validator/Auth/login-validator';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<LoginFormValidator>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const SignInMutation = LoginMutation();
  const router = useRouter();
  const ref = useRef<HTMLFormElement>(null);

  const onSubmit = (data: LoginFormValidator) => {
    SignInMutation.mutate(data, {
      onSuccess: () => router.push('/onboarding'),
    });
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-[4fr_2fr]">
      <div className="hidden lg:flex relative h-screen overflow-hidden bg-[#4F52D9] items-center justify-center">
        <img
          src="/assets/signup-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src="/assets/signup-preview.png"
          alt="Dashboard preview"
          className="relative z-10 w-full h-full object-contain"
        />
      </div>
      {/* Right - Login Form */}
      <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-slate-950 via-black to-slate-900 p-6 lg:pl-0">
        {/* Card */}
        <Card className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          <div className="p-10 space-y-8">
            {/* Logo */}
            <Link href="/" className="flex justify-center">
              <img
                src="/assets/Logo.svg"
                alt="Fluenca.ai Logo"
                className="h-12 w-12 object-contain"
              />
            </Link>

            {/* Heading */}
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-semibold text-white">Welcome back</h1>
              <p className="italic text-sm text-slate-400">
                Sign in to continue to your dashboard
              </p>
            </div>

            {/* Form */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                ref={ref}
                className="space-y-5"
              >
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="name@company.com"
                          className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-[#5B5BD6] focus:border-transparent rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-[#5B5BD6] focus:border-transparent rounded-xl pr-10"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword((v) => !v)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs text-red-400" />
                    </FormItem>
                  )}
                />

                {/* Forgot */}
                <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-xs text-slate-400 hover:text-white transition"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full h-12 flex items-center justify-center rounded-xl bg-[#5B5BD6] text-white font-semibold shadow-lg hover:bg-[#4a4ac5] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={SignInMutation.isPending}
                >
                  {SignInMutation.isPending ? (
                    <Loader2 className="animate-spin text-white" />
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>
            </Form>

            {/* Footer */}
            <p className="text-center text-sm text-slate-400">
              Don’t have an account?{' '}
              <Link
                href="/signup"
                className="text-white font-medium hover:underline"
              >
                Create account
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
