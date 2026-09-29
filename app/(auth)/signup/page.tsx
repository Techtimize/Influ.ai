'use client';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordMismatchError, setPasswordMismatchError] = useState('');

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePasswordMatch = (value: string) => {
    if (value && value !== password) {
      setPasswordMismatchError('Passwords do not match');
    } else {
      setPasswordMismatchError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    validateEmail(email);
    if (confirmPassword) {
      validatePasswordMatch(confirmPassword);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    if (confirmPassword && confirmPassword !== password) {
      setPasswordMismatchError('Passwords do not match');
      return;
    }

    console.log('Sign up:', { email, password, rememberMe });
  };

//   return (
//     <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-[4fr_2fr]">
//       {/* Left - Gallery */}
//       <div className="hidden lg:block h-full">
//         <DomeGallery />
//       </div>

//       {/* Right - Signup Form */}
//       <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-slate-950 via-black to-slate-900 p-6">
//         <Card className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
//           <div className="p-10 space-y-8">
//             {/* Logo */}
//             <Link href="https://app.ishout.ae/" className="flex justify-center">
//               <div className="flex items-center gap-2">
//                 <Image
//                   src="/assets/iShout-gif-black-background.gif"
//                   alt="ishout"
//                   loading="eager"
//                   width={80}
//                   height={80}

//                 />
//                 <h2 className="text-4xl font-bold text-white tracking-tight">
//                   i<span className="text-white font-extrabold">S</span>
//                   hout
//                   <span className="text-primarytext font-extrabold">.</span>
//                 </h2>
//               </div>
//             </Link>

//             {/* Heading */}
//             <div className="text-center space-y-2">
//               <h1 className="text-2xl font-semibold text-white">Create your account</h1>
//               <p className="italic text-sm text-slate-400">
//                 Start managing campaigns in minutes
//               </p>
//             </div>

//             {/* Form */}
//             <Form {...form}>
//               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
//                 {/* Contact Person */}
//                 <FormField
//                   control={form.control}
//                   name="contact_person"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>
//                         <Input
//                           placeholder="Contact person"
//                           {...field}
//                           className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus:ring-2 focus:ring-primarytext focus:border-transparent"
//                         />
//                       </FormLabel>
//                       <FormMessage className="text-xs text-red-400" />
//                     </FormItem>
//                   )}
//                 />

//                 {/* Phone */}
//                 <FormField
//                   control={form.control}
//                   name="phone"
//                   render={({ field }) => {
//                     const displayValue = normalizePhoneNumberForDisplay(field.value);
//                     return (
//                       <FormItem>
//                         <FormControl>
//                           <PhoneInput
//                             international
//                             defaultCountry="AE"
//                             countryCallingCodeEditable={false}
//                             placeholder="Phone number"
//                             value={displayValue}
//                             onChange={(value) => {
//                               const valueWithoutPlus = removePlusPrefix(value);
//                               field.onChange(valueWithoutPlus);
//                             }}
//                             countrySelectComponent={(props) => (
//                               <MobileCountrySelect
//                                 {...props}
//                                 searchInputClassName={registerCountrySearchInputClassName}
//                               />
//                             )}
//                             className="h-12 rounded-xl border border-white/10 bg-white/5 px-3 text-white focus-within:ring-2 focus-within:ring-primarytext w-full"
//                           />
//                         </FormControl>
//                         <FormMessage className="text-xs text-red-400" />
//                       </FormItem>
//                     );
//                   }}
//                 />

//                 {/* Company */}
//                 <FormField
//                   control={form.control}
//                   name="company_name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input
//                           placeholder="Company name"
//                           {...field}
//                           className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus:ring-2 focus:ring-primarytext focus:border-transparent"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-xs text-red-400" />
//                     </FormItem>
//                   )}
//                 />

//                 {/* Email */}
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <Input
//                           type="email"
//                           placeholder="name@company.com"
//                           {...field}
//                           className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus:ring-2 focus:ring-primarytext focus:border-transparent"
//                         />
//                       </FormControl>
//                       <FormMessage className="text-xs text-red-400" />
//                     </FormItem>
//                   )}
//                 />

//                 {/* Password */}
//                 <FormField
//                   control={form.control}
//                   name="password"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormControl>
//                         <div className="relative">
//                           <Input
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Create a strong password"
//                             {...field}
//                             className="h-12 bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-xl pr-24 focus:ring-2 focus:ring-primarytext focus:border-transparent"
//                           />
//                           <button
//                             type="button"
//                             onClick={() => {
//                               field.onChange(generateStrongPassword());
//                               setShowPassword(true);
//                             }}
//                             className="absolute right-10 top-1/2 -translate-y-1/2 text-xs font-medium text-primarytext hover:underline"
//                           >
//                             Generate
//                           </button>
//                           <button
//                             type="button"
//                             onClick={() => setShowPassword((v) => !v)}
//                             className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
//                           >
//                             {showPassword ? (
//                               <EyeOff className="h-5 w-5" />
//                             ) : (
//                               <Eye className="h-5 w-5" />
//                             )}
//                           </button>
//                         </div>
//                       </FormControl>
//                       <FormMessage className="text-xs text-red-400" />
//                     </FormItem>
//                   )}
//                 />

//                 {/* CTA */}
//                 <CustomButton
//                   className="w-full h-12 rounded-xl bg-primarytext text-white font-semibold shadow-lg hover:bg-primaryHover hover:opacity-90 transition-all"
//                   disabled={isPending}
//                 >
//                   {isPending ? (
//                     <Loader2 className="animate-spin text-white" />
//                   ) : (
//                     'Create Account'
//                   )}
//                 </CustomButton>
//               </form>
//             </Form>

//             {/* Footer */}
//             <p className="text-center text-sm text-slate-400">
//               Already have an account?{' '}
//               <Link href="/auth/login" className="text-white font-medium hover:underline">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }

export default function SignupPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="mx-auto flex flex-col lg:flex-row h-screen overflow-hidden lg:overflow-hidden bg-white">
        {/* Left Side - Form */}
        <section className="w-full lg:w-1/2 flex items-center justify-center min-h-screen lg:min-h-0 bg-[radial-gradient(circle_at_top_left,#E3E6FB,transparent_55%)] overflow-y-auto">
          <div className="w-full max-w-[420px] sm:max-w-[460px] md:max-w-[500px] space-y-3 py-5 sm:py-4 px-6 sm:px-8 md:px-12 lg:px-16">
            {/* Logo */}
            <div className="flex justify-center">
              <img
                src="/assets/logo.svg"
                alt="Influ.ai Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              />
            </div>

            {/* Heading */}
            <div className="text-center space-y-1">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Create Your Account
              </h1>
              <p className="text-[13px] text-gray-500">
                Set up your account and start building smarter with AI.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={(e) => validateEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-white rounded-full h-10 sm:h-11 px-4 sm:px-5 border border-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B5BD6] focus:border-transparent text-sm"
                />
                {emailError && (
                  <p className="text-xs text-red-500 mt-1">{emailError}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Set Your Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter New Password"
                    className="w-full bg-white rounded-full h-10 sm:h-11 px-4 sm:px-5 pr-10 sm:pr-12 border border-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B5BD6] focus:border-transparent text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
                    ) : (
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={(e) => validatePasswordMatch(e.target.value)}
                    placeholder="Enter Confirm Password"
                    className="w-full bg-white rounded-full h-10 sm:h-11 px-4 sm:px-5 pr-10 sm:pr-12 border border-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B5BD6] focus:border-transparent text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 sm:h-5 sm:w-5" />
                    ) : (
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                    )}
                  </button>
                </div>
                {passwordMismatchError && (
                  <p className="text-xs text-red-500 mt-1">{passwordMismatchError}</p>
                )}
              </div>

              {/* Remember me & Forgot Password */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-gray-300 text-[#5B5BD6] focus:ring-[#5B5BD6]"
                  />
                  <span>Remember Me</span>
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="hover:text-gray-700"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full h-10 sm:h-11 rounded-full bg-[#5B5BD6] text-white text-sm sm:text-base font-semibold shadow-lg hover:bg-[#4a4ac5] transition-all"
              >
                Sign up
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center mt-2">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-3 text-xs text-gray-400 uppercase">or</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Social Buttons */}
            <div className="grid w-full grid-cols-1 gap-2 mt-1">
              <button
                type="button"
                className="flex w-full h-12 min-w-0 items-center justify-center gap-2 rounded-full bg-[#EEF0FB] text-sm font-medium whitespace-nowrap overflow-hidden hover:bg-[#E3E6F8]"
              >
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z"/>
                  <path fill="#FBBC05" d="M10.5 28.7c-.5-1.500-.8-3.100-.8-4.700s.3-3.200.8-4.700l-7.900-6.100C.9 16.500 0 20.100 0 24s.9 7.500 2.600 10.800l7.900-6.100z"/>
                  <path fill="#34A853" d="M24 48c6.500 0 11.900-2.100 15.900-5.800l-7.500-5.800c-2.100 1.400-4.800 2.300-8.400 2.300-6.300 0-11.600-4.100-13.500-9.800l-7.900 6.100C6.500 42.600 14.600 48 24 48z"/>
                </svg>
                Continue With Google
              </button>
            </div>
          </div>
        </section>

        {/* Right Side - Image Panel */}
        <section className="hidden lg:flex lg:w-1/2 sticky top-0 h-screen m-4 overflow-hidden rounded-3xl bg-[#4F52D9] p-6 items-center justify-center">
          {/* Background image */}
          <img
            src="/assets/signup-bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dashboard preview image */}
          <img
            src="/assets/signup-preview.png"
            alt="Dashboard preview"
            className="relative z-10 w-full h-full object-contain"
          />
        </section>
      </div>
    </div>
  );
}
